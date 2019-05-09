// Copyright IBM Corp. 2018. All Rights Reserved.
// Node module: loopback4-example-microservices
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

export const transactionDefinition = {
  name: 'Transaction',
  properties: {
    TransactionId: {
      type: 'string',
      required: true,
      id: true,
    },
    dateTime: {
      type: 'date',
      required: true,
    },
    accountNo: {
      type: 'string',
      required: true,
    },
    amount: {
      type: 'number',
      required: true,
    },
    transactionType: {
      type: 'string',
      required: true,
    },
  },
};
