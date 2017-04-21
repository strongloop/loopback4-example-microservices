import juggler = require('loopback-datasource-juggler');

// mixin of data source into service is not yet available, swagger.json needs to
// be loaded synchronously (ie. can't instantiate in the class constructor)
const DataSource = juggler.DataSource;
const ds = new DataSource('AccountService', {
  connector: 'swagger',
  spec: 'repositories/accounts/swagger.json'
});

export class AccountRepository {
  model: Account;

  constructor() {
    this.model = ds.createModel('AccountService', {});
  }

  async find(accountNumber) {
    const response = await this.model.findById({id: accountNumber});
    const accounts = response && response.obj || [];
    return accounts.length ? accounts[0] : {};
  }
}

interface Account {
  findById: Function
}