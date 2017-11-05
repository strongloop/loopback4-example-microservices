import {accountDefinition} from '../models';

export const def = {
  openapi: '3.0.0',
  info: {
    version: '1.0.0',
    title: 'Accounts Microservice',
    description:
      'This is the api for the accounts service created by loopback.',
  },
  paths: {
    '/accounts': {
      get: {
        'x-operation-name': 'getAccounts',
        parameters: [
          {
            name: 'filter',
            in: 'query',
            description:
              'The criteria used to narrow down the number of accounts returned leave out for all results.',
            required: false,
            schema: {
              type: 'object',
            },
          },
        ],
        responses: {
          '200': {
            description: 'filtered accounts to be returned',
            content: {
              'application/json': {
                schema: {
                  type: 'array',
                  items: {
                    $ref: '#/components/schemas/Account',
                  },
                },
              },
            },
          },
        },
      },
    },
    '/accounts/{id}': {
      get: {
        'x-operation-name': 'getAccount',
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'Model id',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {
          '200': {
            description: 'OK',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Account',
                },
              },
            },
          },
        },
      },
    },
    '/accounts/create': {
      post: {
        'x-operation-name': 'createAccount',
        requestBody: {
          description: 'The account instance to create.',
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Account',
              },
            },
          },
        },
        responses: {
          '200': {
            description: 'OK',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Account',
                },
              },
            },
          },
        },
        parameters: [],
      },
    },
    '/accounts/update': {
      post: {
        'x-operation-name': 'updateAccount',
        parameters: [
          {
            name: 'where',
            in: 'query',
            description:
              'The criteria used to narrow down the number of accounts returned.',
            required: false,
            schema: {
              type: 'object',
            },
          },
        ],
        requestBody: {
          description:
            'Account update object containing the balance to update with.',
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Balance',
              },
            },
          },
        },
        responses: {
          '200': {
            description: 'update information',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    count: {
                      type: 'number',
                      description: 'number of records updated',
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    '/accounts/delete': {
      delete: {
        'x-operation-name': 'deleteAccount',
        parameters: [
          {
            name: 'where',
            in: 'query',
            description:
              'The criteria used to narrow down which account instances to delete.',
            required: true,
            schema: {
              type: 'object',
            },
          },
        ],
        responses: {
          '200': {
            description: 'delete information',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    count: {
                      type: 'number',
                      description: 'number of records deleted',
                    },
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
      Account: accountDefinition,
      Balance: {
        type: 'object',
        required: ['balance'],
        properties: {
          balance: {
            type: 'number',
          },
        },
      },
    },
  },
};
