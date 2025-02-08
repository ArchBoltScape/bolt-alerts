<script lang="ts">
    import { type Ruleset, type ConfigRuleset } from './interfaces';
    import { get, writable, type Writable } from 'svelte/store';
    import { v4 as randomUUID } from 'uuid';

    const params = new URLSearchParams(window.location.search);

    window.addEventListener('message', (event) => {
        if (!event.data || typeof(event.data) !== 'object' || event.data.type !== 'pluginMessage') return;
        const msgType = new Uint16Array(event.data.content.slice(0, 2))[0];
        switch (msgType) {
            case 1:
                // new or edited ruleset
                const params = new URLSearchParams((new TextDecoder()).decode(event.data.content.slice(2)));
                let id = params.get('id');
                let oldRuleset;
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
            default:
                console.error(`unknown message type ${msgType}`);
        }
    });

    let listHasChanged = false;
    export let list: Writable<{[id: string]: Ruleset}>;
    $: if (listHasChanged) {
        const config = Object.values($list).map((ruleset) => {return {
            id: ruleset.id,
            name: ruleset.name,
            rules: [],
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
    const deleteRuleset = (ruleset: Ruleset) => {
        const newList = get(list);
        delete newList[ruleset.id];
        list.set(newList);
    };
    const setExpanded = (ruleset: Ruleset, expanded: boolean) => {
        ruleset.expanded = expanded;
        list = list;
    };
</script>

<div>
    {#each Object.values($list) as ruleset, i}
        <div class={i & 1 ? "relative w-full bg-gray-300 b-0 text-[8pt]" : "relative w-full bg-gray-200 b-0 text-[8pt]"}>
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
                <img src="plugin://app/images/gear-solid.svg" class="w-full h-full" alt="Edit" />
            </button>
        </div>
    {/each}
    <button class="rounded-sm my-1 px-2 py-1 bg-emerald-400 pointer-events-auto hover:opacity-75" onclick={openNewRulesetMenu}>Add ruleset</button>
</div>
