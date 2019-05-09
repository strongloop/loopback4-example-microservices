// Copyright IBM Corp. 2018. All Rights Reserved.
// Node module: loopback4-example-microservices
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import {dataSource} from './swagger.datasource';
/* tslint:disable no-any */
export class CustomerRepository {
  model: any;

  constructor() {
    this.model = dataSource.createModel('CustomerService', {});
  }

  async find(customerNumber: any): Promise<any> {
    const response = await this.model.findById({id: `${customerNumber}`});
    return (response && response.obj) || [];
  }
}
/* tslint:enable no-any */
