<script lang="ts">
  export let device
  export let isNewToggled = false
</script>


<a href={'/devices/' + device.slug.current} class="device" style={`--bg: ${device.colorBackground.hex}; --fg: ${device.colorForeground.hex}`}>
  <img src={device.mainImage.asset.url} alt={device.title} />
  {#if !isNewToggled && device.isNew}
  <img src="/new-sticker.svg" alt="New device!" class="new-sticker" />
  {/if}
  <div class="overlay">
    <h2>{device.title}</h2>
    <p>{device.subtitle}</p>
    <p>${device.price}</p>
  </div>
</a>


<style>
  .device {
    color: var(--fg);
    text-decoration: none;
    background: var(--bg);
    display: grid;
    position: relative;
    place-items: center;
    box-sizing: border-box;
    padding: 1rem;
    border-radius: 8px;
    text-align: center;
    overflow: hidden;
  }  

  .device img {
    max-width: 150px;
    display: block;
  }

  .new-sticker {
    position: absolute;
    width: 64px;
    top: 15px;
    left: 15px;
    transform-origin: center;
    transform: rotate(-15deg);
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

  .device:focus .overlay,
  .device:hover .overlay {
    opacity: 1;
    transform: none;
  }

  .overlay h2 {
    font-size: 2rem;
  }
</style>
