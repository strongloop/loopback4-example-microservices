// Copyright IBM Corp. 2018. All Rights Reserved.
// Node module: loopback4-example-microservices
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import {DataSourceConstructor, DataSourceType} from '@loopback/repository';
import * as path from 'path';

export const dataSource: DataSourceType = new DataSourceConstructor('memory', {
  connector: 'memory',
  file: path.resolve(__dirname, './data.json'),
});
