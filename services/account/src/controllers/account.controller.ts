import {api} from '@loopback/rest';
import {def} from './account.controller.api';
import {AccountRepository} from '../repositories';
import {repository} from '@loopback/repository';
import {Account} from '../models';
import {Filter, Where} from '@loopback/repository/src/query';

@api(def)
export class AccountController {
  constructor(
    @repository('AccountRepository')
    private accountRepository: AccountRepository,
  ) {}

  async getAccount(id: string): Promise<Account> {
    return await this.accountRepository.findById(id);
  }

  async getAccounts(filter?: Filter | string): Promise<Account[]> {
    if (typeof filter === 'string') {
      filter = JSON.parse(filter) as Filter;
    }
    return await this.accountRepository.find(filter);
  }

  async createAccount(accountInstance: {
    customerNumber: string;
    balance: number;
    branch: string;
    type: string;
  }): Promise<Account> {
    return await this.accountRepository.create(accountInstance);
  }

  async updateAccount(where: Where, data: {balance: number}) {
    if (typeof where === 'string') {
      where = JSON.parse(where) as Where;
    }
    if (typeof data === 'string') {
      data = JSON.parse(data);
    }

    return await this.accountRepository.updateAll(data, where);
  }

  async deleteAccount(where: Where) {
    if (typeof where === 'string') {
      where = JSON.parse(where) as Where;
    }
    return await this.accountRepository.deleteAll(where);
  }
}
