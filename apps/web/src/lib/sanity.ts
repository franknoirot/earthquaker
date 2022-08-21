import sanityClient from '@sanity/client' 
import type { Image, Asset, Slug } from '@sanity/types'

export const client = sanityClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2022-08-15', // use current UTC date - see "specifying API version"!
  //  token: 'sanity-auth-token', // or leave blank for unauthenticated usage
  useCdn: false, // `false` if you want to ensure fresh data
})

export type SanityColor = {
  _type: 'color',
  hex: string,
  alpha: number,
  hsl: {
    _type: 'hslaColor',
    h: number,
    s: number,
    l: number,
    a: number,
  },
  hsv: {
    _type: 'hsvaColor',
    h: number,
    s: number,
    v: number,
    a: number
  },
  rgb: {
    _type: 'rgbaColor',
    r: number,
    g: number,
    b: number,
    a: number
  }
}

export interface ImageDereferenced extends Omit<Image, 'asset'> {
  asset: Asset
}


export type DeviceCard = {
  title: string,
  subtitle: string,
  isNew: boolean,
  colorBackground: SanityColor, 
  colorForeground: SanityColor,
  price: number,
  mainImage: ImageDereferenced,
  slug: Slug,
}
