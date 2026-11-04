import {defineField, defineType} from 'sanity'
import {SparklesIcon} from '@sanity/icons'

export const featureHighlight = defineType({
  name: 'featureHighlight',
  title: 'Feature Highlight',
  type: 'object',
  icon: SparklesIcon,
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
    defineField({name: 'href', title: 'Link', type: 'string'}),
    defineField({name: 'ctaLabel', title: 'CTA Label', type: 'string'}),
  ],
  preview: {
    select: {title: 'heading', media: 'image'},
    prepare({title, media}) {
      return {title: title || 'Feature Highlight', media}
    },
  },
})
