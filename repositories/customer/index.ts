import juggler = require('loopback-datasource-juggler');
const DataSource = juggler.DataSource;
var SwaggerClient = require('swagger-client');
const ds = new DataSource('CustomerService', {
  connector: 'swagger',
  spec: 'repositories/customer/models/swagger.json'
});

export class CustomerRepository {
  constructor() {}
  async find(): Promise<any> {
    let model = ds.createModel('CustomerService', {});
    return await model.find();
  }
}
