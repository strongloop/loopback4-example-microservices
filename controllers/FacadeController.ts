import {api} from 'loopback-next/packages/loopback';
import {def} from './FacadeController.api';
import {AccountRepository} from '../repositories/accounts';
import {CustomerRepository} from '../repositories/customer';
import {TransactionRepository} from '../repositories/transaction';

@api(def)
export class FacadeController {
  async getSummary() : Promise<any> {
    const accountRepository = new AccountRepository();
    const customerRepository = new CustomerRepository();
    const transactionRepository = new TransactionRepository();
    const accounts = await accountRepository.find();
    const customers = await customerRepository.find();
    const transactions = await transactionRepository.find();
    const summary = {
      account: accounts.obj,
      customer: customers.obj[0],
      transaction: transactions.obj[0]
    };
    return Promise.resolve(JSON.stringify(summary));
  }
}
