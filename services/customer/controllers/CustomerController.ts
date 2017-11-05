import {api} from '@loopback/rest';
import {def} from './CustomerController.api';
import {repository} from '@loopback/repository';
import {Customer} from '../repositories/customer/models/customer/customer';
import {CustomerRepository} from '../repositories/customer/index';

@api(def)
export class CustomerController {

    constructor(@repository('CustomerRepository') private repository: CustomerRepository) {

    }

    async getCustomers(filter): Promise<Customer[]> {
        return await this.repository.find(JSON.parse(filter))
    }
}
