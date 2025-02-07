<script lang="ts">
  const startDrag = (h: string, v: string) => fetch('https://bolt-api/start-reposition?'.concat(new URLSearchParams({h, v}).toString()));
  const close = () => fetch('https://bolt-api/close-request');
</script>

<main>
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div class="absolute grid grid-cols-[5px_auto_5px] grid-rows-[5px_auto_5px] top-0 left-0 bottom-0 right-0 pointer-events-none">
    <div class="bg-black pointer-events-auto select-none" onmousedown={() => startDrag('-1', '-1')}></div>
    <div class="bg-black pointer-events-auto select-none" onmousedown={() => startDrag('0', '-1')}></div>
    <div class="bg-black pointer-events-auto select-none" onmousedown={() => startDrag('1', '-1')}></div>
    <div class="bg-black pointer-events-auto select-none" onmousedown={() => startDrag('-1', '0')}></div>
    <div class="pointer-events-none"></div>
    <div class="bg-black pointer-events-auto select-none" onmousedown={() => startDrag('1', '0')}></div>
    <div class="bg-black pointer-events-auto select-none" onmousedown={() => startDrag('-1', '1')}></div>
    <div class="bg-black pointer-events-auto select-none" onmousedown={() => startDrag('0', '1')}></div>
    <div class="bg-black pointer-events-auto select-none" onmousedown={() => startDrag('1', '1')}></div>
  </div>

  <div class="m-[7px] w-auto h-auto">
    <div class="m-0 p-0 b-0 absolute top-[5px] right-[5px] w-[18px] h-[18px]">
      <button class="m-0 p-0 b-0 absolute top-0 left-0 w-full h-full select-none text-center text-[12px] bg-[hsl(0,70%,50%)] hover:bg-[hsl(0,100%,50%)]" onclick={close}>X</button>
    </div>
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="m-0 p-0 b-0 absolute left-[5px] top-[5px] right-[23px] h-[18px] bg-[grey] text-center text-[10pt]" onmousedown={() => startDrag('0', '0')}>
      <p class="m-0 p-0 b-0 color-black select-none pointer-events-none">Alerts</p>
    </div>
    <div class="fixed top-[21px] bottom-[6px] left-[6px] right-[6px] text-[10pt] pointer-events-none">
      <p>Hello World</p>
    </div>
  </div>
</main>
