import {customerDefinition} from '../models';

export const def = {
  openapi: '3.0.0',
  info: {
    version: '1.0.0',
    title: 'Customer Microservice',
    contact: {},
    description:
      'This is the api for the customer service created by loopback.',
  },
  paths: {
    '/customers': {
      get: {
        'x-operation-name': 'getCustomers',
        tags: ['customers'],
        summary: 'Finds all customers',
        description: 'Finds all customers',
        parameters: [
          {
            name: 'filter',
            in: 'query',
            description:
              'The criteria used to narrow down the number of customer returned.',
            required: false,
            schema: {
              type: 'object',
            },
          },
        ],
        responses: {
          '200': {
            description: 'all customers to be returned',
            content: {
              'application/json': {
                schema: {
                  type: 'array',
                  items: {
                    $ref: '#/components/schemas/Customer',
                  },
                },
              },
            },
          },
        },
      },
    },
    '/customers/{id}': {
      get: {
        'x-operation-name': 'getCustomer',
        tags: ['customer'],
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'The customer id.',
            required: true,
            schema: {
              type: 'string',
              format: 'JSON',
            },
          },
        ],
        responses: {
          '200': {
            description: 'a customer to be returned',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Customer',
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
      Customer: customerDefinition,
    },
  },
};
