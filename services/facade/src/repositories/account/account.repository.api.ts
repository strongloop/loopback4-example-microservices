export const accountDefinition = {
  swagger: '2.0',
  info: {
    title: 'account',
    version: '1.0.0',
  },
  host: '127.0.0.1:3001',
  basePath: '/',
  schemes: ['http'],
  paths: {
    '/accounts/create': {
      post: {
        consumes: ['application/json'],
        produces: ['*/*'],
        parameters: [
          {
            description: 'The account instance to create.',
            in: 'body',
            name: 'body',
            required: true,
            schema: {
              $ref: '#/components/schemas/Account',
            },
          },
        ],
        responses: {
          '200': {
            description: 'Request was successful',
            schema: {
              type: 'string',
            },
          },
        },
        deprecated: false,
        operationId: 'create',
        summary: 'Create an account instance.',
      },
    },
    '/accounts/{id}': {
      get: {
        produces: ['*/*'],
        parameters: [
          {
            description: 'Model id',
            format: 'JSON',
            in: 'path',
            name: 'id',
            required: true,
            type: 'string',
          },
          {
            description:
              'Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})',
            format: 'JSON',
            in: 'query',
            name: 'filter',
            required: false,
            type: 'string',
          },
        ],
        responses: {
          '200': {
            description: 'Request was successful',
            schema: {
              type: 'string',
            },
          },
        },
        deprecated: false,
        operationId: 'findById',
        summary:
          'Find all instances of the model matched by filter from the data source.',
      },
    },
  },
};
