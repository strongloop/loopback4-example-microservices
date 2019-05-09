// Copyright IBM Corp. 2018. All Rights Reserved.
// Node module: loopback4-example-microservices
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import {api} from '@loopback/rest';
import {def} from './customer.controller.api';
import {repository} from '@loopback/repository';
import {Customer} from '../models';
import {CustomerRepository} from '../repositories/';
import {Filter} from '@loopback/repository/src/query';

@api(def)
export class CustomerController {
  constructor(
    @repository('CustomerRepository')
    private customerRepository: CustomerRepository,
  ) {}

  async getCustomer(id: string): Promise<Customer> {
    return await this.customerRepository.findById(id);
  }

  async getCustomers(filter?: Filter | string): Promise<Customer[]> {
    if (typeof filter === 'string') {
      filter = JSON.parse(filter) as Filter;
    }
    return await this.customerRepository.find(filter);
  }
}
