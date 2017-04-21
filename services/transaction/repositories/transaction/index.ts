import juggler = require('loopback-datasource-juggler');
const modelDefinition = require('./models/transaction/model-definition.json');

export class TransactionRepository {
  model: PersistedModel;

  constructor() {
    const DataSource = juggler.DataSource;
    const ds = new DataSource('local-fs', {
      connector: 'memory',
      file: './repositories/transaction/datasources/local-fs/data.json'
    });
    this.model = ds.define('Transaction', modelDefinition);
  }

  async find(id): Promise<any> {
    return await this.model.find({ where: { accountNo: id } });
  }
}

interface PersistedModel {
  find: Function
}