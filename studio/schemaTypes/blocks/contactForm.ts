import {defineField, defineType} from 'sanity'
import {EnvelopeIcon} from '@sanity/icons'

export const contactForm = defineType({
  name: 'contactForm',
  title: 'Contact Form',
  type: 'object',
  icon: EnvelopeIcon,
  fields: [
    defineField({name: 'heading', title: 'Heading', type: 'string'}),
    defineField({name: 'subheading', title: 'Subheading', type: 'text'}),
    defineField({
      name: 'segmentOptions',
      title: 'Segment Options',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({name: 'submitLabel', title: 'Submit Label', type: 'string'}),
  ],
  preview: {
    select: {title: 'heading'},
    prepare({title}) {
      return {title: title || 'Contact Form', subtitle: 'Contact Form'}
    },
  },
})
