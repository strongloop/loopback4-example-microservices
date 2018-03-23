import {DefaultCrudRepository} from '@loopback/repository';
import {Transaction} from '../models/transaction';
import {inject} from '@loopback/context';

export class TransactionRepository extends DefaultCrudRepository<
  Transaction,
  string
> {
  constructor(@inject('dataSources.memory') dataSource) {
    super(Transaction, dataSource);
  }
}
