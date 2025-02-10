<script lang="ts">
    let params = new URLSearchParams(window.location.search);
    let paramVolume = params.get('volume');

    let id: string | null = params.get('id');
    let name: string = params.get('name') ?? 'New Ruleset';
    let onlyIfUnfocused: boolean = params.get('only_if_unfocused') === '1';
    let doFlashWindow: boolean = params.get('flash_window') === '1';
    let soundName: string | null = params.get('sound');
    let doPlaySound: boolean = soundName !== null;
    let volume: number = paramVolume ? parseInt(paramVolume) : 100;

    const nameTooltip = "how this ruleset will be identified in the main window";
    const onlyIfUnfocusedTooltip = "if checked, alert only if the game window is out-of-focus, otherwise always alert";
    const flashWindowTooltip = "if checked, flash in the taskbar when this ruleset alerts";
    const playSoundTooltip = "if checked, play a sound when this ruleset alerts (more sound options below)";
    const soundNameTooltip = "name of the sound file in the sounds directory";

    const getPostBody = () => {
        let params: Record<string, string> = {
            name,
            flash_window: doFlashWindow ? '1' : '0',
            volume: volume.toString(),
            only_if_unfocused: onlyIfUnfocused ? '1' : '0',
        };
        if (doPlaySound && soundName) {
            params['sound'] = soundName;
        }
        if (id) {
            params['id'] = id;
        }
        return '\x01\x00'.concat(new URLSearchParams(params).toString());
    }

    const save = () => fetch("https://bolt-api/send-message", {method: 'POST', body: getPostBody()});
    const cancel = () => fetch("https://bolt-api/close-request");
</script>

<div class="mx-2 my-1 p-0 b-0 text-gray-200">
    {#if id === null}
        <p class="text-[16pt] font-bold">New Ruleset</p>
        <p class="text-[10pt]">A ruleset decides how you want to be alerted. It can have any number of rules in it and the alert will be sent when any of those rules becomes active.</p>
    {:else}
        <p class="text-[16pt] font-bold">Edit Ruleset</p>
    {/if}
    <hr class="my-4 opacity-40">
    <div class="text-[8pt] w-auto select-none">
        <label for="1" class="font-italic" title={nameTooltip}>Ruleset name:</label>
        <br>
        <input
            id="1"
            type="text"
            class="border-gray-200 text-[12pt] border-1 w-full max-w-[260px] px-[3px] py-[2px] border-black focus:border-3 focus:px-[1px] focus:py-0"
            bind:value={name}
            title={nameTooltip}
        />
        <br><br>
        <input
            id="2"
            type="checkbox"
            bind:checked={onlyIfUnfocused}
            title={onlyIfUnfocusedTooltip}
        />
        <label for="2" class="font-italic" title={onlyIfUnfocusedTooltip}>Alert only if unfocused</label>
        <br><br>
        <input
            id="3"
            type="checkbox"
            bind:checked={doFlashWindow}
            title={flashWindowTooltip}
        />
        <label for="3" class="font-italic" title={flashWindowTooltip}>Flash window</label>
        <br><br>
        <input
            id="4"
            type="checkbox"
            bind:checked={doPlaySound}
            title={playSoundTooltip}
            onchange={() => {if (doPlaySound) { soundName = "ding.wav"; } else { soundName = null; }}}
        />
        <label for="4" class="font-italic" title={playSoundTooltip}>Play a sound</label>
        {#if doPlaySound}
            <br>
            <label for="5" class="font-italic" title={soundNameTooltip}>Sound name:</label>
            <br>
            <input
                id="5"
                type="text"
                class="border-gray-200 text-[12pt] border-1 w-full max-w-[260px] px-[3px] py-[2px] border-black focus:border-3 focus:px-[1px] focus:py-0 disabled:border-gray-500"
                bind:value={soundName}
                disabled={true}
                title={soundNameTooltip}
            />
            <br>
            <label for="6" class="font-italic">Volume: {volume}%</label>
            <br>
            <input id="6" type="range" bind:value={volume} disabled={!doPlaySound} />
        {/if}
    </div>
    <span>
        <button class="w-25 bg-red-500 rounded-sm py-1 px-2 mr-1 mt-4 font-bold text-white text-center hover:opacity-75" onclick={cancel}>Cancel</button>
        <button
            class="w-25 bg-blue-500 rounded-sm py-1 px-2 mt-4 font-bold text-white text-center enabled:hover:opacity-75 disabled:bg-gray-500"
            onclick={save}
            disabled={name.length === 0}
        >Save</button>
    </span>
</div>
