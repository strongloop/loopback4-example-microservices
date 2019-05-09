// Copyright IBM Corp. 2018. All Rights Reserved.
// Node module: loopback4-example-microservices
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import {DataSourceConstructor, DataSourceType} from '@loopback/repository';
import {accountDefinition} from './account.repository.api';

export const dataSource: DataSourceType = new DataSourceConstructor(
  'AccountService',
  {
    connector: 'loopback-connector-swagger',
    spec: accountDefinition,
  },
);
