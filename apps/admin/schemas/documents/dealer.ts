export const dealer = {
  name: 'dealer',
  title: 'Dealer',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'website',
      title: 'Website',
      type: 'url',
      validation: Rule => Rule.required(),
    },
    {
      name: 'region',
      title: 'Region',
      type: 'string',
      initialValue: 'US',
      options: {
        list: [
          'United States',
          'Canada',
          'United Kingdom',
          'European Union',
        ],
      },
      validation: Rule => Rule.required(),
    },
  ],
}
