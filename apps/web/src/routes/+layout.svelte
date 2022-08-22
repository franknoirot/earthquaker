<script lang="ts">
  import type { PageData } from './$types'
  import { page } from '$app/stores'
  import Nav from '$lib/components/Nav.svelte'
  import Footer from '$lib/components/Footer.svelte'
  
  export let data : PageData
</script>


<div class='bg-wrap' style={`
    --bg: ${$page.data?.colorBackground?.hex || 'white'};
    --fg: ${$page.data?.colorForeground?.hex || 'black'};
    --dark-bg: ${($page.data?.colorForeground && $page.data.colorForeground.hsl.l > .5) ? 1 : 0}
  `}>
  <div class="theme-wrap">
    <Nav companyInfo={data.companyInfo}/>
    <main>
      <slot />
    </main>
    <Footer companyInfo={data.companyInfo}/>
  </div>
</div>

<style>
 .theme-wrap {
    background: var(--bg);
    border-radius: 8px;
    color: var(--fg);
    min-height: 100vh;
  }

  main {
    min-height: 100vh;
  }
</style>
