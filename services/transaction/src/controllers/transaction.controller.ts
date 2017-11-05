import {api} from '@loopback/rest';
import {def} from './transaction.controller.api';
import {TransactionRepository} from '../repositories';
import {Transaction} from '../models';
import {repository} from '@loopback/repository';
import {Filter} from '@loopback/repository/src/query';

@api(def)
export class TransactionController {
  constructor(
    @repository('TransactionRepository')
    private transactionRepository: TransactionRepository,
  ) {}

  async getTransactions(filter?: Filter | string): Promise<Transaction[]> {
    if (typeof filter === 'string') {
      filter = JSON.parse(filter) as Filter;
    }

    return await this.transactionRepository.find(filter);
  }
}
