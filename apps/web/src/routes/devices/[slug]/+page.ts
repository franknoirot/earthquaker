
import { error } from '@sveltejs/kit'
import { client } from '$lib/sanity'

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  const query = `*[_type == "device" && slug.current == $slug] {
    title,
    subtitle,
    colorForeground,
    colorBackground,
    mainImage {
      asset -> {
        url
      }
    },
    intro,
  } [0]`

  const device = await client.fetch(query, { slug: params.slug })

  if (device.title) {
    return device
  }

  throw error(404, 'Not found')
}
