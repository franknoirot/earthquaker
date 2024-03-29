<script lang="ts">
  import type { PageData } from './$types'
  import BlockContent from '$lib/components/BlockContent/index.svelte'
  import DeviceGrid from '$lib/components/DeviceGrid.svelte';
  import DataDump from '$lib/components/DataDump.svelte';

  export let data : PageData
</script>

<svelte:head>
  <title>{data.name} Uses Earthquaker Gear</title>
</svelte:head>
<section class="intro">
  <div class="img-wrapper">
    <img src={data.heroImage.asset.url} alt={data.title}>
  </div>
  <div>
    <h1>{data.name}</h1>
    <h2 class="serif">Uses Earthquaker Gear</h2>
    <div class="block-content">
      {#each (data?.testimonials || []) as testimonial, i (i)}
      <blockquote>{testimonial.quote}</blockquote>
      {/each}
    </div>
  </div>
</section>
<h2>Currently Using</h2>
<DeviceGrid devices={data.devices} />
<DataDump label="Page Data" data={data} />

<style>
  .intro {
    display: grid;
    grid-template-columns: minmax(300px, 1fr) 1fr;
    gap: 2rem;
    margin: 3rem;
  }

  .intro .img-wrapper {
    place-self: center;
    max-width: 600px;
  }

  .img-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: scale-down;
  }

  h2 {
    text-align: center;
    margin: 4rem auto 2rem;
  }
  .intro h2 {
    margin: 2rem;
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

  .intro blockquote {
    line-height: 1.6;
    font-size: 1.5rem;
    text-align: center;
  }

  .intro blockquote::before,
  .intro blockquote::after {
    font-size: 2em;
    line-height: 1em;
  }
  
  .intro blockquote::before {
    content: '“';
  }

  .intro blockquote::after {
    content: '”';
  }
  
  h1 {
    margin: 0;
    text-align: center;
    font-family: var(--display);
    font-size: 8rem;
  }

  @media screen and (max-width: 480px) {
    .intro {
      display: block;
      margin: 2rem 0;
    }

    .intro div {
      padding: 0;
    }

    h1 {
      font-size: 3.5rem;
      margin-top: 2rem;
    }

    .intro h2 {
      margin-top: 1rem;
    }

    blockquote {
      font-size: 1.25rem;
      margin: 0 0.5rem;
    }
  }
</style>
