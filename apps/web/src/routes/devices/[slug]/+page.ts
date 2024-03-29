
import { error } from '@sveltejs/kit'
import { client } from '$lib/sanity'

export const prerender = false

export const audioSampleFields = `
  ...,
  audio {
    asset -> {
      mimeType,
      url,
    }
  },
  devices[] -> {
    title,
    slug,
    colorBackground,
    colorForeground,
  }`


/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  const query = `*[_type == "device" && slug.current == $slug] {
    ...,
    mainImage {
      asset -> {
        url
      }
    },
    "audioSamples": *[_type == "audioSample" && references(^._id)] {
      ${audioSampleFields}
    }
  } [0]`

  const device = await client.fetch(query, { slug: params.slug })

  if (device.title) {
    return device
  }

  throw error(404, 'Not found')
}
