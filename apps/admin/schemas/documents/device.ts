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
          { title: 'Copyright', value: '®' },
        ],
      },
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
      validation: Rule => Rule.required(),
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
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{ type: 'image' }],
      validation: Rule => Rule.required(),
    },
  ]
}
