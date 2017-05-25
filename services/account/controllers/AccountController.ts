import { api } from 'loopback-next/packages/core';
import { def } from './AccountController.api';
import { AccountRepository } from '../repositories/account';

@api(def)
export class AccountController {
  repository: AccountRepository;

  constructor() {
    this.repository = new AccountRepository();
  }

  async getAccount(accountNumber) {
    return await this.repository.find(accountNumber);
  }

 async createAccount(id, customerNumber, balance, branch, type, avgBalance, minimumBalance) {
    return await this.repository.create(id, customerNumber, balance, branch, type, avgBalance, minimumBalance);
  }
}
