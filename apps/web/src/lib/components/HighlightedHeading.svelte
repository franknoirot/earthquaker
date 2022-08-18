<script lang="ts">
  export let highlight : string
</script>

<h1 style={`--highlight: '${highlight}';`}>
  <slot />
</h1>

<style>
  h1 {
    font-family: var(--sans-serif);
    font-size: 4rem;
    text-align: center;
    font-weight: 400;
    letter-spacing: .25em;
    margin-bottom: 4rem;
  }

  h1 :global(strong) {
    position: relative;
  }

  h1 :global(strong)::after {
    content: var(--highlight);
    position: absolute;
    font-family: var(--display);
    letter-spacing: initial;
    font-size: 8.5rem;
    color: hsla(0deg, 0%, 0%, 5%);
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
</style>
