import {DataSourceConstructor, DataSourceType} from '@loopback/repository';
import * as path from 'path';

export const dataSource: DataSourceType = new DataSourceConstructor('memory', {
  connector: 'memory',
  file: path.resolve(__dirname, './data.json'),
});
