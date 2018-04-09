import {DataSourceConstructor, DataSourceType} from '@loopback/repository';
import {customerDefinition} from './customer.repository.api';

export const dataSource: DataSourceType = new DataSourceConstructor(
  'CustomerService',
  {
    connector: 'loopback-connector-swagger',
    spec: customerDefinition,
  },
);
