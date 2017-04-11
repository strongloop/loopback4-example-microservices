const DataSource = require('loopback-datasource-juggler').DataSource;
const modelDefinition  = require('./models/accounts.def.json');

export class AccountRepository {
  service: any;

  constructor() {
    this.service = new AccountService();
  }

  async find(id): Promise<any> {
    return await this.service.find({where: {id: id}});
  }
}

// mixin of data source into service is not yet available
export class AccountService {
  model: any;

  constructor() {
    const ds = new DataSource('AccountsDB', {
      connector: 'memory',
      file: './repositories/accounts/models/accounts.data.json'
    });
    this.model = ds.define('Account', modelDefinition);
  }

  async find(filter): Promise<any> {
    return await this.model.find(filter);
  }
}
