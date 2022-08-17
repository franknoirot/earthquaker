import * as objects from './objects'
import * as documents from './documents'

export const schemaTypes = [
  ...Object.values(objects),
  ...Object.values(documents),
]
