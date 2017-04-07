import juggler = require('loopback-datasource-juggler');
const DataSource = juggler.DataSource;
var SwaggerClient = require('swagger-client');
const ds = new DataSource('TransactionService', {
  connector: 'swagger',
  spec: 'repositories/transaction/models/swagger.json'
});

export class TransactionRepository {
  constructor() {}
  async find(): Promise<any> {
    let model = ds.createModel('TransactionService', {});
    return await model.find();
  }
}
