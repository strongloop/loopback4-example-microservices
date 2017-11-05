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
