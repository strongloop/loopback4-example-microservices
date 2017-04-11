import juggler = require('loopback-datasource-juggler');

export class AccountRepository {
  service: AccountService;

  constructor() {
    this.service = new AccountService();
  }

  async find(accountNumber) {
    return await this.service.find({id: accountNumber}); 
  }
}

// mixin of data source into service is not yet available, swagger.json needs to
// be loaded synchronously
const DataSource = juggler.DataSource;
const ds = new DataSource('AccountService', {
  connector: 'swagger',
  spec: 'repositories/accounts/swagger.json'
});
class AccountService {
  model: any;
  
  constructor() {
    this.model = ds.createModel('AccountService', {});
  }

  async find(filter) {
    const response = await this.model.findById(filter);
    const accounts = response && response.obj || [];
    return accounts.length ? accounts[0] : {};
  }
}
