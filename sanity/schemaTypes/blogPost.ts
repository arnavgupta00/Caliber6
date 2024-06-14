
export default {
    name: 'blogPost',
    type: 'document',
    title: 'Blog Post',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title'
      },
      {
        name: 'date',
        type: 'datetime',
        title: 'Date'
      },
      {
        name: 'category',
        type: 'string',
        title: 'Category'
      },
      {
        name: 'mainImage',
        type: 'image',
        title: 'Main Image',
        options: {
          hotspot: true
        },
        fields: [
          {
            name: 'alt',
            type: 'string',
            title: 'Alternative text'
          },
          {
            name: 'width',
            type: 'number',
            title: 'Width',
            hidden: true,
            initialValue: 872
          },
          {
            name: 'height',
            type: 'number',
            title: 'Height',
            hidden: true,
            initialValue: 500
          }
        ]
      },
      {
        name: 'secondaryImages',
        type: 'array',
        title: 'Secondary Images',
        of: [
          {
            type: 'image',
            title: 'Secondary Image',
            options: {
              hotspot: true
            },
            fields: [
              {
                name: 'alt',
                type: 'string',
                title: 'Alternative text'
              },
              {
                name: 'width',
                type: 'number',
                title: 'Width',
                hidden: true,
                initialValue: 424
              },
              {
                name: 'height',
                type: 'number',
                title: 'Height',
                hidden: true,
                initialValue: 424
              }
            ]
          }
        ]
      },
      {
        name: 'tags',
        type: 'array',
        title: 'Tags',
        of: [{ type: 'string' }]
      },
      {
        name: 'content',
        type: 'array',
        title: 'Content',
        of: [
          {
            type: 'object',
            title: 'Section',
            fields: [
              {
                name: 'heading',
                type: 'string',
                title: 'Heading'
              },
              {
                name: 'paragraphs',
                type: 'array',
                title: 'Paragraphs',
                of: [{ type: 'text' }]
              }
            ]
          }
        ]
      }
    ]
  };
  