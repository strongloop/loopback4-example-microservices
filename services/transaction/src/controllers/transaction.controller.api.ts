// Copyright IBM Corp. 2018. All Rights Reserved.
// Node module: loopback4-example-microservices
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import {transactionDefinition} from '../models';

export const def = {
  openapi: '3.0.0',
  info: {
    version: '1.0.0',
    title: 'Transaction Microservice',
    description:
      'This is the api for the transaction service created by loopback.',
  },
  paths: {
    '/transactions': {
      get: {
        'x-operation-name': 'getTransactions',
        parameters: [
          {
            name: 'filter',
            in: 'query',
            description:
              'The criteria used to narrow down the number of transactions returned.',
            required: false,
            schema: {
              type: 'string',
              format: 'JSON',
            },
          },
        ],
        responses: {
          '200': {
            description: 'OK',
            content: {
              '*/*': {
                schema: {
                  type: 'array',
                  items: {
                    $ref: '#/components/schemas/Transaction',
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  components: {
    schemas: {
      Transaction: transactionDefinition,
    },
  },
};
