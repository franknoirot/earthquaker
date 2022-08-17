<script lang="ts">
  import type { PageData } from './$types'
 // import BlockContent from '$lib/components/BlockContent/index.svelte'

  export let data : PageData
</script>

<h1>Blog</h1>
<section class="blog-grid">
  {#each data as post, i (post.name)}
  <a href={'/blog/' + post.slug.current} class="post-card">
    <div class='wrapper'>
      <img src={post.heroImage.asset.url} />
    </div>
    <div>
      <h2>{post.title}</h2>
      <p>{post.plaintextContent.slice(0, 124)}</p>
      <p class="cta">Read More →</p>
    </div>
  </a>
  {/each}
</section>

<style>
  .blog-grid {
    max-width: 1440px;
    margin: auto;
  }

  .post-card {
    display: grid;
    gap: 2rem;
    grid-template-columns: 1fr 1fr;
    margin: 4rem auto;
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
