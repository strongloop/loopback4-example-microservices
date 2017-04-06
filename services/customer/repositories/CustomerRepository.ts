const DataSource = require('../../../../loopback-datasource-juggler').DataSource;


let ds = new DataSource('CustomerDB', {
    "connector": "memory",
    "file": "./models/data.json"
});

var Customer = ds.define('Customer', require('../models/customer.json'));

export class CustomerRepository {
  async find(): Promise<any> {
    let customers = await Customer.find();
    return customers;
  }
}