import {defineField, defineType} from 'sanity'

export const artistType = defineType({
  name: 'artist',
  title: 'Artist',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'Age',
      type: 'number',
    }),
    defineField({
      name: 'Photo',
      type: 'image',
    }),
  ],
})