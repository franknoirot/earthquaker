<script lang="ts">
  import type { PageData } from './$types'
  import BlockContent from '$lib/components/BlockContent/index.svelte'
  import AuthorInfo from '$lib/components/AuthorInfo.svelte'

  export let data : PageData
</script>

<svelte:head>
  <title>{data.title} | EarthQuaker Blog</title>
</svelte:head>
<article>
  <img src={data.heroImage.asset.url} alt={data.title}>
  <h1>{data.title}</h1>
  <div class="metadata">
    <p>Published {data.publishDate}</p>
    <p>By {data.author.name}</p>
  </div>
  <BlockContent value={data.content} />
  <AuthorInfo {...data.author} />
</article>


<style>
  article {
    max-width: 80ch;
    margin-left: auto;
    margin-right: auto;
    font-size: 1.25rem;
    line-height: 1.6;
  }

  img {
    max-width: 100%;
    max-height: 720px;
  }
</style>
