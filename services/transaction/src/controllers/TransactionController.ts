import {api} from '@loopback/rest';
import {def} from './TransactionController.api';
import {TransactionRepository} from '../repositories/index';
import {Transaction} from '../models/transaction';
import {repository} from '@loopback/repository';

@api(def)
export class TransactionController {
  constructor(
    @repository('TransactionRepository')
    private transactionRepository: TransactionRepository,
  ) {}

  async getTransactions(filter): Promise<Transaction[]> {
    let transactions = await this.transactionRepository.find(
      JSON.parse(filter),
    );
    const response = [];
    transactions.forEach(transaction => {
      response.push(transaction.toJSON());
    });
    return response;
  }
}
