export const def = {
  basePath:'/',
  paths: {
  '/accounts': {
      get: {
      'x-operation-name':'getAccount',
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
              accountNumber: {
                type:'string',
                description:'account number',
              },
              customerNumber: {
                type:'string',
                description:'customer number',
              },
              type: {
                type:'string',
                description:'savings or checking',
              },
              balance: {
                type:'number',
                description:'balance amount',
              },
              minimumBalance: {
                type:'number',
                description:'account minimum balance',
              },
              avgBalance: {
                type:'number',
                description:'average balance',
              },
            },
          },
        },
      },
    },
  },
};
