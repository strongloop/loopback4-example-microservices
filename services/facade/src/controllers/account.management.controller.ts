import {api} from '@loopback/rest';
import {accountManagementDefinition} from './account.management.controller.api';
import {
  AccountRepository,
  CustomerRepository,
  TransactionRepository,
} from '../repositories';
/* tslint:disable no-any */

@api(accountManagementDefinition)
export class AccountController {
  accountRepository: AccountRepository;
  customerRepository: CustomerRepository;
  transactionRepository: TransactionRepository;

  constructor() {
    this.accountRepository = new AccountRepository();
    this.customerRepository = new CustomerRepository();
    this.transactionRepository = new TransactionRepository();
  }

  async getSummary(accountNumber: string): Promise<any> {
    const account = await this.accountRepository.find(accountNumber);
    const customer = await this.customerRepository.find(account.customerNumber);
    const transaction = await this.transactionRepository.find(accountNumber);

    return {
      account,
      customer,
      transaction,
    };
  }

  async getAccount(accountNumber: string): Promise<any> {
    return await this.accountRepository.find(accountNumber);
  }

  async createAccount(accountInstance: string): Promise<any> {
    return await this.accountRepository.create(accountInstance);
  }
}
/* tslint:enable no-any */
