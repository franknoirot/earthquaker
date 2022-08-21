<script lang="ts">
  import { page } from '$app/stores'
  export let audioSample
  export let filterDeviceTitle : string = ''
  export let colorBackground : string = 'inherit'
  export let colorForeground : string = 'inherit'
</script>


<div class="audio-card" style={`--bg: ${colorBackground}; --fg: ${colorForeground}`}>
  <p class="title">{audioSample.title}</p>
  <audio controls src={audioSample.audio?.asset?.url}></audio>
  <p>Played on a {audioSample.instrument}</p>
  <p>
    {#each audioSample.devices.filter(d => !filterDeviceTitle || d.title !== filterDeviceTitle) as device, j (device.title)}
    <a href={($page.url.pathname.includes(device.slug.current)) ? '' : ('/devices/' + device.slug.current)}>
      {(filterDeviceTitle) ? '+ ' : ''}{device.title}
    </a>
    {/each}
  </p>
</div>


<style>
  .audio-card {
    background: var(--bg);
    color: var(--fg);
    margin: 0 1rem;
    box-sizing: border-box;
    padding: .5rem 1rem;
    border-radius: 16px;
    box-shadow: 0 4px 6px hsla(0deg, 0%, 0%, .14), 0 12px 24px hsla(0deg, 0%, 0%, .13);
  }

  .audio-card .title {
    font-size: 1.25rem;
  }
  .audio-card p {
    margin: .5rem 0;
  }

  .audio-card a {
    color: inherit;
    text-decoration: none;
    display: inline-block;
    padding: .25rem .75rem;
    margin: .25rem;
    border-radius: 4px;
    border: solid 1px;
    transition: all .08s ease-out;
  }

  .audio-card a:first-child {
    margin-left: 0;
  }
  
  .audio-card a[href=''],
  .audio-card a:not([href='']):focus,
  .audio-card a:not([href='']):hover {
    background: var(--fg);
    color: var(--bg);
  }

</style>
