import {def} from './AccountController.api';
import {api, inject} from 'loopback-next/packages/loopback';
import {AccountRepository} from '../repositories/accounts';

@api(def) 
export class AccountController {
   async getAccount(accountNumber) {
      const repository = new AccountRepository();
      return await repository.find(accountNumber);
   }
}
