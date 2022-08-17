<script lang="ts">
  import type { PageData } from './$types'
 // import BlockContent from '$lib/components/BlockContent/index.svelte'
  import ArtistCard from '$lib/components/ArtistCard.svelte'

  export let data : PageData
</script>

<h1>Artists that dig us</h1>
<section class="artist-grid">
  {#each data.artists as artist, i (artist.name)}
  <ArtistCard artist={artist} />
  {/each}
</section>

<style>
  .artist-grid {
    max-width: 1440px;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
  }

</style>
