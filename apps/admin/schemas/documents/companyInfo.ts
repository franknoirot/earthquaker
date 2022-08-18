export const companyInfo = {
  name: 'companyInfo',
  title: 'Company Info',
  type: 'document',
  fields: [
    {
      name: 'brandName',
      title: 'Brand Name',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'legalName',
      title: 'LegalName',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'logomark',
      title: 'Logomark',
      type: 'image',
      validation: Rule => Rule.required(),
    },
    {
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'array',
      of: [{ type: 'url' }],
      validation: Rule => Rule.required(),
    },
    {
      name: 'copyrightYear',
      title: 'Copyright Year',
      description: 'Year the brand copyright was last updated (it should be this year!)',
      type: 'number',
      validation: Rule => Rule.required().min(new Date().getFullYear()),
    },
  ],
}
