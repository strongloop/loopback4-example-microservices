import juggler = require('loopback-datasource-juggler');
const DataSource = juggler.DataSource;
var SwaggerClient = require('swagger-client');
const ds = new DataSource('AccountService', {
  connector: 'swagger',
  spec: 'repositories/accounts/models/swagger.json'
});

export class AccountRepository {
  constructor() {}
  async find(): Promise<any> {
    let model = ds.createModel('AccountService', {});
    return await model.find();
  }
}
