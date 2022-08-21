
export const home = {
  name: 'home',
  title: 'Home',
  type: 'document',
  fields: [
    {
      name: 'contentGrid',
      title: 'Content Grid',
      type: 'array',
      of: [
        {
          name: 'gridBlock',
          title: 'Grid Block',
          type: 'object',
          fields: [
            {
              name: 'columns',
              title: 'Columns To Span',
              type: 'number',
              initialValue: 1,
              validation: Rule => Rule.required(),
            },
            {
              name: 'rows',
              title: 'Rows to Span',
              type: 'number',
              initialValue: 1,
              validation: Rule => Rule.required(),
            },
            {
              name: 'tilt',
              title: 'Tilt Angle',
              type: 'number',
              initialValue: 0,
              validation: Rule => Rule.required(),
            },
            {
              name: 'reference',
              title: 'Reference',
              type: 'reference',
              to: [
                { type: 'artist' },
                { type: 'audioSample' },
                { type: 'blogPost' },
                { type: 'dealer' },
                { type: 'device' },
                { type: 'studio' },
              ],
            },
            {
              name: 'sticker',
              title: 'Sticker',
              type: 'string',
              options: {
                layout: 'dropdown',
                list: [
                  'new',
                  'classic',
                  'fresh',
                  'loud',
                ],
              }
            }
          ],
        }
      ],
      validation: Rule => Rule.required(),
    },
  ],
}
