import {api} from 'loopback-next/packages/loopback';
import {def} from './TransactionController.api';
import {TransactionRepository} from '../repositories/transaction';

@api(def)
export class TransactionController {
  async getTransactions() : Promise<any> {
    const repo = new TransactionRepository();
    const transactions = await repo.find();
    return Promise.resolve(JSON.stringify(transactions));
  }
}