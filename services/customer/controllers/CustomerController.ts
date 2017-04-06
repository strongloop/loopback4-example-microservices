import {api} from 'loopback-next/packages/loopback';
import {def} from './CustomerController.api';
import {CustomerRepository} from '../repositories/customer';

@api(def)
export class CustomerController {
    async getCustomers():Promise<any>{
       const repository = new CustomerRepository();
       const customers = await repository.find();
       return Promise.resolve(JSON.stringify(customers));
    }
}
