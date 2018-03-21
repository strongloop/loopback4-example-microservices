import {api} from '@loopback/rest';
import {def} from './CustomerController.api';
import {repository} from '@loopback/repository';
import {Customer} from '../repositories/customer/models/customer/customer';
import {CustomerRepository} from '../repositories/customer/index';

@api(def)
export class CustomerController {
  constructor(
    @repository('CustomerRepository')
    private customerRepository: CustomerRepository,
  ) {}

  async getCustomer(id): Promise<Customer> {
    return await this.customerRepository.findById(id);
  }

  async getCustomers(filter): Promise<Customer[]> {
    return await this.customerRepository.find(JSON.parse(filter));
  }
}
