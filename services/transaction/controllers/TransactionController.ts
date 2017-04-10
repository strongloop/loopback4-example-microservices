import {api} from 'loopback-next/packages/loopback';
import {def} from './TransactionController.api';
import {TransactionRepository} from '../repositories/transaction';

@api(def)
export class TransactionController {
  async getTransactions(filter) : Promise<any> {
    const repository = new TransactionRepository();
    const transactions = await repository.find(filter);
    const response = [];
    transactions.forEach(element => {
      response.push(element.toJSON());
    });
    return Promise.resolve(response);
  }
}
