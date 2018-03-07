import {api} from '@loopback/rest';
import {def} from './account.controller.api';
import {AccountRepository} from '../repositories';
import {repository} from '@loopback/repository';

@api(def)
export class AccountController {
  constructor(
    @repository('AccountRepository') private repo: AccountRepository,
  ) {}

  async getAccount(id: string) {
    return await this.repo.findById(id);
  }

  async getAccounts(filter: string) {
    return await this.repo.find(JSON.parse(filter));
  }

  async createAccount(accountInstance: {
    customerNumber: string;
    balance: number;
    branch: string;
    type: string;
  }) {
    return await this.repo.create(accountInstance);
  }

  async updateAccount(where = '', data: {balance: number}) {
    return await this.repo.updateAll(data, JSON.parse(where));
  }

  async deleteAccount(where: string) {
    return await this.repo.deleteAll(JSON.parse(where));
  }
}
