import {defineArrayMember, defineField, defineType} from 'sanity'
import {DocumentIcon} from '@sanity/icons'
import {blockTypes} from './blocks'

export const page = defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  icon: DocumentIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'blocks',
      title: 'Page Blocks',
      type: 'array',
      of: blockTypes.map((blockType) => defineArrayMember({type: blockType.name})),
    }),
  ],
  preview: {
    select: {title: 'title', subtitle: 'slug.current'},
  },
})
