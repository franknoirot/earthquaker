
import { error } from '@sveltejs/kit'
import { client } from '$lib/sanity'

/** @type {import('./$types').PageLoad} */
export async function load() {
  const query = `*[_id == "companyInfo"] {
    ...,
    logomark {
      asset -> {
        url
      }
    }
  }[0]`

  const companyInfo = await client.fetch(query)

  return { companyInfo }
}
