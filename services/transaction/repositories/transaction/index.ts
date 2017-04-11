import juggler = require('loopback-datasource-juggler');
const modelDefinition = require('./models/transaction.def.json');

export class TransactionRepository {
  service: any;

  constructor() {
    this.service = new TransactionService();
  }

  async find(id): Promise<any> {
    return await this.service.find({where: {accountNo: id}});
  }
}

// mixin of data source into service is not yet available
export class TransactionService {
  model: any;

  constructor() {
    const DataSource = juggler.DataSource;
    const ds = new DataSource('TransactionDB', {
      connector: 'memory',
      file: './repositories/transaction/models/transaction.data.json'
    });
    this.model = ds.define('Transaction', modelDefinition);
  }

  async find(filter): Promise<any> {
    return await this.model.find(filter);
  }
}
