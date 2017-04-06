import juggler = require('loopback-datasource-juggler');
// change to import ... later
const modelDefinition = require('./models/transaction.def.json');

export class TransactionRepository {
  _TransactionModel: any;

  constructor() {
    const DataSource = juggler.DataSource;
    const ds = new DataSource('TransactionDB', {
      connector: 'memory',
      // change to ./models/transaction.data.json
      file: './repositories/transaction/models/transaction.data.json'
    });
    this._TransactionModel = ds.define('Transaction', modelDefinition);
  }

  async find(): Promise<any> {
    return await this._TransactionModel.find();
  }
}
