
export default {
    name: 'clientReviews',
    type: 'document',
    title: 'Review',
    fields: [
      {
        name: 'reviewThumb',
        type: 'image',
        title: 'Review Thumbnail',
        options: {
          hotspot: true, // Enables image cropping
        },
      },
      {
        name: 'reviewText',
        type: 'text',
        title: 'review Text',
      },
      {
        name: 'reviewersName',
        type: 'string',
        title: "Reviewers Name",
      },
      {
        name: 'reviewersDesignation',
        type: 'string',
        title: "Reviewers Designation",
      },
      {
        name: 'ratings',
        type: 'string',
        title: 'Ratings',
      },
    ],
  };
  