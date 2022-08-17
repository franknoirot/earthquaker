<script lang="ts">
  export let artist
  export let linkPrefix = '/artists/'
</script>


<a href={linkPrefix + artist.slug.current} class="artist" style={`--bg: ${artist.colors.colorBackground.hex}; --fg: ${artist.colors.colorForeground.hex}`}>
  <div class="wrapper">
    <img src={artist.thumbnailImage?.asset?.url || artist.heroImage.asset.url} alt={artist.name} />
  </div>
  <div class="overlay">
    <h2>{artist.name}</h2>
    {#if artist.bands}
    <p>{artist.bands}</p>
    {/if}
  </div>
</a>


<style>
  .artist {
    color: var(--fg);
    text-decoration: none;
    background: var(--bg);
    display: grid;
    position: relative;
    place-items: center;
    box-sizing: border-box;
    padding: 4px;
    border-radius: 8px;
    text-align: center;
    overflow: hidden;
  }  

  .wrapper {
    overflow: hidden;
    border-radius: 4px;
  }
  
  .artist img {
    max-width: 100%;
    object-fit: cover;
    display: block;
  }

  .overlay {
    position: absolute;
    inset: 4px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--fg);
    color: var(--bg);
    border-radius: 4px;
    transform-origin: 50% 50%;
    transform: scale(.95);
    transition: all .08s ease-out;
    opacity: 0;
  }

  .artist:focus .overlay,
  .artist:hover .overlay {
    opacity: 1;
    transform: none;
  }

  .overlay h2 {
    font-size: 2rem;
  }
</style>
