import {defineField, defineType} from 'sanity'
import {BlockContentIcon} from '@sanity/icons'

export const caseStudyBody = defineType({
  name: 'caseStudyBody',
  title: 'Case Study Body',
  type: 'object',
  icon: BlockContentIcon,
  fields: [
    defineField({
      name: 'sectionType',
      title: 'Section Type',
      type: 'string',
      options: {
        list: [
          {title: 'Problem', value: 'problem'},
          {title: 'Approach', value: 'approach'},
          {title: 'Solution', value: 'solution'},
        ],
        layout: 'radio',
      },
    }),
    defineField({name: 'heading', title: 'Heading', type: 'string'}),
    defineField({name: 'body', title: 'Body', type: 'array', of: [{type: 'block'}]}),
  ],
  preview: {
    select: {title: 'heading', subtitle: 'sectionType'},
    prepare({title, subtitle}) {
      return {title: title || 'Case Study Body', subtitle}
    },
  },
})
