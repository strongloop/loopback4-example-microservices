export const def = {
  basePath: '/',
  paths: {
    '/accountsummary': {
      get: {
        'x-operation-name': 'getSummary',
        responses: {
          200: {
            schema: {
              summary: {
                type: 'string',
                description: 'account summary',
              }
            },
          },
        },
      },
    },
  },
};
