const juggler = require('loopback-datasource-juggler');
const modelDefinition = require('./models/account/model-definition.json');

export class AccountRepository {
  model: PersistedModel;

  constructor() {
    const DataSource = juggler.DataSource;
    // const ds = new DataSource('local-fs', {
    //   connector: 'memory',
    //   file: './repositories/account/datasources/local-fs/data.json'
    // });
    const ds = new DataSource('local-fs', {
      connector: 'mysql',
      host: 'localhost',
      port: 3306,
      database: 'testdb',
      password: 'pass',
      user: 'root',
    });
    this.model = ds.define('Account', modelDefinition.properties);
  }

  async find(id): Promise<any> {
    return await this.model.find({ where: { id: id } });
  }

  async create(id, customerNumber, balance, branch, type, avgBalance, minimumBalance): Promise<any> {
    let accountInstance = {
      id: id,
      customerNumber: customerNumber,
      balance: balance,
      branch: branch,
      type: type,
      avgBalance: avgBalance,
      minimumBalance: minimumBalance
    }
    return await this.model.create(accountInstance);
  }
}

interface PersistedModel {
  find: Function
  create: Function
}