import {defineField, defineType} from 'sanity'
import {LaunchIcon} from '@sanity/icons'

export const ctaBanner = defineType({
  name: 'ctaBanner',
  title: 'CTA Banner',
  type: 'object',
  icon: LaunchIcon,
  fields: [
    defineField({
      name: 'variant',
      title: 'Variant',
      type: 'string',
      options: {
        list: [
          {title: 'General', value: 'general'},
          {title: 'Partnership', value: 'partnership'},
          {title: 'Early Access', value: 'earlyAccess'},
          {title: 'Quote', value: 'quote'},
        ],
        layout: 'radio',
      },
    }),
    defineField({name: 'heading', title: 'Heading', type: 'string'}),
    defineField({name: 'body', title: 'Body', type: 'text'}),
    defineField({name: 'ctaLabel', title: 'CTA Label', type: 'string'}),
    defineField({name: 'ctaHref', title: 'CTA Link', type: 'string'}),
  ],
  preview: {
    select: {title: 'heading', subtitle: 'variant'},
    prepare({title, subtitle}) {
      return {title: title || 'CTA Banner', subtitle: subtitle ? `CTA — ${subtitle}` : 'CTA Banner'}
    },
  },
})
