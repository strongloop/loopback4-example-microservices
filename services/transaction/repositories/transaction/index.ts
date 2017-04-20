import juggler = require('loopback-datasource-juggler');
const modelDefinition = require('./models/transaction.def.json');

export class TransactionRepository {
  model: any;

  constructor() {
    const DataSource = juggler.DataSource;
    const ds = new DataSource('TransactionDB', {
      connector: 'memory',
      file: './repositories/transaction/models/transaction.data.json'
    });
    this.model = ds.define('Transaction', modelDefinition);
  }

  async find(id): Promise<any> {
    return await this.model.find({where: {accountNo: id}});
  }
}