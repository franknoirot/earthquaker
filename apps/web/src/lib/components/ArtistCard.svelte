<script lang="ts">
  export let artist
  export let linkPrefix = '/artists/'
  export let maxImgWidth : number = 600
  export let cardIndex : number = 0

  const image = artist.thumbnailImage?.asset || artist.heroImage.asset
  const orientation = image.metadata?.dimensions?.height > image.metadata?.dimensions?.width ? 'vertical' : 'horizontal'
</script>


<a href={linkPrefix + artist.slug.current} class={"artist " + orientation} style={`--bg: ${artist.colors.colorBackground.hex}; --fg: ${artist.colors.colorForeground.hex}`}>
  <div class="wrapper">
    <img src={image.url + `?w=${maxImgWidth}&fm=jpg`} alt={artist.name} loading={(cardIndex > 7) ? 'lazy' : 'eager'}/>
  </div>
  <div class="overlay">
    <h2>{artist.name}</h2>
    {#if artist.bands}
    <p>{artist.bands.join(' / ')}</p>
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
    box-sizing: border-box;
    padding: 4px;
    border-radius: 8px;
    text-align: center;
    overflow: hidden;
  }  

  .artist.vertical {
    grid-row: span 2;
  }

  .wrapper {
    overflow: hidden;
    position: relative;
    border-radius: 4px;
    max-height: 100%;
  }
  
  .artist img {
    width: 100%;
    height: 100%;
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
    background-color: transparent;
    color: white;
    border-radius: 4px;
    transform-origin: 50% 50%;
    transform: scale(.95);
    transition: all .08s ease-out;
  }
  
  .overlay *:not(h2) {
    opacity: 0;
    transition: opacity .08 ease-out;
  }

  .artist:focus .overlay,
  .artist:hover .overlay {
    background-color: var(--bg);
    transform: none;
    color: var(--fg);
  }

  .overlay h2 {
    font-size: 2rem;
  }

  .artist:focus .overlay *:not(h2),
  .artist:hover .overlay *:not(h2) {
    opacity: 1;
  }

  @media screen and (max-width: 480px) {
    .artist.vertical {
      grid-row: span 1;
    }
  }
</style>
