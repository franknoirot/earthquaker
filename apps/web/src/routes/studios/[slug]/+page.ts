import { error } from '@sveltejs/kit'
import { client } from '$lib/sanity'

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  const query = `*[_type == "studio" && slug.current == $slug] {
    ...,
    heroImage {
      asset -> {  
        url
      }
    },
    secondaryImage {
      asset -> {  
        url
      }
    },
    devices[] -> {
      title,
      slug {
        current
      },
      subtitle,
      price,
      colorBackground,
      colorForeground,
      mainImage {
        asset -> {
          url
        }
      }
    },
  }[0]`

  const studio = await client.fetch(query, { slug: params.slug })

  return studio 
}
