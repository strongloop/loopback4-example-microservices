import juggler = require('loopback-datasource-juggler');

export class TransactionRepository {
  _TransactionModel: any;

  constructor() {
    const DataSource = juggler.DataSource;
    const ds = new DataSource('TransactionDB', {
      connector: 'memory',
      file: './repositories/transaction/models/transaction.data.json'
    });
    const modelDefinition = require('./models/transaction.def.json');
    this._TransactionModel = ds.define('Transaction', modelDefinition);
  }

  async find(): Promise<any> {
    return await this._TransactionModel.find();
  }
}