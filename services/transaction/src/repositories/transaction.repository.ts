// Copyright IBM Corp. 2018. All Rights Reserved.
// Node module: loopback4-example-microservices
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

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
