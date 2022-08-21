
import { error } from '@sveltejs/kit'
import { client } from '$lib/sanity'

export const blogPostFields = `
  title,
  slug {
    current,
  },
  teaserCopy,
  heroImage {
    asset -> {  
      url
    }
  },`


/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  const query = `*[_type == "blogPost"] {
    ${blogPostFields}
  }`

  const blogPosts = await client.fetch(query)

  return { blogPosts } 
}
