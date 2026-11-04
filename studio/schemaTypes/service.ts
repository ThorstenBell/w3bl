import {defineField, defineType} from 'sanity'

export const service = defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({
      name: 'language',
      type: 'string',
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'index',
      type: 'number',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'tag',
      type: 'string',
    }),
    defineField({
      name: 'summary',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'body',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      title: 'Addresses',
      name: 'addresses',
      type: 'array',
      of: [
        {
          title: 'Address',
          name: 'address',
          type: 'object',
          fields: [
            {name: 'street', type: 'string', title: 'Street name'},
            {name: 'streetNo', type: 'string', title: 'Street number'},
            {name: 'city', type: 'string', title: 'City'},
          ],
        },
      ],
    }),
  ],
})
