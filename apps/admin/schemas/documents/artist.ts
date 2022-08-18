export const artist = {
  name: 'artist',
  title: 'Artist',
  type: 'document',
  validation: Rule => [
    Rule.custom(document => (document.generatePage && !document.slug)
      ? 'Slug required if you want to generate a page' : true),
    Rule.custom(document => (document.generatePage && !document.heroImage)
      ? 'Hero Image required if you want to generate a page' : true),
    Rule.custom(document => (document.generatePage && !(document.devices && document.devices.length))
      ? 'Device list required if you want to generate a page' : true),
    Rule.custom(document => (document.generatePage && !(document.testimonials && document.testimonials.length))
      ? 'At least one Testimonial required if you want to generate a page' : true),
  ],
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'generatePage',
      title: 'Generate Artist Page?',
      description: 'Is there enought content for this artist to get their own page?',
      type: 'boolean',
      initialValue: false,
      validation: Rule => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
      },
    },
    {
      name: 'bands',
      title: 'Bands',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    },
    {
      name: 'heroImage',
      title: 'Hero Image',
      description: "The larger main image that appears on the Artist's page.",
      type: 'image',
      fields: [
        {
          name: 'photographer',
          title: 'Photographer',
          type: 'string',
        }
      ],
    },
    {
      name: 'isFeatured',
      title: 'Is Featured',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'thumbnailImage',
      title: 'Thumbnail Image',
      description: "The smaller image that appears in the Artist's card on the Artists landing page.",
      type: 'image',
    },
    {
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [
        { type: 'testimonial' }, 
      ],
    },
    {
      name: 'devices',
      title: 'Currently Using',
      description: "List the devices this person has told us they use.",
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'device' }],
        }
      ],
      options: {
        sortable: true,
      },
    },
    {
      name: 'website',
      title: 'Website URL',
      type: 'url',
    },
  ],
}
