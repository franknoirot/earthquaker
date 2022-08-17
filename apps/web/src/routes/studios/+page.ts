import { error } from '@sveltejs/kit'
import { client } from '$lib/sanity'

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  const query = `*[_type == "studio"] {
    ...,
    slug {
      current,
    },
    heroImage {
      asset -> {
        url,
      }
    },
    secondaryImage {
      asset -> {
        url
      }
    },
    "colors": devices[0] -> { 
      colorBackground,
      colorForeground
    }
  }`

  const studios = await client.fetch(query)

  return { studios }
}
