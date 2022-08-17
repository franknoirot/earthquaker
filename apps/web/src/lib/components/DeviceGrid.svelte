<script>
  import DeviceCard from '$lib/components/DeviceCard.svelte'
  
  export let devices = []
  export let columns = 4
</script>

<section class="device-grid" style={`--columns: ${columns};`}>
  {#each devices as device, i (device.title)}
  <DeviceCard device={device} />
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
