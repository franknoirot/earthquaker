<script lang="ts">
  import type { PageData } from './$types'
  import { page } from '$app/stores'
  import { goto } from '$app/navigation'
  import DeviceGrid from '$lib/components/DeviceGrid.svelte'

  export let data : PageData

  const categories = data.devices.reduce((allCategories, device) => (allCategories.indexOf(device.category) < 0) ? [...allCategories, device.category] : allCategories, [])
    .sort((a, b) => (a[0] < b[0] && a !== "Legacy") ? -1 : 1)
  let currentCategory = $page.url.searchParams.get('category') || ''
  let newOnly = $page.url.searchParams.has('new')  
  $: filteredDevices = data.devices.filter(device => (newOnly ? device.isNew : true)
    && (currentCategory ? device.category == currentCategory : device.category !== 'Legacy'))

  function setParams() {
    if (currentCategory) { $page.url.searchParams.set('category', currentCategory) }
    else { $page.url.searchParams.delete('category') }
    
    if (newOnly) { $page.url.searchParams.set('new', true) }
    else { $page.url.searchParams.delete('new') }

    goto(`?${$page.url.searchParams.toString()}`)
  }
</script>

<h1>Our Devices</h1>
<div class="controls">
  <label class="new-toggle">
    <input type="checkbox" bind:checked={newOnly} on:change={setParams} class="visually-hidden" />
    <img src="/new-sticker.svg" alt="" />
    Toggle New devices
  </label>
  <fieldset name="category"  >
    <label class="category-radio">
      <input type="radio" value="" bind:group={currentCategory} on:change={setParams} class="visually-hidden"/>
      <span>All</span>
    </label>
    {#each categories as category, i (category)}
    <label class="category-radio">
      <input type="radio" value={category} bind:group={currentCategory} on:change={setParams} class="visually-hidden"/>
      <span>{category}</span>
    </label>
    {/each}
  </fieldset>
</div>
<DeviceGrid devices={filteredDevices} isNewToggled={newOnly} />


<style>
  .controls {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    max-width: 1440px;
    margin: 1rem auto 2rem;
    user-select: none;
  }

  input {
    margin: 0;
    padding: 0;
  }

  .new-toggle {
    margin: 0;
    display: flex;
    align-items: center;
  }

  .new-toggle img {
    width: 32px;
    transform-origin: center;
    transform: rotate(-15deg);
    margin-right: .5rem;
    filter: brightness(1.3) saturate(0);
    transition: all .08s ease-out;
  }

  .new-toggle input:focus + img,
  .new-toggle input:hover + img {
    filter: brightness(1.15) saturate(.5);
  }

  .new-toggle input:checked + img {
    filter: none;
  }

  fieldset {
    border: none;
    display: flex; 
    flex-wrap: wrap;
  }

  .category-radio {
    margin-top: .75rem;
  }

  .category-radio span {
    border-radius: 4px;
    padding: .25rem .75rem;
    margin: .25rem;
    background: transparent;
    transition: all .08s ease-out;
  }

  .category-radio input:focus + span,
  .category-radio input:hover + span {
    outline: solid 2px goldenrod;
  }

  .category-radio input:checked + span {
    background: gold;
  }

  @media screen and (max-width: 480px) {
    .controls {
      gap: 0;
    }

    fieldset {
      justify-content: center;
    }

    .category-radio span {
      font-size: .9rem;
      margin: .125rem;
    }
  }
</style>
