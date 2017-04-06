export const def = {
  basePath: '/',
  paths: {
    '/customers': {
      get: {
        'x-operation-name': 'getCustomers',
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
                type: 'date',
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
                description: 'lastUpdated date of address of a customer',
              },
            },
          },
        },
      },
    },
  },
};
