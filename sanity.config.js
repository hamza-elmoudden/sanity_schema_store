import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'store',

  projectId: 'rvhx6dqx',
  dataset: 'store',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
