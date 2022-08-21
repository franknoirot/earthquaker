<script lang="ts">
  import type { PageData } from './$types'
  import BlockContent from '$lib/components/BlockContent/index.svelte'
  import AudioSampleCard from '$lib/components/AudioSampleCard.svelte'

  export let data : PageData
</script>

<svelte:head>
  {@html `<style>body {
    --bg: ${data.colorBackground.hex};
    --fg: ${data.colorForeground.hex};
    --dark-bg: ${(data.colorForeground.hsl.l > .5) ? 1 : ''}
  }</style>`}
</svelte:head>
<section class="intro">
  <img src={data.mainImage.asset.url + `?fm=webp`} alt={data.title}>
  <div>
    <h1>{data.title}<small>{data.trademarkStatus || ''}</small></h1>
    <h2 class="serif">{data.subtitle}</h2>
    {#if data.category == "Legacy"}
    <p class="legacy-product-notice">This device is no longer in production</p>
    {/if}
    <div class="block-content">
      <BlockContent value={data.intro} />
    </div>
    {#if data.audioSamples.length}
    <section class="audio">
      <h2>Audio Samples</h2>
      <div class="audio-grid">
        {#each data.audioSamples as audioSample, i (audioSample._id)}
        <AudioSampleCard {audioSample} filterDeviceTitle={data.title}/>
        {/each}
      </div>
    </section>
    {/if}
    {#if data.videos.length}
    <section class="video">
      <h2>Videos</h2>
      <div class="video-grid">
        {#each data.videos as videoUrl, i (videoUrl)}
        <iframe width="560"  src={`https://www.youtube-nocookie.com/embed/${(new URL(videoUrl)).searchParams.get('v')}?controls=0`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        {/each}
      </div>
    </section>
    {/if}
  </div>
</section>



<style>
  section {
    margin: 6rem auto;
    max-width: 1800px;
    padding: 0 1rem;
  }

  h2 {
    margin-bottom: 3rem;
  }
  
  .intro {
    margin-top: 4rem;
    display: grid;
    grid-template-columns: minmax(300px, 2fr) 3fr;
    gap: 2rem;
  }

  .intro img {
    top: 20px;
    position: sticky;
    justify-self: center;
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

  .intro .legacy-product-notice {
    border-radius: 8px;
    width: fit-content;
    margin: 1rem auto;
    background: gold;
    color: black;
    font-size: 1.5rem;
    text-align: center;
    padding: 1rem 2rem;
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
  
  .video-grid,
  .audio-grid {
    display: grid;
    --min-grid: 300px;
    grid-template-columns: repeat(auto-fill, minmax(var(--min-grid), 1fr));
    gap: 2rem;
  }

  .video-grid {
    --min-grid: 240px;
  }


  .video iframe {
    aspect-ratio: 16 / 9;
    width: 100%;
  }
</style>
