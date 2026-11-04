import {defineField, defineType} from 'sanity'
import {HelpCircleIcon} from '@sanity/icons'

export const problemStatement = defineType({
  name: 'problemStatement',
  title: 'Problem Statement',
  type: 'object',
  icon: HelpCircleIcon,
  fields: [
    defineField({name: 'heading', title: 'Heading', type: 'string'}),
    defineField({name: 'body', title: 'Body', type: 'array', of: [{type: 'block'}]}),
  ],
  preview: {
    select: {title: 'heading'},
    prepare({title}) {
      return {title: title || 'Problem Statement', subtitle: 'Problem Statement'}
    },
  },
})
