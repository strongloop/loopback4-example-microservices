// Copyright IBM Corp. 2018. All Rights Reserved.
// Node module: loopback4-example-microservices
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import {dataSource} from './swagger.datasource';
/* tslint:disable no-any */
export class AccountRepository {
  model: any;

  constructor() {
    this.model = dataSource.createModel('AccountService', {});
  }

  async find(accountNumber: string) {
    const response = await this.model.findById({id: `${accountNumber}`});
    return (response && response.obj) || [];
  }

  async create(accountInstance: any): Promise<any> {
    return await this.model.create(accountInstance);
  }
}
/* tslint:enable no-any */
