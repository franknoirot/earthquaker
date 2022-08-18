import { WebPreview, JsonView } from './previews'

// note: context includes `currentUser` and the client
export const structure = (S, context) =>
  S.list()
    .title('Content')
    .items([
      ...S.documentTypeListItems(),
      S.divider(),
      S.listItem()
        .title('Company Settings')
        .child(
          S.document()
            .schemaType('companyInfo')
            .documentId('companyInfo')
        ),
    ])
