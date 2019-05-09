// Copyright IBM Corp. 2018. All Rights Reserved.
// Node module: loopback4-example-microservices
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

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
