import {DefaultCrudRepository, DataSourceType} from '@loopback/repository';
import {Transaction} from '../models/transaction.model';
import {inject} from '@loopback/context';

export class TransactionRepository extends DefaultCrudRepository<
  Transaction,
  string
> {
  constructor(@inject('dataSources.memory') dataSource: DataSourceType) {
    super(Transaction, dataSource);
  }
}
