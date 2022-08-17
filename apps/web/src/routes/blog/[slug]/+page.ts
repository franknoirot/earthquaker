import { error } from '@sveltejs/kit'
import { client } from '$lib/sanity'

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  const query = `*[_type == "blogPost"] {
    ...,
    heroImage {
      asset -> {  
        url
      }
    },
    author -> {
      ...,
      image {
        asset -> {
          url
        }
      }
    },
  }[0]`

  const blogPost = await client.fetch(query, { slug: params.slug })

  return blogPost 
}
