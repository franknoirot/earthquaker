import { error } from '@sveltejs/kit'
import { client } from '$lib/sanity'
import type { PageLoad, RouteParams } from './$types'

interface IBlogPostRouteParams extends RouteParams {
  params: {
    slug: string | undefined,
  }
}
export async function load<PageLoad>(p: IBlogPostRouteParams) {
  const { params } = p
  const query = `*[_type == "blogPost"] {
    ...,
    heroImage {
      asset -> {  
        url
      }
    },
    author -> {
      ...,
      image {
        asset -> {
          url
        }
      }
    },
  }[0]`

  const blogPost = await client.fetch(query, { slug: params?.slug })

  return blogPost 
}
