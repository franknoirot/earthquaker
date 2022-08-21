import { error } from '@sveltejs/kit'
import { client } from '$lib/sanity'

export const deviceCardFields = `
  title,
  subtitle,
  colorForeground,
  colorBackground,
  mainImage {
    asset -> {
      url
    }
  },
  price,
  slug,
`

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  const query = `*[_type == "device"] | order(title asc) {
    ${deviceCardFields}
    isNew,
    category,
  }`

  const devices = await client.fetch(query)

  return { devices }
}
