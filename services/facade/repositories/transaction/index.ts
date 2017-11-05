import {juggler, DataSourceConstructor} from '@loopback/repository';

// mixin of data source into service is not yet available, swagger.json needs to
// be loaded synchronously (ie. can't instantiate in the class constructor)

let SwaggerClient = require('swagger-client');
const ds = new DataSourceConstructor('TransactionService', {
  connector: 'swagger',
  spec: 'repositories/transaction/swagger.json',
});

export class TransactionRepository {
  model;

  constructor() {
    this.model = ds.createModel('TransactionService', {});
  }

  async find(accountNumber) {
    const response = await this.model.find({
      filter: JSON.stringify(
        {
          where: {
            accountNo: accountNumber
          }
        }
      )
    });
    return response && response.obj || [];
  }
}
