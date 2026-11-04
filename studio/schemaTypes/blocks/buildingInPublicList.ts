import {defineField, defineType} from 'sanity'
import {WrenchIcon} from '@sanity/icons'

export const buildingInPublicList = defineType({
  name: 'buildingInPublicList',
  title: 'Building in Public List',
  type: 'object',
  icon: WrenchIcon,
  fields: [
    defineField({name: 'heading', title: 'Heading', type: 'string'}),
    defineField({
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'buildingInPublicItem',
          fields: [
            defineField({name: 'title', title: 'Title', type: 'string'}),
            defineField({
              name: 'status',
              title: 'Status',
              type: 'string',
              options: {
                list: [
                  {title: 'In Progress', value: 'inProgress'},
                  {title: 'Concept', value: 'concept'},
                ],
                layout: 'radio',
              },
            }),
            defineField({name: 'description', title: 'Description', type: 'text'}),
            defineField({name: 'href', title: 'Link', type: 'string'}),
          ],
          preview: {
            select: {title: 'title', subtitle: 'status'},
          },
        },
      ],
    }),
  ],
  preview: {
    select: {title: 'heading'},
    prepare({title}) {
      return {title: title || 'Building in Public List', subtitle: 'Building in Public List'}
    },
  },
})
