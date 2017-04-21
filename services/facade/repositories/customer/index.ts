import juggler = require('loopback-datasource-juggler');

// mixin of data source into service is not yet available, swagger.json needs to
// be loaded synchronously (ie. can't instantiate in the class constructor)
const DataSource = juggler.DataSource;
var SwaggerClient = require('swagger-client');
const ds = new DataSource('CustomerService', {
  connector: 'swagger',
  spec: 'repositories/customer/swagger.json'
});

export class CustomerRepository {
  model: PersistedModel;

  constructor() {
    this.model = ds.createModel('CustomerService', {});
  }

  async find(customerNumber) {
    const response = await this.model.findById({ id: customerNumber });
    return response && response.obj || [];
  }
}

interface PersistedModel {
  findById: Function
}