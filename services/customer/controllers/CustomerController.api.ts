export const def = {
    basePath: '/',
    paths: {
        '/customers': {
            get: {
                'x-operation-name': 'getCustomers',
                parameters: [
                    {
                        name: 'filter',
                        in: 'query',
                        description: 'The criteria used to narrow down the number of customer returned.',
                        required: false,
                        type: 'object'
                    }
                ],
                responses: {
                    200: {
                        schema: {
                            type: 'array',
                            items: '#/definitions/Customer'
                        },
                    },
                },
            },
        }
    },
    definitions: {
        Customer: require('../repositories/customer/models/customer/customer-definition.json')
    },
};
