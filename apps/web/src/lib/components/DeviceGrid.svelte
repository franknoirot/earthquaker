<script lang="ts">
  import type { DeviceCard as DeviceCardType } from '$lib/sanity'
  import DeviceCard from '$lib/components/DeviceCard.svelte'
  
  export let devices : DeviceCardType[] = []
  export let columns = 4
  export let isNewToggled = false
</script>

<section class="device-grid" style={`--columns: ${columns};`}>
  {#each devices as device, i (device.title)}
  <DeviceCard device={device} {isNewToggled} cardIndex={i} />
  {/each}
</section>

<style>
  .device-grid {
    max-width: 1440px;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(var(--columns), 1fr);
    gap: 2rem;
  }
</style>
