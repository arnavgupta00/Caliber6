export default {
  title: 'Job',
  name: 'job',
  type: 'document',
  fields: [
    {
      title: 'Job Title',
      name: 'jobTitle',
      type: 'string',
      description: 'The title of the job position',
    },
    {
      title: 'Description',
      name: 'description',
      type: 'text',
      description: 'A detailed description of the job responsibilities and requirements',
    },
    {
      title: 'Place of Work',
      name: 'placeOfWork',
      type: 'string',
      description: 'The location where the job is based (city, state, country)',
    },
    {
      title: 'Remote/Office',
      name: 'remoteOffice',
      type: 'string',
      options: {
        list: [
          { title: 'Remote', value: 'Remote' },
          { title: 'Office', value: 'Office' },
        ],
      },
      description: 'Whether the job is remote or office-based',
    },
    {
      title: 'Career',
      name: 'jobCareer',
      type: 'reference',
      to: [{ type: 'career' }], // Reference to the "career" document type
      description: 'The career path this job is associated with',
    },
  ],
};
