export const accountDefinition = {
  type: 'object',
  name: 'Customer',
  required: ['id', 'balance', 'branch', 'type', 'avgBalance', 'minimumBalance'],
  properties: {
    id: {
      id: true,
      type: 'string',
    },
    customerNumber: {
      type: 'string',
    },
    balance: {
      type: 'number',
    },
    branch: {
      type: 'string',
    },
    type: {
      type: 'string',
    },
    avgBalance: {
      type: 'number',
    },
    minimumBalance: {
      type: 'number',
    },
  },
};
