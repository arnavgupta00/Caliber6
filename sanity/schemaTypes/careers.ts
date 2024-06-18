export default {
  title: 'Careers',
  name: 'career',
  type: 'document',
  fields: [
    {
      title: 'Career Name',
      name: 'careerName',
      type: 'string',
      description: 'The name of the career path',
    },
    {
      title: 'Short Description',
      name: 'shortDescription',
      type: 'text',
      description: 'A brief overview of the career path',
    },
    {
      title: 'Career Image',
      name: 'careerImage',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'An image representing the career path (500x500 px recommended)',
      fields: [
        {
          title: 'Alt Text',
          name: 'alt',
          type: 'string',
          description: 'Alternative text for the image',
        },
      ],
    }
  ],
};


