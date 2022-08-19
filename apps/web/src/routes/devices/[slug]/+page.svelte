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
        <div class="audio-card">
          <p class="title">{audioSample.title}</p>
          <audio controls src={audioSample.audio?.asset?.url}></audio>
          <p>Played on a {audioSample.instrument}</p>
          {#if audioSample.devices.length > 1}
          <p>
            with&nbsp;
            {#each audioSample.devices.filter(d => d.title !== data.title) as device, j (device.title)}
            <a href={'/devices/' + device.slug.current}>{device.title}</a>{(j < audioSample.devices.length - 2) ? ', ' : ' '}
            {/each}
          </p>
          {/if}
        </div>
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
    --min-grid: 400px;
    grid-template-columns: repeat(auto-fill, minmax(var(--min-grid), 1fr));
    gap: 2rem;
  }

  .video-grid {
    --min-grid: 240px;
  }

  .audio-card {
    margin: 0 1rem;
    box-sizing: border-box;
    padding: .5rem 1rem;
    border-radius: 16px;
    box-shadow: 0 4px 6px hsla(0deg, 0%, 0%, .14), 0 12px 24px hsla(0deg, 0%, 0%, .13);
  }

  .audio-card .title {
    font-size: 1.25rem;
  }
  .audio-card p {
    margin: .5rem 0;
  }

  .audio-card a {
    color: inherit;
    text-decoration: none;
    display: inline-block;
    padding: .25rem .75rem;
    border-radius: 4px;
    border: solid 1px;
    transition: all .08s ease-out;
  }
  
  .audio-card a:focus,
  .audio-card a:hover {
    background: var(--fg);
    color: var(--bg);
  }

  .video iframe {
    aspect-ratio: 16 / 9;
    width: 100%;
  }
</style>
