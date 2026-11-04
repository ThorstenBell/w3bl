import {defineField, defineType} from 'sanity'
import {ThLargeIcon} from '@sanity/icons'

export const teaserGrid = defineType({
  name: 'teaserGrid',
  title: 'Teaser Grid',
  type: 'object',
  icon: ThLargeIcon,
  fields: [
    defineField({
      name: 'variant',
      title: 'Variant',
      type: 'string',
      options: {
        list: [
          {title: 'Verticals', value: 'verticals'},
          {title: 'Cases', value: 'cases'},
        ],
        layout: 'radio',
      },
    }),
    defineField({name: 'heading', title: 'Heading', type: 'string'}),
    defineField({
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'teaserGridItem',
          fields: [
            defineField({name: 'title', title: 'Title', type: 'string'}),
            defineField({name: 'description', title: 'Description', type: 'text'}),
            defineField({name: 'href', title: 'Link', type: 'string'}),
            defineField({name: 'tag', title: 'Tag', type: 'string'}),
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {hotspot: true},
              fields: [defineField({name: 'alt', title: 'Alt text', type: 'string'})],
            }),
          ],
          preview: {
            select: {title: 'title', subtitle: 'tag', media: 'image'},
          },
        },
      ],
    }),
  ],
  preview: {
    select: {title: 'heading', subtitle: 'variant'},
    prepare({title, subtitle}) {
      return {title: title || 'Teaser Grid', subtitle}
    },
  },
})
