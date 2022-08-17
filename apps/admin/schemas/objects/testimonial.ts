export const testimonial = {
  name: 'testimonial',
  title: 'Testimonial',
  type: 'object',
  fields: [
    {
      name: 'quote',
      title: 'Quote',
      type: 'text',
      validation: Rule => Rule.required(),
    },
    {
      name: 'speaker',
      title: 'Speaker',
      type: 'string',
    }
  ]
}
