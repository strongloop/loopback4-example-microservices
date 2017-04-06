import {def} from './CustomerController.api';
import {api, inject} from 'loopback-next/packages/loopback';
import {CustomerRepository} from '../repositories/CustomerRepository';

@api(def)
export class CustomerController {
   public async getCustomers():Promise<any>{

       const custRepo = new CustomerRepository();
       let customers = await custRepo.find();
       return Promise.resolve(JSON.stringify(customers));
    }
}
