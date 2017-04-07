import juggler = require('loopback-datasource-juggler');
const DataSource = juggler.DataSource;
var SwaggerClient = require('swagger-client');
const ds = new DataSource('CustomerService', {
  connector: 'swagger',
  spec: 'repositories/customer/models/swagger.json'
});

export class CustomerRepository {
  constructor() {}
  async find(accountNumber): Promise<any> {
    let model = ds.createModel('CustomerService', {});
    let customer = await model.findById({id: accountNumber});
    return customer && customer.obj || [];
  }
}
