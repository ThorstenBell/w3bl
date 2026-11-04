import {defineField, defineType} from 'sanity'
import {StackIcon} from '@sanity/icons'

export const proofStrip = defineType({
  name: 'proofStrip',
  title: 'Proof Strip',
  type: 'object',
  icon: StackIcon,
  fields: [
    defineField({
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'proofStripItem',
          fields: [
            defineField({name: 'label', title: 'Label', type: 'string'}),
            defineField({
              name: 'icon',
              title: 'Icon',
              type: 'image',
              options: {hotspot: true},
              fields: [defineField({name: 'alt', title: 'Alt text', type: 'string'})],
            }),
            defineField({
              name: 'type',
              title: 'Type',
              type: 'string',
              options: {
                list: [
                  {title: 'Stack', value: 'stack'},
                  {title: 'Credential', value: 'credential'},
                ],
                layout: 'radio',
              },
            }),
          ],
          preview: {
            select: {title: 'label', subtitle: 'type', media: 'icon'},
          },
        },
      ],
    }),
  ],
  preview: {
    select: {items: 'items'},
    prepare({items}) {
      return {title: 'Proof Strip', subtitle: `${items?.length || 0} item(s)`}
    },
  },
})
