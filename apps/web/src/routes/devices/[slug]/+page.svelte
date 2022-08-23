<script lang="ts">
  import type { PageData } from './$types'
  import IntersectionObserver from 'svelte-intersection-observer'
  import BlockContent from '$lib/components/BlockContent/index.svelte'
  import AudioSampleCard from '$lib/components/AudioSampleCard.svelte'

  export let data : PageData
  let element
  let intersecting
</script>

<svelte:options/>
<IntersectionObserver {element} bind:this={intersecting} threshold={1}
  on:observe={(e) => intersecting = e.detail.isIntersecting}
>
<section class="intro" >
  <div class="img-wrapper">
    <img src={data.mainImage.asset.url + `?fm=webp`} alt={data.title}>
    {#each data.controls || [] as control, i (control._key)}
    <div class={`control-marker desktop-only ${intersecting ? 'in-view' : ''}`} style={`--x: ${control.x}%; --y: ${control.y}%;`}>
      <span class="visually-hidden">Control </span>{i + 1}
    </div>
    {/each}
  </div>
  <div class="right-column">
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
    {#if data.videos?.length}
    <section class="video">
      <h2>Videos</h2>
      <div class="video-grid">
        {#each data.videos as videoUrl, i (videoUrl)}
        <iframe width="560"  src={`https://www.youtube-nocookie.com/embed/${(new URL(videoUrl)).searchParams.get('v')}?controls=0`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        {/each}
      </div>
    </section>
    {/if}
    {#if data.controls?.length}
    <section class="controls" bind:this={element}>
      <div class="img-wrapper mobile-only">
        <img src={data.mainImage.asset.url + `?fm=webp`} alt={data.title}>
        {#each data.controls || [] as control, i (control._key)}
        <div class="control-marker" style={`--x: ${control.x}%; --y: ${control.y}%;`}>
          <span class="visually-hidden">Control </span>{i + 1}
        </div>
        {/each}
      </div>
      <h2>Controls</h2>
      <ol class="block-content">
        {#each data.controls as control, i (control._key)}
        <li>
          <BlockContent value={control.description} />
        </li>
        {/each}
      </ol>
    </section>
    {/if}
  </div>
</section>
</IntersectionObserver>


<style>
  .mobile-only {
    display: none;
  }

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

  .img-wrapper {
    top: 96px;
    position: sticky;
    justify-self: center;
    max-width: 400px;
    height: fit-content;
  }

  .img-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: scale-down;
  }

  .right-column {
    box-sizing: border-box;
    padding: 0 1rem;
  }

  .control-marker {
    opacity: 0;
    position: absolute;
    top: var(--y);
    left: var(--x);
    width: 2.5rem;
    height: 2.5rem;
    user-select: none;
    font-size: 1.25rem;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100px;
    background: white;
    color: black;
    font-weight: bold;
    border: 3px solid var(--fg, gold);
    transform: translateY(.5rem);
  }

  .mobile-only .control-marker,
  .control-marker.in-view {
    transition: all .1s ease-out;
    opacity: 1;
    transform: none;
  }

  h2 {
    margin: 0;
    text-align: center;
  }

  .intro div {
    box-sizing: border-box;
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

  .controls li::marker {
    font-size: 1.75rem;
    padding: 0;
    text-align: center;
    display: inline-block;
    border-radius: 200px;
    border: solid 2px var(--fg, white);
    background: var(--bg, black);
    color: var(--fg, white);
  }

  @media screen and (max-width: 480px) {
    section {
      margin: 3rem 0;
      padding: 0 .5rem;
    }
    h1 {
      font-size: 3rem;
    }

    h2 {
      font-size: 1.75rem;
      margin: 1rem auto;
    }

    .right-column {
      padding: 0;
    }

    .intro {
      grid-template-columns: 1fr;
      margin-top: 2rem;
    }

    .intro .block-content {
      margin: 1.75rem auto;
      font-size: 1rem;
    }

    .desktop-only {
      display: none;
    }

    .mobile-only {
      display: block;
    }

    .img-wrapper {
      position: relative;
      top: 0;
      width: 100%;
      height: 60vh;
    }

    .audio-grid {
      grid-template-columns: 1fr;
    }

    .video-grid {
      grid-template-columns: 1fr 1fr;
    }
  }
</style>
