import {DefaultCrudRepository, DataSourceType} from '@loopback/repository';
import {Account} from '../models';
import {inject} from '@loopback/context';

export class AccountRepository extends DefaultCrudRepository<Account, string> {
  constructor(@inject('dataSources.memory') dataSource: DataSourceType) {
    super(Account, dataSource);
  }
}
