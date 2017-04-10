export const def = {
  basePath: '/',
  paths: {
    '/transactions': {
      get: {
        'x-operation-name': 'getTransactions',
       parameters:[  
               {  
                 name:'id',
                 in:'query',
                 description:'Model id',
                 required:true,
                 type:'string',
                 format:'JSON'
               },
               {  
                 name:'filter',
                 in:'query',
                 description:'Filter defining fields and include - must be a JSON-encoded string ({\'something\:\'value\'})',
                 required:false,
                 type:'string',
                 format:'JSON'
               }
            ],
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
