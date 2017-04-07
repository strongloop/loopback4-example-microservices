export const def = {
  basePath: '/',
  paths: {
    '/accountsummary': {
      get: {
        'x-operation-name': 'getSummary',
        parameters: [{
          "name": "accountNumber",
          "in": "query",
          "description": "account number",
          "required": true,
          "type": "string"}],
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
