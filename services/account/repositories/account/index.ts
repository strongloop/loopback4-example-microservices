const juggler = require('loopback-datasource-juggler');
const modelDefinition = require('./models/account/model-definition.json');

export class AccountRepository {
  model: PersistedModel;

  constructor() {
    const DataSource = juggler.DataSource;
    const ds = new DataSource('local-fs', {
      connector: 'memory',
      file: './repositories/account/datasources/local-fs/data.json'
    });
    this.model = ds.define('Account', modelDefinition);
  }

  async find(id): Promise<any> {
    return await this.model.find({ where: { id: id } });
  }
}

interface PersistedModel {
  find: Function
}