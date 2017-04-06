export const def = {
  basePath: '/',
  paths: {
    '/transactions': {
      get: {
        'x-operation-name': 'getTransactions',
        responses: {
          200: {
            schema: {
              TransactionId: {
                type: 'string',
                description: 'Unique identifier for the transaction.',
              },
              dateTime: {
                type: 'date',
                description: 'The date and time of the transaction.'
              },
              accountNo: {
                type: 'string',
                description: 'The number of the associated account.'
              },
              amount: {
                type: 'number',
                description: 'The amount being consider in the transaction.'
              },
              transactionType: {
                type: 'string',
                description: 'The type of transaction. Can be credit or debit.'
              }
            },
          },
        },
      },
    },
  },
};
