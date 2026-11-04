import {defineField, defineType} from 'sanity'
import {ArrowRightIcon} from '@sanity/icons'

export const nextCaseNav = defineType({
  name: 'nextCaseNav',
  title: 'Next Case Nav',
  type: 'object',
  icon: ArrowRightIcon,
  fields: [
    defineField({
      name: 'nextCase',
      title: 'Next Case',
      type: 'object',
      fields: [
        defineField({name: 'title', title: 'Title', type: 'string'}),
        defineField({name: 'href', title: 'Link', type: 'string'}),
      ],
    }),
    defineField({name: 'backToCasesHref', title: 'Back to Cases Link', type: 'string'}),
  ],
  preview: {
    select: {title: 'nextCase.title'},
    prepare({title}) {
      return {title: title || 'Next Case Nav', subtitle: 'Next Case Nav'}
    },
  },
})
