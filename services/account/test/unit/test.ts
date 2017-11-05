// test/unit/test.js
import 'mocha';
import {AccountController} from '../../controllers/AccountController';
import {expect} from '@loopback/testlab';
import {AccountRepository} from '../../repositories/account';
import * as path from 'path';
import {Context} from '@loopback/context';
import {DataSourceConstructor, juggler} from '@loopback/repository';

let accCtrl: AccountController;

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

  describe('AccountController.getAccounts("{}")', () => {
    it('returns an array of all accounts', async () => {
      const result = await accCtrl.getAccounts('{}');
      expect(result).to.not.be.empty();
      expect(result).have.lengthOf(4);
      expect(result[0].id).to.equalOneOf([
        'CHK52321122',
        'CHK54520000',
        'CHK52321199',
        'CHK99999999'
      ]);
    });
  });

  describe('AccountController.getAccounts("")', () => {
    it('rejects promise for invalid args', async () => {
      let flag = true;
      try {
        await accCtrl.getAccounts('');
      } catch (err) {
        flag = false;
      }
      expect(flag).to.be.false();
    });
  });

  describe('AccountController.getAccounts("{"where":{"id":"test1"}}")', () => {
    it('searches and returns an empty array', async () => {
      const result = await accCtrl.getAccounts('{"where":{"id":"test1"}}');
      expect(result).to.be.empty();
    });
  });

  describe('AccountController.createAccount(testAcc)', () => {
    it('should create an account', async () => {
      const result = await accCtrl.createAccount(testAcc);
      expect(JSON.stringify(result)).to.equal(JSON.stringify(testAcc));
    });
  });

  describe('AccountController.getAccounts("{"where":{"id":"test1"}}")', () => {
    it('searches and returns newly created account', async () => {
      const result = await accCtrl.getAccounts('{"where":{"id":"test1"}}');
      expect(result).to.not.be.empty();
      expect(result).have.lengthOf(1);
      expect(result[0].id).to.be.equal(testAcc.id);
    });
  });

  describe('AccountController.createAccount(brokenAcc)', () => {
    it('fails to create with an Invalid Account instance.', async () => {
      let works = true;
      try {
        await accCtrl.createAccount(brokenAcc);
      } catch (err) {
        works = false;
      }
      expect(works).to.be.false();
    });
  });

  describe('AccountController.updateAccount("{"id":"test1"}", {"balance":2000})', () => {
    it('updates an Account instance', async () => {
      const result = await accCtrl.updateAccount('{"id":"test1"}', {
        balance: 2000,
      });
      expect(result).to.be.equal(1);
    });
  });

  describe('AccountController.updateAccount("{"id":"brokenAccountId1"}", {"balance":2000})', () => {
    it('fails to update Account instance.', async () => {
      let result = await accCtrl.updateAccount('{"id":"brokenAccountId1"}', {
        balance: 2000
      });

      expect(result).to.be.equal(0);
    });
  });

  describe('AccountController.getAccounts("{"where":{"id":"test1"}}")', () => {
    it('returns account with updated balance', async () => {
      const result = await accCtrl.getAccounts('{"where":{"id":"test1"}}');
      expect(result).to.not.be.empty();
      expect(result).have.lengthOf(1);
      expect(result[0].id).to.be.equal(testAcc.id);
      expect(JSON.parse(JSON.stringify(result[0])).balance).to.be.equal(2000);
    });
  });

  describe('AccountController.deleteAccount("{"id":"test1"}")', () => {
    it('deletes the Account instance', async () => {
      const result = await accCtrl.deleteAccount('{"id":"test1"}');
      expect(result).to.be.equal(1);
    });
  });

  describe('AccountController.deleteAccount("{"id":"brokenAccountId1"}"', () => {
    it('fails to delete Account instance.', async () => {
      let result = await accCtrl.deleteAccount('{"id":"brokenAccountId1"}');
      expect(result).to.be.equal(0);
    });
  });

  describe('AccountController.getAccounts("{"where":{"id":"test1"}}")', () => {
    it('searches and returns an empty array', async () => {
      const result = await accCtrl.getAccounts('{"where":{"id":"test1"}}');
      expect(result).to.be.empty();
    });
  });

  describe('AccountController.getAccounts("{}")', () => {
    it('returns an array of all accounts', async () => {
      const result = await accCtrl.getAccounts('{}');
      expect(result).to.not.be.empty();
      expect(result).have.lengthOf(4);
      expect(result[0].id).to.equalOneOf([
        'CHK52321122',
        'CHK54520000',
        'CHK52321199',
        'CHK99999999'
      ]);
    });
  });
});

async function createAccountController() {

  const ctx = new Context();

  const dataSource: juggler.DataSource = new DataSourceConstructor('local-fs', {
    connector: 'memory',
    file: path.resolve(__dirname, 'test.data.json')
  });

  ctx.bind('dataSources.memory').to(dataSource);

  ctx.bind('repositories.AccountRepository').toClass(AccountRepository);

  // Bind the controller class
  ctx.bind('controllers.AccountController').toClass(AccountController);

  // Resolve the controller
  accCtrl = await ctx.get('controllers.AccountController');
}
