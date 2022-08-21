<script lang="ts">
  import type { PageData } from './$types'
  import BlogPostCard from '$lib/components/BlogPostCard.svelte'
 // import BlockContent from '$lib/components/BlockContent/index.svelte'

  export let data : PageData
</script>

<h1>Blog</h1>
<section class="blog-grid">
  {#each data.blogPosts as post, i (post.name)}
  <BlogPostCard {post} cardIndex={i} />
  {/each}
</section>

<style>
  .blog-grid {
    max-width: 1440px;
    margin: auto;
  }
</style>
