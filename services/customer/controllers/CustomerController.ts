import {api} from 'loopback-next/packages/loopback';
import {def} from './CustomerController.api';
import {CustomerRepository} from '../repositories/customer';

@api(def)
export class CustomerController {
  async getCustomers(filter): Promise<any> {
    const repository = new CustomerRepository();
    const customers = await repository.find(filter);
    const customer = customers.length && customers.length > 0? customers[0]: {};
    return Promise.resolve(customer.toJSON());
  }
}
