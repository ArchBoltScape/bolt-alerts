<script lang="ts">
    import { RuleType, type Ruleset, type ConfigRuleset, type AlertRule, type ConfigRule } from './interfaces';
    import { get, type Writable } from 'svelte/store';
    import { v4 as randomUUID } from 'uuid';

    const params = new URLSearchParams(window.location.search);

    window.addEventListener('message', (event) => {
        if (!event.data || typeof(event.data) !== 'object' || event.data.type !== 'pluginMessage') return;
        const msgType = new Uint16Array(event.data.content.slice(0, 2))[0];
        switch (msgType) {
            case 1: {
                // new or edited ruleset
                const params = new URLSearchParams((new TextDecoder()).decode(event.data.content.slice(2)));
                let id = params.get('id');
                let oldRuleset: Ruleset | null = null;
                if (id) {
                    oldRuleset = get(list)[id];
                } else {
                    id = randomUUID();
                }
                $list[id] = {
                    id,
                    name: params.get('name')!,
                    rules: oldRuleset ? oldRuleset.rules : {},
                    expanded: oldRuleset ? oldRuleset.expanded : false,
                    alert: oldRuleset ? oldRuleset.alert : false,
                    doFlashWindow: params.get('flash_window')! === '1',
                    sound: params.get('sound') ?? undefined,
                    volume: parseInt(params.get('volume')!),
                    onlyIfUnfocused: params.get('only_if_unfocused')! === '1',
                };
                break;
            }
            case 2: {
                // new or edited rule
                const params = new URLSearchParams((new TextDecoder()).decode(event.data.content.slice(2)));
                const rulesets = $list;
                const ruleset = rulesets[params.get('ruleset_id')!];
                let id = params.get('id');
                let oldRule: AlertRule | null = null;
                if (id) {
                    oldRule = ruleset.rules[id];
                } else {
                    id = randomUUID();
                }
                let number = params.get('number');
                ruleset.rules[id] = {
                    id,
                    ruletype: params.get('type')! as RuleType,
                    alert: oldRule ? oldRule.alert : false,
                    number: number ? parseInt(number) : undefined,
                    ref: params.get('ref') ?? undefined,
                    comparator: params.get('comparator') ?? undefined,
                    find: params.get('find') ?? undefined,
                };
                ruleset.expanded = true;
                list.set(rulesets);
                break;
            }
            default:
                console.error(`unknown message type ${msgType}`);
        }
    });

    let listHasChanged = false;
    export let list: Writable<{[id: string]: Ruleset}>;
    $: {
        const rulesets = $list;
        if (listHasChanged || Object.keys(rulesets).length > 0) {
            // inform the lua code of our new list of rulesets
            // TODO:
        }
        if (listHasChanged) {
            // save the config file to disk
            const config: ConfigRuleset[] = Object.values(rulesets).map((ruleset) => {return {
                id: ruleset.id,
                name: ruleset.name,
                rules: Object.values(ruleset.rules).map((x: AlertRule): ConfigRule => {return {
                    ruletype: x.ruletype,
                    number: x.number,
                    ref: x.ref,
                    comparator: x.comparator,
                    find: x.find,
                }}),
                doFlashWindow: ruleset.doFlashWindow,
                sound: ruleset.sound,
                volume: ruleset.volume,
                onlyIfUnfocused: ruleset.onlyIfUnfocused,
            }});
            const body = '\x03\x00'.concat(JSON.stringify(config));
            fetch("https://bolt-api/send-message", { method: 'POST', body });
        } else {
            listHasChanged = true;
        }
    }

    const openNewRulesetMenu = () => fetch("https://bolt-api/send-message", { method: 'POST', body: new Uint8Array([1, 0]) });

    const openEditRulesetMenu = (ruleset: Ruleset) => {
        let params: Record<string, string> = {
            id: ruleset.id,
            name: ruleset.name,
            only_if_unfocused: ruleset.onlyIfUnfocused ? '1' : '0',
            flash_window: ruleset.doFlashWindow ? '1' : '0',
            volume: ruleset.volume.toString(),
        };
        if (ruleset.sound) {
            params['sound'] = ruleset.sound;
        }
        const body = '\x02\x00'.concat(new URLSearchParams(params).toString());
        fetch("https://bolt-api/send-message", { method: 'POST', body });
    };

    const openAddRuleMenu = (ruleset: Ruleset) => {
        let params: Record<string, string> = {
            ruleset_id: ruleset.id,
        };
        const body = '\x04\x00'.concat(new URLSearchParams(params).toString());
        fetch("https://bolt-api/send-message", { method: 'POST', body });
    };

    const openEditRuleMenu = (ruleset: Ruleset, rule: AlertRule) => {
        let params: Record<string, string> = {
            ruleset_id: ruleset.id,
            id: rule.id,
            type: rule.ruletype,
        };
        if (rule.number) params['number'] = rule.number.toString();
        if (rule.ref) params['ref'] = rule.ref;
        if (rule.comparator) params['comparator'] = rule.comparator;
        if (rule.find) params['find'] = rule.find;
        const body = '\x04\x00'.concat(new URLSearchParams(params).toString());
        fetch("https://bolt-api/send-message", { method: 'POST', body });
    };

    const deleteRuleset = (ruleset: Ruleset) => {
        const newList = get(list);
        delete newList[ruleset.id];
        list.set(newList);
    };

    const deleteRule = (ruleset: Ruleset, rule: AlertRule) => {
        delete ruleset.rules[rule.id];
        list.set($list);
    }

    const setExpanded = (ruleset: Ruleset, expanded: boolean) => {
        ruleset.expanded = expanded;
        list = list;
    };

    const getRuleDescription = (rule: AlertRule) => {
        switch (rule.ruletype) {
            case RuleType.afktimer:
                if (!rule.number) return 'afk timer';
                return `afk timer (${Math.floor(rule.number / 1000000.0)} sec)`;
            case RuleType.buff:
                switch (rule.comparator) {
                    case 'active':
                        return `buff '${rule.ref}' active`;
                    case 'inactive':
                        return `buff '${rule.ref}' inactive`;
                    case 'lessthan':
                        return `buff '${rule.ref}' < ${rule.number}`;
                    case 'greaterthan':
                        return `buff '${rule.ref}' > ${rule.number}`;
                    case 'parenslessthan':
                        return `buff '${rule.ref}' parentheses < ${rule.number}`;
                    case 'parenscreaterthan':
                        return `buff '${rule.ref}' parentheses > ${rule.number}`;
                    default:
                        return `buff '${rule.ref}'`;
                }
            case RuleType.chat:
                return `chat text: '${rule.find}'`;
            case RuleType.model:
                return `3D model: '${rule.ref}'`;
            case RuleType.popup:
                return `popup text: '${rule.find}'`;
            case RuleType.stat:
                if (!rule.number) return ``;
                return `stat '${rule.ref}' < ${Math.floor(rule.number * 100.0)}%`;
            case RuleType.xpgain:
                if (!rule.number) return 'xp gain';
                return `xp gain timeout (${Math.floor(rule.number / 1000000.0)} sec)`;
            default:
                return 'unknown';
        }
    }
</script>

<div>
    {#each Object.values($list) as ruleset, i}
        <div class={"relative w-full text-[8pt] ".concat(ruleset.alert ? "bg-red-400" : (i & 1 ? "bg-gray-200" : "bg-gray-300"))}>
            {#if ruleset.expanded}
                <button class="h-[14px] w-[14px] pointer-events-auto" onclick={() => setExpanded(ruleset, false)}><img src="plugin://app/images/caret-down-solid.svg" class="w-full h-full" alt="Hide" /></button>
            {:else}
                <button class="h-[14px] w-[14px] pointer-events-auto" onclick={() => setExpanded(ruleset, true)}><img src="plugin://app/images/caret-down-solid.svg" class="w-full h-full rotate-270" alt="Expand" /></button>
            {/if}
            {ruleset.name}
            <button
                class="absolute rounded-lg right-0 top-0 h-[18px] w-[18px] hover:bg-red-500 pointer-events-auto py-0 by-0"
                onclick={() => deleteRuleset(ruleset)}
                title="Delete"
            >
                <img src="plugin://app/images/xmark-solid.svg" class="w-full h-full" alt="Delete" />
            </button>
            <button
                class="absolute rounded-lg right-[18px] top-0 h-[18px] w-[18px] hover:bg-blue-400 pointer-events-auto py-0 by-0"
                onclick={() => openEditRulesetMenu(ruleset)}
                title="Edit"
            >
                <img src="plugin://app/images/gear-solid.svg" class="absolute top-[2px] left-[2px] w-[14px] h-[14px]" alt="Edit" />
            </button>
            <button
                class="absolute rounded-lg right-[36px] top-0 h-[18px] w-[18px] hover:bg-emerald-400 pointer-events-auto py-0 by-0"
                onclick={() => openAddRuleMenu(ruleset)}
                title="Add rule"
            >
                <img src="plugin://app/images/plus-solid.svg" class="w-full h-full" alt="Add rule" />
            </button>
        </div>
        {#if ruleset.expanded}
            {#each Object.values(ruleset.rules) as rule}
                <div class={"relative px-1 w-full text-[8pt] ".concat(rule.alert ? "bg-red-400" : (i & 1 ? "bg-gray-200" : "bg-gray-300"))}>
                    {getRuleDescription(rule)}
                    <button
                        class="absolute rounded-lg right-0 top-0 h-[18px] w-[18px] hover:bg-red-500 pointer-events-auto py-0 by-0"
                        onclick={() => deleteRule(ruleset, rule)}
                        title="Delete"
                    >
                        <img src="plugin://app/images/xmark-solid.svg" class="w-full h-full" alt="Delete" />
                    </button>
                    <button
                        class="absolute rounded-lg right-[18px] top-0 h-[18px] w-[18px] hover:bg-blue-400 pointer-events-auto py-0 by-0"
                        onclick={() => openEditRuleMenu(ruleset, rule)}
                        title="Edit"
                    >
                        <img src="plugin://app/images/gear-solid.svg" class="absolute top-[2px] left-[2px] w-[14px] h-[14px]" alt="Edit" />
                    </button>
                </div>
            {/each}
        {/if}
    {/each}
    <button class="rounded-sm my-1 px-2 py-1 bg-emerald-400 pointer-events-auto hover:opacity-75" onclick={openNewRulesetMenu}>Add ruleset</button>
</div>
