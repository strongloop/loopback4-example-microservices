import {DataSourceConstructor, DataSourceType} from '@loopback/repository';
import {accountDefinition} from './account.repository.api';

export const dataSource: DataSourceType = new DataSourceConstructor(
  'AccountService',
  {
    connector: 'loopback-connector-swagger',
    spec: accountDefinition,
  },
);
