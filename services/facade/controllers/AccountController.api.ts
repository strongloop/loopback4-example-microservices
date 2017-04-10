export const def = {
  basePath: '/',
  paths: {
    '/account/summary': {
      get: {
        'x-operation-name': 'getSummary',
        parameters: [
          {
            name: 'accountNumber',
            in: 'query',
            description: 'The aggregreate account data from all microservices',
            required: true,
            type: 'string',
          }
        ],
        responses: {
          200: {
            schema: {
              summary: {
                type: 'string', // shouldn't this be a json?
                description: 'The JSON representation of the aggregate account data',
              }
            },
          },
        },
      },
    },
    '/account': {
      get: {
        'x-operation-name': 'getAccount',
        parameters: [
          {
            name: 'accountNumber',
            in: 'query',
            description: 'The account data for the given account number',
            required: true,
            type: 'string',
          }
        ],
        responses: {
          200: {
            schema: {
              summary: {
                type: 'string', // shouldn't this be a json?
                description: 'The JSON representation of the account data',
              }
            },
          },
        },
      }
    }
  },
};
