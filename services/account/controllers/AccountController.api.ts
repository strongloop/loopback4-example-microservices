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
    '/accounts/create': {
      post: {
        'x-operation-name': 'createAccount',
        parameters: [
          {
            name: 'id',
            in: 'body',
            description: 'The account id.',
            required: true,
            type: 'string'
          },
          {
            name: 'customerNumber',
            in: 'body',
            description: 'The customer number.',
            required: true,
            type: 'string'
          },
          {
            name: 'balance',
            in: 'body',
            description: 'The balance of the account.',
            required: true,
            type: 'string'
          },
          {
            name: 'branch',
            in: 'body',
            description: 'The bank branch.',
            required: true,
            type: 'string'
          },
          {
            name: 'type',
            in: 'body',
            description: 'The type of account ("savings" or "chequing").',
            required: true,
            type: 'string'
          },
          {
            name: 'avgBalance',
            in: 'body',
            description: 'The average balance of the account.',
            required: true,
            type: 'number'
          },
          {
            name: 'minimumBalance',
            in: 'body',
            description: 'The minimum balance for the account.',
            required: true,
            type: 'number'
          },
        ],
        responses: {
          200: {
            schema: {
              id: {
                type: 'string',
                description: 'The account id.',
              },
              customerNumber: {
                type: 'string',
                description: 'The customer number.',
              },
              balance: {
                type: 'number',
                description: 'The balance of the account.',
              },
              branch: {
                type: 'string',
                description: 'The bank branch.',
              },
              type: {
                type: 'string',
                description: 'The type of account ("savings" or "chequing").',
              },
              avgBalance: {
                type: 'number',
                description: 'The average balance of the account.',
              },
              minimumBalance: {
                type: 'number',
                description: 'The minimum balance for the account.',
              },
            },
          },
        },
      },
    }
  },
};
