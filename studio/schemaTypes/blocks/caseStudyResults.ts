import {defineField, defineType} from 'sanity'
import {BarChartIcon} from '@sanity/icons'

export const caseStudyResults = defineType({
  name: 'caseStudyResults',
  title: 'Case Study Results',
  type: 'object',
  icon: BarChartIcon,
  fields: [
    defineField({name: 'heading', title: 'Heading', type: 'string'}),
    defineField({
      name: 'metrics',
      title: 'Metrics',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'caseStudyMetric',
          fields: [
            defineField({name: 'label', title: 'Label', type: 'string'}),
            defineField({name: 'value', title: 'Value', type: 'string'}),
            defineField({name: 'description', title: 'Description', type: 'text'}),
          ],
          preview: {
            select: {title: 'value', subtitle: 'label'},
          },
        },
      ],
    }),
  ],
  preview: {
    select: {title: 'heading'},
    prepare({title}) {
      return {title: title || 'Case Study Results', subtitle: 'Case Study Results'}
    },
  },
})
