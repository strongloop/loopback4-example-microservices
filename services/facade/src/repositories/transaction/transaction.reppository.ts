import {dataSource} from './swagger.datasource';
/* tslint:disable no-any */
export class TransactionRepository {
  model: any;

  constructor() {
    this.model = dataSource.createModel('TransactionService', {});
  }

  async find(accountNumber: any): Promise<any> {
    const response = await this.model.find({
      filter: JSON.stringify({
        where: {
          accountNo: accountNumber,
        },
      }),
    });
    return (response && response.obj) || [];
  }
}
/* tslint:enable no-any */
