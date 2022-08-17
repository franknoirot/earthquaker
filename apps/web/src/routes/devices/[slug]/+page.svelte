<script lang="ts">
  import type { PageData } from './$types'
  import BlockContent from '$lib/components/BlockContent/index.svelte'

  export let data : PageData
</script>

<svelte:head>
  {@html `<style>body {
    --bg: ${data.colorBackground.hex};
    --fg: ${data.colorForeground.hex};
    --dark-bg: ${(data.colorForeground.hsl.l > .5) ? 1 : 0}
  }</style>`}
</svelte:head>
<section class="intro">
  <img src={data.mainImage.asset.url} alt={data.title}>
  <div>
    <h1>{data.title}</h1>
    <h2 class="serif">{data.subtitle}</h2>
    <div class="block-content">
      <BlockContent value={data.intro} />
    </div>
  </div>
</section>
<pre>{JSON.stringify(data, null, 2)}</pre>

<style>
  .intro {
    display: grid;
    grid-template-columns: minmax(300px, 2fr) 3fr;
    gap: 2rem;
    margin-top: 3rem;
  }

  .intro img {
    place-self: center;
    max-width: 400px;
  }

  .intro h2 {
    margin: 0;
    text-align: center;
  }

  .intro div {
    box-sizing: border-box;
    padding: 0 1rem;
  }

  .intro .block-content {
    margin: 3rem auto;
    max-width: 86ch;
    font-size: 1.25rem;
    line-height: 1.4;
  }
  
  h1 {
    margin: 0;
    text-align: center;
    font-family: var(--display);
    font-size: 8rem;
  }
</style>
