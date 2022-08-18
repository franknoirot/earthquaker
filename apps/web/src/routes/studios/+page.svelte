<script lang="ts">
  import type { PageData } from './$types'
 // import BlockContent from '$lib/components/BlockContent/index.svelte'
  import ArtistCard from '$lib/components/ArtistCard.svelte'
  import HighlightedHeading from '$lib/components/HighlightedHeading.svelte';

  export let data : PageData
</script>

<h1>Studios that dig us</h1>
<section class="studio-grid">
  {#each data.studios as studio, i (studio.name)}
  <ArtistCard artist={studio} linkPrefix="/studios/" />
  {/each}
</section>

<style>
  .studio-grid {
    max-width: 1440px;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
  }

</style>
