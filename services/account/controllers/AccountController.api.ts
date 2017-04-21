export const def = {
  basePath: '/',
  paths: {
    '/accounts': {
      get: {
        'x-operation-name': 'getAccount',
        parameters: [
          {
            name: 'id',
            in: 'query',
            description: 'The account id.',
            required: true,
            type: 'string',
            format: 'JSON'
          },
          {
            name: 'filter',
            in: 'query',
            description: 'The criteria used to narrow down the number of accounts returned.',
            required: false,
            type: 'string',
            format: 'JSON'
          }
        ],
        responses: {
          200: {
            schema: {
              accountNumber: {
                type: 'string',
                description: 'The account number.',
              },
              customerNumber: {
                type: 'string',
                description: 'The customer number.',
              },
              type: {
                type: 'string',
                description: 'The type of account ("savings" or "chequing").',
              },
              balance: {
                type: 'number',
                description: 'The balance of the account.',
              },
              minimumBalance: {
                type: 'number',
                description: 'The minimum balance for the account.',
              },
              avgBalance: {
                type: 'number',
                description: 'The average balance of the account.',
              },
            },
          },
        },
      },
    },
  },
};
