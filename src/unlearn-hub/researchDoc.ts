// Sanity schema for Unlearn Hub research docs
export default {
  name: 'researchDoc',
  title: 'Research Document',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Botanical', value: 'botanical' },
          { title: 'Medical', value: 'medical' },
          { title: 'Legal', value: 'legal' },
          { title: 'Cultural', value: 'cultural' },
        ],
      },
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
  ],
};
