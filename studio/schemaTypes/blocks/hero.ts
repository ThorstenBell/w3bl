import {defineField, defineType} from 'sanity'
import {PresentationIcon} from '@sanity/icons'

const ctaFields = [
  defineField({name: 'label', title: 'Label', type: 'string'}),
  defineField({name: 'href', title: 'Link', type: 'string'}),
]

export const hero = defineType({
  name: 'hero',
  title: 'Hero',
  type: 'object',
  icon: PresentationIcon,
  fields: [
    defineField({
      name: 'variant',
      title: 'Variant',
      type: 'string',
      options: {
        list: [
          {title: 'Home', value: 'home'},
          {title: 'Vertical', value: 'vertical'},
          {title: 'Index', value: 'index'},
          {title: 'Simple', value: 'simple'},
        ],
        layout: 'radio',
      },
    }),
    defineField({name: 'eyebrow', title: 'Eyebrow', type: 'string'}),
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({name: 'subheading', title: 'Subheading', type: 'text'}),
    defineField({
      name: 'primaryCta',
      title: 'Primary CTA',
      type: 'object',
      fields: ctaFields,
    }),
    defineField({
      name: 'secondaryCta',
      title: 'Secondary CTA',
      type: 'object',
      fields: ctaFields,
    }),
  ],
  preview: {
    select: {title: 'heading', subtitle: 'variant'},
    prepare({title, subtitle}) {
      return {title: title || 'Untitled', subtitle: subtitle ? `Hero — ${subtitle}` : 'Hero'}
    },
  },
})
