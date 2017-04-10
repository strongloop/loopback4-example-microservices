import juggler = require('loopback-datasource-juggler');
const DataSource = juggler.DataSource;
var SwaggerClient = require('swagger-client');
const ds = new DataSource('AccountService', {
  connector: 'swagger',
  spec: 'repositories/accounts/models/swagger.json'
});

export class AccountRepository {
  constructor() {}
  async find(accountNumber): Promise<any> {
    let model = ds.createModel('AccountService', {});
    let account = await model.findById({id: accountNumber});
    return account && account.obj || [];
  }
}
