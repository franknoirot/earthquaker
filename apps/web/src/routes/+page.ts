import { error } from '@sveltejs/kit'
import { client } from '$lib/sanity'
import { artistFields } from './artists/+page'
import { audioSampleFields } from './devices/[slug]/+page'
import { deviceCardFields } from './devices/+page'
import { blogPostFields } from './blog/+page'

/** @type {import('./$types').PageLoad} */
export async function load() {
  const query = `*[_id == "home"] {
    contentGrid[] {
      ...,
      reference -> {
        _type == 'artist' => {
          ${artistFields}
        },
        _type == 'audioSample' => {
          ${audioSampleFields} 
        },
        _type == 'device' => {
          ${deviceCardFields} 
        },
        _type == 'blogPost' => {
          ${blogPostFields} 
        },
        _id,
        _type,
      }
    }
  }[0]`

  const page = await client.fetch(query)

  return { page }
}
