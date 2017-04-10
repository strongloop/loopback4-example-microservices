import {def} from './AccountController.api';
import {api, inject} from 'loopback-next/packages/loopback';
import {AccountRepository} from '../repositories/accounts';

@api(def) 
export class AccountController {
   constructor() {
   }
   public async getAccount(accountNumber) {
      const repository = new AccountRepository();
      const accounts = await repository.find(accountNumber);
      const account = accounts.length && accounts.length > 0? accounts[0]: {};
      const accountModel = account.toJSON();
      return accountModel;
   }
}
