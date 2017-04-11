import juggler = require('loopback-datasource-juggler');

export class CustomerRepository  {
  service: any;

  constructor() {
    this.service = new CustomerService();
  }

  async find(id): Promise<any> {
    return await this.service.find({where: {id: id}});
  }
}

// mixin of data source into service is not yet available
export class CustomerService  {
  model: any;

  constructor() {
    const DataSource = juggler.DataSource;
    const ds = new DataSource('CustomerDB', {
      connector: 'memory',
      file: './repositories/customer/models/customer.data.json'
    });
    const modelDefinition = require('./models/customer.def.json');
    this.model = ds.define('Customer', modelDefinition);
  }

  async find(filter): Promise<any> {
    return await this.model.find(filter);
  }
}
