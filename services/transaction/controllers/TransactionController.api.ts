export const def = {
  basePath: '/',
  paths: {
    '/transactions': {
      get: {
        'x-operation-name': 'getTransactions',
        parameters: [
          {
            name: 'filter',
            in: 'query',
            description:
              'The criteria used to narrow down the number of transactions returned.',
            required: false,
            type: 'string',
            format: 'JSON',
          },
        ],
        responses: {
          200: {
            schema: {
              type: 'array',
              items: '#/definitions/Transaction',
            },
          },
        },
      },
    },
  },
  definitions: {
    Transaction: require('../repositories/transaction/models/transaction/transaction-definition.json'),
  },
};
