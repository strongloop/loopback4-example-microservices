import juggler = require('loopback-datasource-juggler');
const modelDefinition = require('./models/customer/model-definition.json');

export class CustomerRepository  {
  model: Customer;

  constructor() {
    const DataSource = juggler.DataSource;
    const ds = new DataSource('local-fs', {
      connector: 'memory',
      file: './repositories/customer/datasources/local-fs/data.json'
    });
    this.model = ds.define('Customer', modelDefinition);
  }

  async find(id): Promise<any> {
    return await this.model.find({where: {id: id}});
  }
}

interface Customer {
  find: Function
}