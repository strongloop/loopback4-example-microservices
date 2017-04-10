import juggler = require('loopback-datasource-juggler');
const modelDefinition = require('./models/transaction.def.json');

export class TransactionRepository {
  _TransactionModel: any;

  constructor() {
    const DataSource = juggler.DataSource;
    const ds = new DataSource('TransactionDB', {
      connector: 'memory',
      file: './repositories/transaction/models/transaction.data.json'
    });
    this._TransactionModel = ds.define('Transaction', modelDefinition);
  }

  async find(id): Promise<any> {
    return await this._TransactionModel.find({where: {accountNo: id}});
  }
}
