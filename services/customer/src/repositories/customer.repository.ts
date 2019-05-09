// Copyright IBM Corp. 2018. All Rights Reserved.
// Node module: loopback4-example-microservices
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import {DefaultCrudRepository, DataSourceType} from '@loopback/repository';
import {Customer} from '../models/customer.model';
import {inject} from '@loopback/context';

export class CustomerRepository extends DefaultCrudRepository<
  Customer,
  string
> {
  constructor(@inject('dataSources.memory') dataSource: DataSourceType) {
    super(Customer, dataSource);
  }
}
