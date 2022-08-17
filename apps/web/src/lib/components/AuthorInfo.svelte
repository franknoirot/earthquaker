<script>
  export let name
  export let image
  export let bio
</script>

<section>
  <div class='wrapper'>
    <img src={image.asset.url} alt={name + ' portrait'} />
  </div>
  <div class='info'>
    <p>{bio}</p>
  </div>
</section>

<style>
  section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    padding-top: 2rem;
    border-top: 1px solid gold;
    margin-top: 2rem;
    place-items: center;
  }

  .wrapper {
    overflow: hidden;
    border-radius: 8px;
  }

  img {
    max-width: 100%;
    max-height: 100%;
  }

  p {
    font-style: italic;
  }
</style>
