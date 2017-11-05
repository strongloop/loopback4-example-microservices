import {DataSourceConstructor} from '@loopback/repository';

// mixin of data source into service is not yet available, swagger.json needs to
// be loaded synchronously (ie. can't instantiate in the class constructor)

const ds = new DataSourceConstructor('AccountService', {
  connector: 'swagger',
  spec: 'repositories/account/swagger.json'
});

export class AccountRepository {
  model;

  constructor() {
    this.model = ds.createModel('AccountService', {});
  }

  async find(accountNumber) {
    const response = await this.model.findById({'id': `${accountNumber}`});
    return response && response.obj || [];
  }

  async create(accountInstance): Promise<any> {
    return await this.model.create(accountInstance);
  }
}
