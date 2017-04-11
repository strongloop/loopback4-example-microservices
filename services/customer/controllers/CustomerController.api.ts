export const def = {
  basePath: '/',
  paths: {
    '/customers': {
      get: {
        'x-operation-name': 'getCustomers',
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
              customerNumber: {
                type: 'string',
                description: 'The information of customers',
              },
              firstName: {
                type: 'string',
                description: 'Fist Name of a customer',
              },
              lastName: {
                type: 'string',
                description: 'Last Name of a customer',
              },
              ssn: {
                type: 'string',
                description: 'SSN of a customer',
              },
              customerSince: {
                type: 'datetime',
                description: 'Duration of a customer',
              },
              street: {
                type: 'string',
                description: 'street of a customer',
              },
              state: {
                type: 'string',
                description: 'state of a customer',
              },
              city: {
                type: 'string',
                description: 'city of a customer',
              },
              zip: {
                type: 'string',
                description: 'zip of a customer',
              },
              lastUpdated: {
                type: 'string',
                description: 'lastUpdated date of address of customer',
              },
            },
          },
        },
      },
    },
  },
};
