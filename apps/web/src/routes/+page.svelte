<script lang="ts">
  import type { PageData } from './$types'
  import ArtistCard from '$lib/components/ArtistCard.svelte'
  import AudioSampleCard from '$lib/components/AudioSampleCard.svelte'
  import DeviceCard from '$lib/components/DeviceCard.svelte'
  import BlogPostCard from '$lib/components/BlogPostCard.svelte'
 // import BlockContent from '$lib/components/BlockContent/index.svelte'

  export let data : PageData
</script>

<h1>EarthQuaker Devices</h1>
<section class="content-grid">
  {#each data.page.contentGrid as block, i (block._key)}
  <div class={`grid-block ${block.reference._type}`} style={`--tilt: ${block.tilt}deg; grid-row: span ${block.rows}; grid-column: span ${block.columns};`}>
    {#if block.reference._type == 'artist'}
    <ArtistCard artist={block.reference} cardIndex={i} />
    {:else if block.reference._type == 'audioSample'}
    <AudioSampleCard audioSample={block.reference}
      colorBackground={block.reference.devices[0].colorBackground.hex}
      colorForeground={block.reference.devices[0].colorForeground.hex}
    />
    {:else if block.reference._type == 'blogPost'}
    <BlogPostCard post={block.reference} cardIndex={i} />
    {:else if block.reference._type == 'device'}
    <DeviceCard device={block.reference} isNewToggled={true} cardIndex={i} />
    {:else}
    <summary>{block.reference._type}
      <details>
        <pre>{JSON.stringify(block, null, 2)}</pre>
      </details>
    </summary>
    {/if}
    {#if block.sticker}
    <img class="sticker" src={`/${block.sticker}-sticker.svg`} alt={block.sticker + '!'} />
    {/if}
  </div>
  {/each}
</section>


<style>
  .content-grid {
    max-width: 1440px;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 360px;
    gap: 2rem;
  }

  .grid-block {
    transform-origin: center;
    transform: rotate(var(--tilt));
    position: relative;
  }

  .grid-block > :global(*:first-child) {
    height: 100%;
    width: 100%;
  }

  .sticker {
    position: absolute;
    top: 10px;
    left: 10px;
    transform: rotate(-15deg);
    width: 80px;
    height: 80px;
  }

  .audioSample > :global(*:first-child) {
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 8px;
  }

  .blogPost > :global(*:first-child) {
    border: solid 2px var(--fg, gold);
    display: block;
  }

  .blogPost:hover > :global(*:first-child) {
    background: var(--fg, gold);
    color: var(--bg, black);
  }
</style>
