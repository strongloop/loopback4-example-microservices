import {DefaultCrudRepository} from '@loopback/repository';
import {Account} from './models/account/account';
import {inject} from '@loopback/context';

export class AccountRepository extends DefaultCrudRepository<Account, string> {

  constructor(@inject('dataSources.memory') dataSource) {
    super(Account, dataSource);
  }
}
