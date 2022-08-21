<script lang="ts">
  export let post
  export let cardIndex = 0
</script>

<a href={'/blog/' + post.slug.current} class="post-card">
  <div class='wrapper'>
    <img src={post.heroImage.asset.url + `?w=960&fm=jpg`} loading={(cardIndex > 4) ? 'lazy' : 'eager'}/>
  </div>
  <div>
    <h2>{post.title}</h2>
    <p>{post.teaserCopy}</p>
    <p class="cta">Read More →</p>
  </div>
</a>

<style>
  .post-card {
    display: grid;
    gap: 2rem;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    color: inherit;
    box-sizing: border-box;
    border-radius: 8px;
    padding: 8px;
    text-decoration: none;
    background: transparent;
    transition: all .08s ease-out;
  }

  .post-card:focus,
  .post-card:hover {
    background: gold;
  }

  .wrapper {
    overflow: hidden;
    border-radius: 4px;
  }

  .post-card img {
    max-width: 720px;
    max-height: 720px;
    object-fit: cover;
  }

  .cta {
    font-weight: bold;
  }
  
</style>
