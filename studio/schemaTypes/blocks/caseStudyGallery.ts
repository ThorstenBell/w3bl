import {defineField, defineType} from 'sanity'
import {ImagesIcon} from '@sanity/icons'

export const caseStudyGallery = defineType({
  name: 'caseStudyGallery',
  title: 'Case Study Gallery',
  type: 'object',
  icon: ImagesIcon,
  fields: [
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'caseStudyGalleryImage',
          fields: [
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {hotspot: true},
              fields: [defineField({name: 'alt', title: 'Alt text', type: 'string'})],
            }),
            defineField({name: 'caption', title: 'Caption', type: 'string'}),
          ],
          preview: {
            select: {title: 'caption', media: 'image'},
          },
        },
      ],
    }),
  ],
  preview: {
    select: {images: 'images'},
    prepare({images}) {
      return {
        title: 'Case Study Gallery',
        subtitle: `${images?.length || 0} image(s)`,
        media: images?.[0]?.image,
      }
    },
  },
})
