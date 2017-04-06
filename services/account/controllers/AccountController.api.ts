export const def = {
  basePath: '/',
  paths: {
    '/accounts': {
      get: {
        'x-operation-name': 'getAccount',
        responses: {
          200: {
            schema: {
              accountNumber: {
                type: 'string',
                description: 'account number',
              },
              customerNumber: {
                type: 'string',
                description: 'customer number',
              },
              type: {
                type: 'string',
                description: 'savings or checking',
              },
              balance: {
                type: 'number',
                description: 'balance amount',
              },
              minimumBalance: {
                type: 'number',
                description: 'account minimum balance',
              },
              avgBalance: {
                type: 'number',
                description: 'average balance',
              },
            },
          },
        },
      },
    },
  },
};
