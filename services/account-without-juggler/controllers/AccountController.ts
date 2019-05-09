// Copyright IBM Corp. 2017,2018. All Rights Reserved.
// Node module: loopback4-example-microservices
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import {api} from '@loopback/rest';
import {def} from './AccountController.api';
import {AccountRepository} from '../repositories/account';
import {inject} from '@loopback/context';
import {Account} from '../repositories/account/models/Account';

@api(def)
export class AccountController {
  constructor(
    @inject('repositories.account') private repository: AccountRepository,
  ) {}

  //fixme figure out how to use Filter interface
  //fixme filter is string even though swagger spec
  //defines it as object type
  async getAccount(filter: string): Promise<Account[]> {
    return await this.repository.find(JSON.parse(filter));
  }

  async createAccount(accountInstance: Object): Promise<Account> {
    return await this.repository.create(accountInstance);
  }

  async updateById(id: string, data: Object) {
    return await this.repository.updateById(id, data);
  }

  async deleteById(id: string) {
    return await this.repository.deleteById(id);
  }
}
