import {def} from './AccountController.api';
import {api, inject} from 'loopback-next/packages/loopback';
import {AccountRepository} from '../repositories/accounts';

@api(def)
export class AccountController {
   constructor() {
   }
   public async getAccount() : Promise<Accounts>{
      const repository = new AccountRepository();
      const accounts = await repository.find();
      const account = accounts.length && accounts.length > 0? accounts[0]: {};
      const accountModel = new Accounts(account.toJSON());
      return accountModel;
   }
}

export class Accounts {
  accountNumber: string
  customerNumber: string
  balance: number
  branch: string
  avgBalance: number
  minimumBalance: number

  constructor(data: Partial<Accounts>) {
     Object.assign(this, data);  
  }
}
