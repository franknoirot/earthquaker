export const audioSample = {
  name: 'audioSample',
  title: 'Audio Sample',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'audio',
      title: 'Audio File',
      type: 'file',
      validation: Rule => Rule.required(),
    },
    {
      name: 'instrument',
      title: 'Instrument',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        layout: 'radio',
        list: [
          'Guitar',
          'Synth',
          'Bass'
        ],
      },
      initialValue: 'Guitar',
      validation: Rule => Rule.required(),
    },
    {
      name: 'devices',
      title: 'Devices',
      type: 'array',
      of: [{
        type: 'reference',
        to: [{ type: 'device' }],
      }],
      validation: Rule => Rule.required(),
    },
  ],
}
