export const device = {
  name: 'device',
  title: 'Device',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'trademarkStatus',
      title: 'Trademark Status',
      type: 'string',
      options: {
        layout: 'dropdown',
        list: [
          { title: 'Trademark', value: '™' },
          { title: 'Registered', value: '®' },
        ],
      },
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        layout: 'dropdown',
        list: [
          'Boost, Preamp & EQ',
          'Compression',
          'Delay & Reverb',
          'Distortion & Overdrive',
          'Eurorack',
          'Fuzz',
          'Modulation & Filter',
          'Octave & Pitch',
          'Utility',
          'Legacy',
        ],
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'isNew',
      title: 'New Product',
      type: 'boolean',
      initialValue: true,
      validation: Rule => Rule.required(),
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      validation: Rule => Rule.required(),
    },
    {
      name: 'graphicImage',
      title: 'Graphic Image',
      type: 'image',
    },
    {
      name: 'colorForeground',
      title: 'Foreground Color',
      type: 'color',
      validation: Rule => Rule.required(),
    },
    {
      name: 'colorBackground',
      title: 'Background Color',
      type: 'color',
      validation: Rule => Rule.required(),
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      initialValue: 199,
      validation: Rule => Rule.required(),
    },
    {
      name: 'intro',
      title: 'Introduction',
      type: 'array',
      of: [{
        type: 'block',
      }],
      validation: Rule => Rule.required(),
    },
    {
      name: 'videos',
      title: 'Videos',
      type: 'array',
      of: [{ type: 'url' }],
      validation: Rule => Rule.required(),
    },
    {
      name: 'controls',
      title: 'Controls',
      type: 'array',
      of: [{
        type: 'object',
        title: 'Control',
        fields: [
          {
            name: 'x',
            title: 'X Position',
            description: 'Left-to-right position on device photo as a percentage.',
            type: 'number',
            validation: Rule => Rule.required().max(100).min(0),
          },
          {
            name: 'y',
            title: 'Y Position',
            description: 'Top-to-bottom position on device photo as a percentage.',
            type: 'number',
            validation: Rule => Rule.required().max(100).min(0),
          },
          {
            name: 'description',
            title: 'Description',
            type: 'array',
            of: [{ type: 'block' }],
            validation: Rule => Rule.required(),
          },
        ],
      }],
      validation: Rule => Rule.required(),
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{ type: 'image' }],
      validation: Rule => Rule.required(),
    },
  ]
}
