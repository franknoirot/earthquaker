
import { error } from '@sveltejs/kit'
import { client } from '$lib/sanity'

export const artistFields = `
    name,
    bands,
    generatePage,
    website,
    slug {
      current
    },
    heroImage {
      asset -> {  
        url,
        metadata {
          dimensions
        }
      }
    },
    thumbnailImage {
      asset -> {
        url,
        metadata {
          dimensions
        }
      }
    },
    isFeatured,
    "colors": devices[0] -> { 
      colorBackground,
      colorForeground
    }
`

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  const query = `*[_type == "artist"] {
    ${artistFields}
  }`

  const artists = await client.fetch(query)

  return { artists }
}
