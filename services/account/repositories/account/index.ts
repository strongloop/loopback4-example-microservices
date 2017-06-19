import {juggler, DataSourceConstructor} from
'../../node_modules/@loopback/repository/lib6/legacy-juggler-bridge';
import { Where } from '@loopback/repository';
import { Filter } from '@loopback/repository/';
const modelDefinition = require('./models/account/model-definition.json');

export class AccountRepository {
  model: juggler.ModelBase

  constructor() {
    const ds = new DataSourceConstructor({
      connector: 'mysql',
      host: 'localhost',
      port: 3306,
      database: 'test-db',
      password: 'dis-mysql',
      user: 'root',
    });
    ds.name = 'mysqlDs';
    this.model = ds.createModel('Account', modelDefinition.properties, {});
  }

  async find(filter): Promise<Account[]> {
    return await this.model.find(filter);
  }

  async create(accountInstance): Promise<Account> {
    return await this.model.create(accountInstance);
  }
  
  async update(where, data): Promise<Account[]> {
    return await this.model.updateAll(where, data, {});
  }
  
  async deleteAccount(where): Promise<any> {
    return await this.model.destroyAll(where);
  }
}
