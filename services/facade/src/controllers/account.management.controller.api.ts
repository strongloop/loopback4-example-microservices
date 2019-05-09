// Copyright IBM Corp. 2018. All Rights Reserved.
// Node module: loopback4-example-microservices
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

export const accountManagementDefinition = {
  openapi: '3.0.0',
  servers: [
    {
      url: 'http://127.0.0.1:3101/',
    },
  ],
  info: {
    version: '1.0.0',
    title: 'acccount management api',
    description:
      'This is the top-level service that serves the account summary API, and is dependent on the three services Account, Customer, and Transaction.',
  },
  paths: {
    '/account/summary': {
      get: {
        'x-operation-name': 'getSummary',
        parameters: [
          {
            name: 'accountNumber',
            in: 'query',
            description:
              'The account number to use when retrieving data from the underlying microservices.',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {
          '200': {
            description: 'success response with the account',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/AccountSummary',
                },
              },
            },
          },
        },
      },
    },
    '/account/create': {
      post: {
        'x-operation-name': 'createAccount',
        responses: {
          '200': {
            description: 'ok',
            content: {
              '*/*': {
                schema: {
                  $ref: '#/components/schemas/AccountFull',
                },
              },
            },
          },
        },
        requestBody: {
          content: {
            'application/json': {
              schema: {
                type: 'object',
              },
            },
          },
          description: 'The account instance.',
          required: true,
        },
      },
    },
  },
  components: {
    schemas: {
      Account: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'The account id.',
          },
          customerNumber: {
            type: 'string',
            description: 'The customer number.',
          },
          balance: {
            type: 'number',
            description: 'The balance of the account.',
          },
          branch: {
            type: 'string',
            description: 'The bank branch.',
          },
          type: {
            type: 'string',
            description: 'The type of account ("savings" or "chequing").',
          },
          minimumBalance: {
            type: 'number',
            description: 'The minimum balance for the account.',
          },
          avgBalance: {
            type: 'number',
            description: 'The average balance of the account.',
          },
        },
      },
      Customer: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
          },
          firstName: {
            type: 'string',
          },
          lastName: {
            type: 'string',
          },
          ssn: {
            type: 'string',
          },
          customerSince: {
            type: 'string',
          },
          street: {
            type: 'string',
          },
          state: {
            type: 'string',
          },
          city: {
            type: 'string',
          },
          zip: {
            type: 'string',
          },
          lastUpdated: {
            type: 'string',
          },
        },
      },
      Transaction: {
        type: 'object',
        properties: {
          TransactionId: {
            type: 'string',
          },
          dateTime: {
            type: 'string',
          },
          accountNo: {
            type: 'string',
          },
          amount: {
            type: 'number',
          },
          transactionType: {
            type: 'string',
          },
        },
      },
      AccountSummary: {
        type: 'object',
        properties: {
          customer: {
            $ref: '#/components/schemas/Customer',
          },
          account: {
            $ref: '#/components/schemas/Account',
          },
          transaction: {
            type: 'array',
            items: {
              $ref: '#/components/schemas/Transaction',
            },
          },
        },
      },
    },
  },
};
