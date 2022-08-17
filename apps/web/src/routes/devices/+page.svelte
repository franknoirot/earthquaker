<script lang="ts">
  import type { PageData } from './$types'
  import DeviceGrid from '$lib/components/DeviceGrid.svelte'

  export let data : PageData
</script>

<h1>Our Devices</h1>
<DeviceGrid devices={data.devices} />
