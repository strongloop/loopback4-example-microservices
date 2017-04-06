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
                type: 'datetime',
                description: 'Duration of a customer',
              },
            },
          },
        },
      },
    },
  },
};
