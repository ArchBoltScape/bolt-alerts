<script lang="ts">
    import { RuleType } from './interfaces';
    import { writable, type Writable } from 'svelte/store';

    let ruleType: Writable<RuleType | null> = writable(null);
</script>

<div class="mx-2 my-1 p-0 b-0">
    <p class="text-[16pt] font-bold">New Ruleset</p>
    <p class="text-[10pt]">A ruleset decides how you want to be alerted. It can have any number of rules in it and the alert will be sent when any of those rules becomes active.</p>
    <hr class="my-4 opacity-40">
    <div class="text-[8pt] w-auto">
        <label for="2" class="font-italic">Rule type:</label>
        <br>
        <select id="2" bind:value={ruleType} class="border-1 px-[3px] py-[2px] border-black focus:border-3 focus:px-[1px] focus:py-0">
            <option value={RuleType.afktimer}>AFK timer</option>
            <option value={RuleType.buff}>Buffs/debuffs</option>
            <option value={RuleType.chat}>Chat text</option>
            <option value={RuleType.model}>3D object</option>
            <option value={RuleType.popup}>Popup text</option>
            <option value={RuleType.stat}>Stat bars</option>
            <option value={RuleType.xpgain}>XP gain</option>
        </select>
        <br>
        {#if $ruleType !== null}
            <hr class="my-4 opacity-40">
        {/if}
        {#if $ruleType === RuleType.afktimer}
            <p></p>
        {:else if $ruleType === RuleType.buff}
            <p></p>
        {:else if $ruleType === RuleType.chat}
            <p></p>
        {:else if $ruleType === RuleType.model}
            <p></p>
        {:else if $ruleType === RuleType.popup}
            <p></p>
        {:else if $ruleType === RuleType.stat}
            <p></p>
        {:else if $ruleType === RuleType.xpgain}
            <p></p>
        {/if}
    </div>
</div>
