import {api} from '@loopback/rest';
import {def} from './AccountController.api';
import {AccountRepository} from '../repositories/account';
import {repository} from '@loopback/repository';

@api(def)
export class AccountController {

  constructor(@repository('AccountRepository') private repository: AccountRepository) {

  }

  async getAccount(id) {
    return await this.repository.findById(id);
  }

  async getAccounts(filter) {
    return await this.repository.find(JSON.parse(filter));
  }

  async createAccount(accountInstance) {
    return await this.repository.create(accountInstance);
  }

  async updateAccount(where = '', data) {
    return await this.repository.updateAll(data, JSON.parse(where));
  }

  async deleteAccount(where = '{}') {
    return await this.repository.deleteAll(JSON.parse(where));
  }
}
