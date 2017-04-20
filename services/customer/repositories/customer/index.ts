import juggler = require('loopback-datasource-juggler');

export class CustomerRepository  {
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

  async find(id): Promise<any> {
    return await this.model.find({where: {id: id}});
  }
}