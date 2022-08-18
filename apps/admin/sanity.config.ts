import {createConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'
import {colorInput} from '@sanity/color-input'
import {structure} from './customizations/structure'

export default createConfig({
  name: 'default',
  title: 'earthquaker',

  projectId: '52sbo3c3',
  dataset: 'production',

  plugins: [
    deskTool({
      structure,
    }),
    colorInput(),
  ],

  schema: {
    types: schemaTypes,
  },
})
