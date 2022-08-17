
import { error } from '@sveltejs/kit'
import { client } from '$lib/sanity'

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  const query = `*[_type == "blogPost"] {
    title,
    slug {
      current,
    },
    "plaintextContent": pt::text(content),
    heroImage {
      asset -> {  
        url
      }
    },
  }`

  const blogPosts = await client.fetch(query)
  console.log({blogPosts})

  return blogPosts 
}
