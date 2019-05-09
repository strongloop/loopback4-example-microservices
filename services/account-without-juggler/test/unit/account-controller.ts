// Copyright IBM Corp. 2017,2018. All Rights Reserved.
// Node module: loopback4-example-microservices
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

// test/unit/account-controller.ts
import 'mocha';
import {AccountController} from '../../controllers/AccountController';
import {expect} from '@loopback/testlab';
import {AccountRepository} from '../../repositories/account';

let testController: AccountController;

const testAcc = {
  id: 'test1',
  customerNumber: '1234',
  balance: 1000,
  branch: 'Toronto',
  type: 'Chequing',
  avgBalance: 500,
  minimumBalance: 0,
};

const brokenAcc = {
  customerNumber: '123456',
  balance: 1000,
  branch: 'Broke City',
  type: 'Chequing',
};

describe('AccountController Unit Test Suite', () => {
  before(createAccountController);

  it('creates an account instance', async () => {
    const result = await testController.createAccount(testAcc);
    expect(result).to.deepEqual(testAcc);
    const getResult = await testController.getAccount(
      '{"where":{"id":"test1"}}',
    );
    expect(getResult).to.not.be.empty();
    expect(getResult).have.lengthOf(1);
    expect(getResult[0]).to.deepEqual(testAcc);
  });
  it('should not create an invalid instance', async () => {
    try {
      await testController.createAccount(brokenAcc);
    } catch (err) {
      expect(err).to.not.be.empty();
    }
  });
  it('should not accept invalid args', async () => {
    try {
      await testController.getAccount('');
    } catch (err) {
      expect(err).to.not.be.empty();
    }
  });

  it('updates an account instance', async () => {
    const result = await testController.updateById('test1', {
      balance: 2000,
    });
    expect(result).to.be.true();
    const getResult = await testController.getAccount(
      '{"where":{"id":"test1"}}',
    );
    expect(getResult).to.not.be.empty();
    expect(getResult).have.lengthOf(1);
    expect(getResult[0].id).to.be.equal(testAcc.id);
    expect(getResult[0].toObject()).to.have.property('balance', 2000);
  });

  it('deletes an account instance', async () => {
    const result = await testController.deleteById('test1');
    expect(result).to.be.true();
    const getResult = await testController.getAccount(
      '{"where":{"id":"test1"}}',
    );
    expect(getResult).to.be.empty();
  });
});

function createAccountController() {
  testController = new AccountController(new AccountRepository());
}
