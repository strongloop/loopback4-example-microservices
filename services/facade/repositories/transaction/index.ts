import juggler = require('loopback-datasource-juggler');

export class TransactionRepository {
  service: TransactionService;

  constructor() {
    this.service = new TransactionService();
  }

  async find(accountNumber) {
    return await this.service.find({id: accountNumber});
  }
}

// mixin of data source into service is not yet available, swagger.json needs to
// be loaded synchronously
const DataSource = juggler.DataSource;
var SwaggerClient = require('swagger-client');
const ds = new DataSource('TransactionService', {
  connector: 'swagger',
  spec: 'repositories/transaction/swagger.json'
});

export class TransactionService {
  model: any;

  constructor() {
    this.model = ds.createModel('TransactionService', {});
  }

  async find(filter): Promise<any> {
    const response = await this.model.findById(filter);
    return response && response.obj || [];
  }
}
