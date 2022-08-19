<script lang="ts">
  import type { PageData } from './$types'

  export let data : PageData
  const regions = data.dealers.reduce((regionList, curr) => {
    const foundIndex = regionList.map(region => region.name).indexOf(curr.region)
    if (foundIndex < 0) {
      return [...regionList, { name: curr.region, count: 1 }]
    } 
    regionList[foundIndex].count++
    return regionList
  }, []).sort((a,b) => b.count - a.count)
</script>

<h1>Our Dealers</h1>
<section class="dealer-finder">
  <h2>Find a dealer near you</h2>
  <div class="finder">Coming soon...</div>
</section>
<section class="online-dealers">
  <h2>Online dealers</h2>
  {#each regions as region, j (region.name)}
    <h3>{region.name}</h3>
    <ul class="dealer-grid">
      {#each data.dealers.filter(d => d.region == region.name) as dealer, i (dealer.name)}
      <li class="dealer">
        <a href={dealer.website} target="_blank">
          {dealer.name}
        </a>
      </li>
      {/each}
    </ul>
  {/each}
</section>
<section class="dealer-cta">
  <img src='/dealer-cta.jpeg' alt="Old Town Music in Portland, OR" loading="lazy" />
  <div>
    <h2>Interested in becoming a dealer?</h2>
    <p>If you run a tone dispensary of your own and want to add EarthQuaker devices to your shelves, drop us a line.</p>
    <a href='/'>Start Here</a>
  </div>
</section>

<style>
  h2 {
    font-size: 2.5rem;
    max-width: 1440px;
    margin: 2rem auto 0;
  }

  h3 {
    margin: 3rem 0 0;
  }
  
  section {
    max-width: 1440px;
    margin: 4rem auto;
  }

  .finder {
    border-radius: 8px;
    border: dashed 3px #ddd;
    background: #eee;
    color: hsl(36deg, 5%, 30%);
    font-size: 3rem;
    display: grid;
    place-items: center;
    min-height: 400px;
  }

  .dealer-grid {
    display: grid;
    padding: 0;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
  }

  .dealer {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .dealer-cta a,
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


  .dealer-cta a:focus,
  .dealer-cta a:hover,
  .dealer a:focus,
  .dealer a:hover {
    background-color: gold;
  }

  .dealer-cta {
    max-width: 1024px;
    border-radius: 8px;
    background: inherit;
    box-shadow: 0 4px 6px hsla(0deg, 0%, 0%, .14), 0 12px 24px hsla(0deg, 0%, 0%, .13);
    padding: 2rem;
    display: grid;
    box-sizing: border-box;
    grid-template-columns: 400px auto;
    align-items: center;
    gap: 2rem;
  }

  .dealer-cta img {
    object-fit: cover;
    max-width: 100%;
  }

  .dealer-cta a {
    font-size: inherit;
    display: inline-block;
    border: solid 2px gold;
  }
</style>
