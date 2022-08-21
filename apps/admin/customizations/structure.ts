// note: context includes `currentUser` and the client
export const structure = (S, context) =>
  S.list()
    .title('Content')
    .items([
      ...S.documentTypeListItems().filter(listItem => !['home', 'siteInfo'].includes(listItem.getId())),
      S.divider(),
      S.listItem()
        .id('homePage')
        .title('Home')
        .child(
          S.document()
            .schemaType('home')
            .documentId('home')
        ),
      S.divider(),
      S.listItem()
        .title('Company Settings')
        .child(
          S.document()
            .schemaType('companyInfo')
            .documentId('companyInfo')
        ),
    ])
