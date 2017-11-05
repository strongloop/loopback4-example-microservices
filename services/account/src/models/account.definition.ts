export const accountDefinition = {
  name: 'Account',
  properties: {
    id: {
      type: 'string',
      required: true,
      id: true,
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
