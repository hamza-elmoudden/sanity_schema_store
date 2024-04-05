import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'order',
    title: 'Order',
    type: 'document',
    fields: [
    

      defineField({
        name: 'first_name',
        title: 'First_Name',
        type: 'string',
      }),

      defineField({
        name: 'last_name',
        title: 'Last_Name',
        type: 'string',
      }),

      defineField({
        name: 'phone',
        title: 'Phone',
        type: 'string',
      }),

      defineField({
        name: 'email',
        title: 'Email',
        type: 'string',
      }),

      defineField({
        name: 'address',
        title: 'Address',
        type: 'string',
      }),      
      
      defineField({
        name: 'country',
        title: 'Country',
        type: 'string',
      }),
  
      defineField({
        name:"prodacte_order",
        title:"Prodacte_Order",
        type:"reference",
        to:[{type:"prodacte"}]
      })
    ],
  })