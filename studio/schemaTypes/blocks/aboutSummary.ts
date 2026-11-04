import {defineField, defineType} from 'sanity'
import {UserIcon} from '@sanity/icons'

export const aboutSummary = defineType({
  name: 'aboutSummary',
  title: 'About Summary',
  type: 'object',
  icon: UserIcon,
  fields: [
    defineField({name: 'heading', title: 'Heading', type: 'string'}),
    defineField({name: 'body', title: 'Body', type: 'array', of: [{type: 'block'}]}),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {hotspot: true},
      fields: [defineField({name: 'alt', title: 'Alt text', type: 'string'})],
    }),
  ],
  preview: {
    select: {title: 'heading', media: 'image'},
    prepare({title, media}) {
      return {title: title || 'About Summary', media}
    },
  },
})
