import { error } from '@sveltejs/kit'
import { client } from '$lib/sanity'

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  const query = `*[_type == "dealer"] | order(name asc) {
    name,
    website,
    region,
  }`

  const dealers = await client.fetch(query)

  return { dealers }
}
