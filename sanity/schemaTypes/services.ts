export default {
  title: 'Service',
  name: 'service',
  type: 'document',
  fields: [
    {
      title: 'Service Name',
      name: 'serviceName',
      type: 'string',
      description: 'The name of the service',
    },
    {
      title: 'Short Description',
      name: 'shortDescription',
      type: 'text',
      description: 'A brief description of the service',
    },
    {
      title: 'Service Image',
      name: 'serviceImage',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'An image representing the service (500x500 px recommended)',
      fields: [
        {
          title: 'Alt Text',
          name: 'alt',
          type: 'string',
          description: 'Alternative text for the image',
        },
      ],
    },
    {
      title: 'Three Step Working Process',
      name: 'threeStepProcess',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              title: 'Step Title',
              name: 'stepTitle',
              type: 'string',
              description: 'Title of the step',
            },
            {
              title: 'Step Description',
              name: 'stepDescription',
              type: 'text',
              description: 'Description of the step',
            },
          ],
        },
      ],
      description: 'The process of how the service works, broken down into three steps',
    },
    {
      title: 'Frequently Asked Questions',
      name: 'faqs',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              title: 'Question',
              name: 'question',
              type: 'string',
              description: 'A frequently asked question about the service',
            },
            {
              title: 'Answer',
              name: 'answer',
              type: 'text',
              description: 'The answer to the question',
            },
          ],
        },
      ],
      description: 'Common questions and answers related to the service',
    },
    {
      title: 'Fact Detail',
      name: 'factDetail',
      type: 'array',
      of: [
      {type: 'object',
      fields: [
        {
          title: 'Title',
          name: 'title',
          type: 'string',
          description: 'Title for the fact detail section',
        },
        {
          title: 'Fact Number',
          name: 'factNumber',
          type: 'string',
          description: 'The fact number, e.g., "3x" or "40%"',
        },
      ],
    }],
      description: 'Detailed fact information about the service',
    },
  ],
};
