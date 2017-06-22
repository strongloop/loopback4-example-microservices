import { Filter, Where } from '@loopback/repository';
import { api } from 'loopback-next/packages/core';
import { def } from './AccountController.api';
import { AccountRepository } from '../repositories/account';

@api(def)
export class AccountController {
  repository: AccountRepository;

  constructor() {
    this.repository = new AccountRepository();
  }

  async getAccount(filter) {
    try {
      filter = JSON.parse(filter);
    } catch(err) {
      return Promise.reject(err);
    }

    return await this.repository.find(filter);
  }

 async createAccount(accountInstance) {
    return await this.repository.create(accountInstance);
  }

  async updateAccount(where, data) {
    try {
      where = JSON.parse(where);
    } catch (err) {
      return Promise.reject(err);
    }
    
    return await this.repository.update(where, data);
  }

   async deleteAccount(where) {
    return await this.repository.deleteAccount(JSON.parse(where));
  }
}
