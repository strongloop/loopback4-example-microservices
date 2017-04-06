export const def = {
  basePath: '/',
  paths: {
    '/customers': {
      get: {
        'x-operation-name': 'getCustomers',
        responses: {
          200: {
            schema: {
              uptime: {
                type: 'string',
                description: 'The information of customers',
              },
            },
          },
        },
      },
    },
  },
};
