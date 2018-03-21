import {accountDefinition} from '../models';

export const def = {
  'openapi': '3.0.0',
  'basePath': '/',
  'paths': {
    '/accounts': {
      'get': {
        'x-operation-name': 'getAccounts',
        'parameters': [
          {
            'name': 'filter',
            'in': 'query',
            'description': 'The criteria used to narrow down the number of accounts returned leave out for all results.',
            'required': false,
            'schema': {
              'type': 'object'
            }
          }
        ],
        'responses': {
          '200': {
            'schema': {
              'type': 'array',
              'items': '#/components/schemas/Account'
            }
          }
        }
      }
    },
    '/accounts/{id}': {
      'get': {
        'x-operation-name': 'getAccount',
        'parameters': [
          {
            'name': 'id',
            'in': 'path',
            'description': 'Model id',
            'required': true,
            'type': 'string',
            'format': 'JSON'
          }
        ],
        'responses': {
          '200': {
            'schema': '#/components/schemas/Account'
          }
        }
      }
    },
    '/accounts/create': {
      'post': {
        'x-operation-name': 'createAccount',
        'requestBody': {
          'description': 'The account instance to create.',
          'name': 'accountInstance',
          'required': true,
          'content': {
            'application/json': {
              'schema': {
                'accountInstance': '#/components/schemas/Account'
              }
            }
          }
        },
        'responses': {
          '200': {
            'schema': {
              'accountInstance': '#/components/schemas/Account'
            }
          }
        },
        'parameters': []
      }
    },
    '/accounts/update': {
      'post': {
        'x-operation-name': 'updateAccount',
        'parameters': [
          {
            'name': 'where',
            'in': 'query',
            'description': 'The criteria used to narrow down the number of accounts returned.',
            'required': false,
            'schema': {
              'type': 'object'
            }
          }
        ],
        'requestBody': {
          'description': 'Account update object containing the balance to update with.',
          'required': true,
          'content': {
            'application/json': {
              'schema': {
                '$ref': '#/components/schemas/Balance'
              }
            }
          }
        },
        'responses': {
          '200': {
            'schema': {
              'description': 'update information',
              'properties': {
                'count': {
                  'type': 'number',
                  'description': 'number of records updated'
                }
              },
              'schema': {
                'type': 'object'
              }
            }
          }
        }
      }
    },
    '/accounts/delete': {
      'delete': {
        'x-operation-name': 'deleteAccount',
        'parameters': [
          {
            'name': 'where',
            'in': 'query',
            'description': 'The criteria used to narrow down which account instances to delete.',
            'required': true,
            'schema': {
              'type': 'object'
            }
          }
        ],
        'responses': {
          '200': {
            'schema': {
              'type': 'object',
              'description': 'delete information',
              'properties': {
                'count': {
                  'type': 'number',
                  'description': 'number of records deleted'
                }
              }
            }
          }
        }
      }
    }
  },
  'info': {
    'version': '1.0.0',
    'title': 'Accounts Microservice',
    'contact': {},
    'description': 'This is the api for the accounts service created by loopback.'
  },
  'components': {
    'links': {},
    'callbacks': {},
    'schemas': {
      'Account': accountDefinition,
      'Balance': {
        'properties': {
          'balance': {
            'type': 'number',
            'required': true
          }
        },
        'type': 'object'
      }
    }
  }
};
