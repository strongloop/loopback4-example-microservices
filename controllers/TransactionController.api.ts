export const def = {
    basePath: '/',
    paths: {
        '/vitals': {
            get: {
                'x-operation-name': 'getUptime',
                responses: {
                    200: {
                        schema: {
                            uptime: {
                                type: 'number',
                                description: 'The uptime of the server',
                            },
                        },
                    },
                },
            },
        },
        '/transactions': {
            get: {
                'x-operation-name': 'getTransactions',
                responses: {
                    200: {
                        schema: {
                            uptime: {
                                type: 'number',
                                description: 'The uptime of the server',
                            },
                        },
                    },
                },
            },
        },
    },
};
