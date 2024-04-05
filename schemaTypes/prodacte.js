import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'prodacte',
  title: 'Prodacte',
  type: 'document',
  
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),

    defineField({
      name:"price",
      title: 'Price',
      type:'number'
    }),

    defineField({
      name: "image_one",
      title: 'Image_One', 
      type: 'image',
      options: {
        hotspot: true
      },
    }),

    defineField({
      name: "image_tow",
      title: 'Image_tow', 
      type: 'image',
      options: {
        hotspot: true
      },
    }),

    defineField({
      name: "image_three",
      title: 'Image_three', 
      type: 'image',
      options: {
        hotspot: true
      },
    })

  ],
})
