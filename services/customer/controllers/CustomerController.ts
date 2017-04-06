import {api} from 'loopback-next/packages/loopback';
import {def} from './CustomerController.api';
import {CustomerRepository} from '../repositories/customer';

@api(def)
export class CustomerController {
<<<<<<< feef5f52490ce3899aa0489eb185ee5f63d124ca
  async getCustomers(): Promise<any> {
    const repository = new CustomerRepository();
    const customers = await repository.find();
    return Promise.resolve(JSON.stringify(customers));
  }
=======
    async getCustomers():Promise<any>{
       const repository = new CustomerRepository();
       const customers = await repository.find();
       return Promise.resolve(JSON.stringify(customers));
    }
>>>>>>> Review Changes for Customer Microservice
}
