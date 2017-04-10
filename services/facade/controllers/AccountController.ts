import {api} from 'loopback-next/packages/loopback';
import {def} from './AccountController.api';
import {AccountRepository} from '../repositories/accounts';
import bluebird = require('bluebird');
import {CustomerRepository} from '../repositories/customer';
import {TransactionRepository} from '../repositories/transaction';

@api(def)
export class AccountController {
  accountRepository: AccountRepository;
  customerRepository: CustomerRepository;
  transactionRepository: TransactionRepository;

  constructor() {
    this.accountRepository = new AccountRepository();
    this.customerRepository = new CustomerRepository();
    this.transactionRepository = new TransactionRepository();
  }

  async getSummary(accountNumber): Promise<any> {
    const accounts = await this.accountRepository.find(accountNumber);
    const summary = await bluebird.props({
      account: accounts,
      customer: this.customerRepository.find(accounts.customerNumber),
      transaction: this.transactionRepository.find(accountNumber),
    });
    return Promise.resolve(JSON.stringify(summary));
  }

  async getAccount(accountNumber): Promise<any> {
    const account = await this.accountRepository.find(accountNumber);
    return Promise.resolve(JSON.stringify(account));
  }
}
