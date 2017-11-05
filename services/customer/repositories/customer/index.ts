import {DefaultCrudRepository} from '@loopback/repository';
import {Customer} from './models/customer/customer';
import {inject} from '@loopback/context';

export class CustomerRepository extends DefaultCrudRepository<Customer, string> {
  constructor(@inject('dataSources.memory') dataSource) {
    super(Customer, dataSource);
  }
}
