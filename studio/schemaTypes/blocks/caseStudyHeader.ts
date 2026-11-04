import {defineField, defineType} from 'sanity'
import {DocumentTextIcon} from '@sanity/icons'

export const caseStudyHeader = defineType({
  name: 'caseStudyHeader',
  title: 'Case Study Header',
  type: 'object',
  icon: DocumentTextIcon,
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({name: 'client', title: 'Client', type: 'string'}),
    defineField({name: 'role', title: 'Role', type: 'string'}),
    defineField({name: 'duration', title: 'Duration', type: 'string'}),
    defineField({
      name: 'stackTags',
      title: 'Stack Tags',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({name: 'summary', title: 'Summary', type: 'text'}),
  ],
  preview: {
    select: {title: 'title', subtitle: 'client'},
  },
})
