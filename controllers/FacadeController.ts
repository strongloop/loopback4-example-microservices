import {api} from 'loopback-next/packages/loopback';
import {def} from './FacadeController.api';
import {AccountRepository} from '../repositories/accounts';
import {CustomerRepository} from '../repositories/customer';
import {TransactionRepository} from '../repositories/transaction';
const bluebird =  require('bluebird');

@api(def)
export class FacadeController {
  async getSummary(accountNumber) : Promise<any> {
    const accountRepository = new AccountRepository();
    const customerRepository = new CustomerRepository();
    const transactionRepository = new TransactionRepository();
    const accounts = await accountRepository.find(accountNumber);
    const summary = await bluebird.props ({
      account: accounts,
      customer: customerRepository.find(accounts.customerNumber),
      transaction: transactionRepository.find(accountNumber)
    });
    return Promise.resolve(JSON.stringify(summary));
  }
}
