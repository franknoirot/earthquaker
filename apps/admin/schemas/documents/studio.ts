export const studio = {
  name: 'studio',
  title: 'Studio',
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
      name: 'location',
      title: 'Location',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'heroImage',
      title: 'Hero Image',
      description: "The larger main image that appears on the Artist's page.",
      type: 'image',
    },
    {
      name: 'intro',
      title: 'Introduction',
      type: 'array',
      of: [{
        type: 'block',
      }],
    },
    {
      name: 'interview',
      title: 'Interview',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {
            name: 'question',
            title: 'Question',
            type: 'string',
            validation: Rule => Rule.required(),
          },
          {
            name: 'answer',
            title: 'Answer',
            type: 'array',
            of: [{
              type: 'block',
            }],
            validation: Rule => Rule.required(),
          },
        ],
      }]
    },
    {
      name: 'secondaryImage',
      title: 'Secondary Image',
      description: "An optional image that can appear beneath the intro and interview",
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
      validation: Rule => Rule.required(),
    },
    {
      name: 'contact',
      title: 'Contact',
      type: 'array',
      of: [
        {type: 'string'},
      ],
      options: {
        layout: 'tags',
      },
    }
  ],
}
