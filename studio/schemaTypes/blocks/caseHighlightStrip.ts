import {defineField, defineType} from 'sanity'
import {CaseIcon} from '@sanity/icons'

export const caseHighlightStrip = defineType({
  name: 'caseHighlightStrip',
  title: 'Case Highlight Strip',
  type: 'object',
  icon: CaseIcon,
  fields: [
    defineField({name: 'introText', title: 'Intro Text', type: 'string'}),
    defineField({
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'caseHighlightItem',
          fields: [
            defineField({name: 'title', title: 'Title', type: 'string'}),
            defineField({name: 'oneLiner', title: 'One-liner', type: 'string'}),
            defineField({name: 'href', title: 'Link', type: 'string'}),
          ],
          preview: {
            select: {title: 'title', subtitle: 'oneLiner'},
          },
        },
      ],
    }),
  ],
  preview: {
    select: {title: 'introText'},
    prepare({title}) {
      return {title: title || 'Case Highlight Strip', subtitle: 'Case Highlight Strip'}
    },
  },
})
