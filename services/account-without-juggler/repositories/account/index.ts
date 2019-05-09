// Copyright IBM Corp. 2017,2018. All Rights Reserved.
// Node module: loopback4-example-microservices
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import {CrudRepositoryImpl} from '@loopback/repository';
import {MySqlDs} from './datasources/mysqlds';
import {Account} from './models/Account';

export class AccountRepository extends CrudRepositoryImpl<Account, string> {
  constructor() {
    const ds = new MySqlDs();
    super(ds, Account);
  }
}
