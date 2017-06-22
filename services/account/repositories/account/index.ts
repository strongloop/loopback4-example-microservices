const juggler = require('loopback-datasource-juggler');
const modelDefinition = require('./models/account/model-definition.json');

export class AccountRepository {
  model;

  constructor(file?:string) {
    const DataSource = juggler.DataSource;
    const ds = new DataSource('local-fs', {
      connector: 'memory',
      file: file || './repositories/account/datasources/local-fs/data.json'
    });

    this.model = ds.createModel('Account', modelDefinition.properties, {});
  }

  async find(filter): Promise<Account[]> {
    return await this.model.find(filter);
  }

  async create(accountInstance): Promise<Account> {
    return await this.model.create(accountInstance);
  }
  
  async update(where, data): Promise<any> {
    return await this.model.updateAll(where, data, {});
  }
  
  async deleteAccount(where): Promise<any> {
    return await this.model.destroyAll(where);
  }
}
