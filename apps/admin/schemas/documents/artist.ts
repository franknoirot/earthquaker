export const artist = {
  name: 'artist',
  title: 'Artist',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
      },
      validation: Rule => Rule.required(),
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
      validation: Rule => Rule.required(),
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
      validation: Rule => Rule.required(),
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
      validation: Rule => Rule.required(),
    },
  ],
}
