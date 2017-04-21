import juggler = require('loopback-datasource-juggler');

// mixin of data source into service is not yet available, swagger.json needs to
// be loaded synchronously (ie. can't instantiate in the class constructor)
const DataSource = juggler.DataSource;
var SwaggerClient = require('swagger-client');
const ds = new DataSource('TransactionService', {
  connector: 'swagger',
  spec: 'repositories/transaction/swagger.json'
});

export class TransactionRepository {
  model: PersistedModel;

  constructor() {
    this.model = ds.createModel('TransactionService', {});
  }

  async find(accountNumber) {
    const response = await this.model.findById({ id: accountNumber });
    return response && response.obj || [];
  }
}

interface PersistedModel {
  findById: Function
}