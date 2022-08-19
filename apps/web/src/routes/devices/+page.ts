import { error } from '@sveltejs/kit'
import { client } from '$lib/sanity'

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  const query = `*[_type == "device"] | order(title asc) {
    title,
    subtitle,
    colorForeground,
    colorBackground,
    mainImage {
      asset -> {
        url
      }
    },
    isNew,
    category,
    price,
    slug,
  }`

  const devices = await client.fetch(query)

  return { devices }
}
