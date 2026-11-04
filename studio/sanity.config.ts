import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {documentInternationalization} from '@sanity/document-internationalization'


export default defineConfig({
  name: 'default',
  title: 'W3BL',

  projectId: 'pchqvghr',
  dataset: 'production',

  plugins: [
    structureTool(),
    visionTool(),
    documentInternationalization({
      // Required configuration
      supportedLanguages: [
        {id: 'en', title: 'English'},
        {id: 'nl', title: 'Dutch'},
      ],
      schemaTypes: ['post', 'project', 'service'],
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
