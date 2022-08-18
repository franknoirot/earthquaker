export const studio = {
  name: 'studio',
  title: 'Studio',
  type: 'document',
  validation: Rule => [
    Rule.custom(document => (document.generatePage && !document.slug)
      ? 'Slug required if you want to generate a page' : true),
    Rule.custom(document => (document.generatePage && !document.heroImage)
      ? 'Hero Image required if you want to generate a page' : true),
    Rule.custom(document => (document.generatePage && !(document.devices && document.devices.length))
      ? 'Device list required if you want to generate a page' : true),
    // Rule.custom(document => (document.generatePage && !(document.testimonials && document.testimonials.length))
    //  ? 'At least one Testimonial required if you want to generate a page' : true),
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
      title: 'Generate Studio Page?',
      description: 'Is there enought content for this studio to get their own page?',
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
      name: 'website',
      title: 'Website URL',
      type: 'url',
      validation: Rule => Rule.required(),
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
    },
    {
      name: 'heroImage',
      title: 'Hero Image',
      description: "The larger main image that appears on the Studio's page.",
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
    },
  ],
}
