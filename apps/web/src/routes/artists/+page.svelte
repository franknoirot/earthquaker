<script lang="ts">
  import type { PageData } from './$types'
 // import BlockContent from '$lib/components/BlockContent/index.svelte'
  import ArtistCard from '$lib/components/ArtistCard.svelte'

  export let data : PageData
</script>

<h1>Artists that dig us</h1>
<section class="artist-grid">
  {#each data.artists.filter(a => a.generatePage).sort((a, b) => (a.name < b.name) ? -1 : 1) as artist, i (artist.name)}
  <ArtistCard artist={artist} cardIndex={i} />
  {/each}
</section>
<section class="name-grid">
  {#each data.artists.filter(a => !a.generatePage).sort((a, b) => (a.name < b.name) ? -1 : 1) as artist, i (artist.name)}
  {#if artist.website}
  <a href={artist.website} target="_blank" class="name-wrapper">
    <p class="name">{artist.name}</p>
    {#if artist.bands}
    <p>({artist.bands.join(' / ')})</p>
    {/if}
  </a>
  {:else}
  <div class='name-wrapper'>
    <p class="name">{artist.name}</p>
    {#if artist.bands}
    <p>({artist.bands.join(' / ')})</p>
    {/if}
  </div>
  {/if}
  {/each}
</section>

<style>
  .artist-grid {
    max-width: 1440px;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(calc(.2 * 1440px), 1fr));
    grid-auto-rows: 240px;
    grid-auto-flow: dense;
    gap: 2rem;
  }

  .name-grid {
    max-width: 1080px;
    margin: 3rem auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }

  .name-wrapper {
    text-align: center;
    display: block;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  .name-wrapper p {
    margin: .5rem 0;
  }

  .name {
    font-weight: bold;
  }


  a .name {
    color: goldenrod
  }

  a:focus .name,
  a:hover .name {
    color: darkgoldenrod;
  }

  @media screen and (max-width: 480px) {
    .artist-grid {
      gap: 1rem;

    }

    section {
      box-sizing: border-box;
      padding: 0 .5rem;
    }

    .artist-grid {
      grid-template-columns: 1fr 1fr;
    }

    .name-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
</style>
