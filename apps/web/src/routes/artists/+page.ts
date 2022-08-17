
import { error } from '@sveltejs/kit'
import { client } from '$lib/sanity'

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  const query = `*[_type == "artist"] {
    name,
    bands,
    slug {
      current
    },
    heroImage {
      asset -> {  
        url
      }
    },
    thumbnailImage {
      asset -> {
        url
      }
    },
    isFeatured,
    "colors": devices[0] -> { 
      colorBackground,
      colorForeground
    }
  }`

  const artists = await client.fetch(query)

  return { artists }
}
