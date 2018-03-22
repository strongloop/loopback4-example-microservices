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
