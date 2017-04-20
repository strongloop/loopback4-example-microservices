const juggler = require('loopback-datasource-juggler');
const modelDefinition = require('./models/accounts.def.json');

export class AccountRepository {
  model: any;

  constructor() {
    const DataSource = juggler.DataSource;
    const ds = new DataSource('AccountsDB', {
      connector: 'memory',
      file: './repositories/accounts/models/accounts.data.json'
    });
    this.model = ds.define('Account', modelDefinition);
  }

  async find(id): Promise<any> {
    return await this.model.find({where: {id: id}});
  }
}