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
