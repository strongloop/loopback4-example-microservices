export const transactionDefinition = {
  swagger: '2.0',
  info: {
    title: 'transaction',
    version: '1.0.0',
  },
  host: '127.0.0.1:3003',
  basePath: '/',
  schemes: ['http'],
  paths: {
    '/transactions/': {
      get: {
        produces: ['*/*'],
        parameters: [
          {
            description:
              'Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})',
            format: 'JSON',
            in: 'query',
            name: 'filter',
            required: true,
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
        operationId: 'find',
        summary:
          'Find all instances of the model matched by filter from the data source.',
      },
    },
  },
};
