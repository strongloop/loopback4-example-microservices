import juggler = require('loopback-datasource-juggler');
// change to import ... later
const modelDefinition = require('./models/customer.def.json');


export class CustomerRepository {
_CustomerModel: any;
constructor() {
    const DataSource = juggler.DataSource;
    const ds = new DataSource('CustomerDB', {
      connector: 'memory',
      // change to ./models/transaction.data.json
      file: './repositories/customer/models/customer.data.json'
    });
    this._CustomerModel = ds.define('Customer', modelDefinition);
  }
  async find(): Promise<any> {
    return await this._CustomerModel.find();
  }
}