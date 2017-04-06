let DataSource = require('loopback-datasource-juggler').DataSource;
let modelDefinition  = require('./models/accounts.def.json');

export class AccountRepository {
  _AccountModel: any;

  constructor() {
    const ds = new DataSource('AccountsDB', {
      connector: 'memory',
      file: './repositories/accounts/models/accounts.data.json'
    });
    this._AccountModel = ds.define('Account', modelDefinition);
  }

  async find(): Promise<any> {
    return await this._AccountModel.find();
  }
}
