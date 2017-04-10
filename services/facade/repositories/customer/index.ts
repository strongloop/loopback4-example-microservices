import juggler = require('loopback-datasource-juggler');

export class CustomerRepository {
  service: CustomerService;

  constructor() {
    this.service = new CustomerService();
  }

  async find(customerNumber) {
    return await this.service.find({id: customerNumber});
  }
}

// mixin of data source into service is not yet available, swagger.json needs to
// be loaded synchronously
const DataSource = juggler.DataSource;
var SwaggerClient = require('swagger-client');
const ds = new DataSource('CustomerService', {
  connector: 'swagger',
  spec: 'repositories/customer/models/swagger.json'
});

export class CustomerService {
  model: any;
  constructor() {
    this.model = ds.createModel('CustomerService', {});
  }
  async find(filter): Promise<any> {
    let response = await this.model.findById(filter);
    return response && response.obj || [];
  }
}
