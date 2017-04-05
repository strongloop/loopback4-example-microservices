export const def = {
  basePath: '/',
  paths: {
    '/customers': {
      get: {
        'x-operation-name': 'query',
        responses: {
          200: {
            schema: {
              uptime: {
                type: 'string',
                description: 'The uptime of the server',
              },
            },
          },
        },
      },
    },
  },
};
