<script lang="ts">
  import type { PageData } from './$types'

  export let data : PageData
  const regions = data.dealers.reduce((prev, curr) => (prev.indexOf(curr.region) < 0) ? [...prev, curr.region] : prev, [])
</script>

<h1>Our Dealers</h1>
{#each regions as region, j (region)}
  <h2>{region}</h2>
  <section class="dealer-grid">
    {#each data.dealers.filter(d => d.region == region) as dealer, i (dealer.name)}
    <li class="dealer">
      <a href={dealer.website} target="_blank">
        {dealer.name}
      </a>
    </li>
    {/each}
  </section>
{/each}

<style>
  h2 {
    font-size: 2.5rem;
    max-width: 1440px;
    margin: 2rem auto 0;
  }
  
  .dealer-grid {
    max-width: 1440px;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
  }

  .dealer {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .dealer a {
    color: inherit;
    text-decoration: none;
    font-size: 1.5rem;
    border-radius: 4px;
    background: transparent;
    padding: .25rem .5rem;
    display: block;
    transition: all .08s ease-out;
  }

  .dealer a:focus,
  .dealer a:hover {
    background-color: gold;
  }
</style>
