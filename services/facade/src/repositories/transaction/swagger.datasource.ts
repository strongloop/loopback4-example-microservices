import {DataSourceConstructor, DataSourceType} from '@loopback/repository';
import {transactionDefinition} from './transaction.repository.api';

export const dataSource: DataSourceType = new DataSourceConstructor(
  'TransactionService',
  {
    connector: 'loopback-connector-swagger',
    spec: transactionDefinition,
  },
);
