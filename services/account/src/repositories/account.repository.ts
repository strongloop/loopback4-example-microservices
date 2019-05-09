// Copyright IBM Corp. 2018. All Rights Reserved.
// Node module: loopback4-example-microservices
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import {DefaultCrudRepository, DataSourceType} from '@loopback/repository';
import {Account} from '../models';
import {inject} from '@loopback/context';

export class AccountRepository extends DefaultCrudRepository<Account, string> {
  constructor(@inject('dataSources.memory') dataSource: DataSourceType) {
    super(Account, dataSource);
  }
}
