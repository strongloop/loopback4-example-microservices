// test/unit/test.js
import 'mocha';
import {TransactionController} from '../../controllers/TransactionController';
import {expect} from '@loopback/testlab';
import {TransactionRepository} from '../../repositories/transaction';
import * as path from 'path';
import {DataSourceConstructor, juggler} from '@loopback/repository';
import {Context} from '@loopback/context';

let transCtrl: TransactionController;

const testTrans = {
  TransactionId: 'DEBIT99999',
  dateTime: '2017-11-04T00:27:52.422Z',
  accountNo: 'CHK52321122',
  amount: 20,
  transactionType: 'debit',
};

const brokenTrans = {
  from: 'CHK5232112',
  to: 'DEBIT99999',
  amount: 'twenty',
};

describe('TransactionController Unit Test Suite', () => {
  before(createTransactionController);

  describe('TransactionController.getTransactions("", "{}")', () => {
    it('returns an array of all Transactions', async () => {
      const result = await transCtrl.getTransactions('{}');
      expect(result).to.not.be.empty();
      expect(result).have.lengthOf(11);
      expect(result).have.lengthOf(11);
      expect(result[0].TransactionId).to.equalOneOf([
        'DEBIT0001',
        'DEBIT0002',
        'DEBIT0003',
        'DEBIT0004',
        'DEBIT0005',
        'DEBIT0007',
        'DEBIT0009',
        'DEBIT0010',
        'DEBIT0011',
        'DEBIT0012',
        'DEBIT0013',
      ]);
    });
  });

  describe('TransactionController.getTransactions("")', () => {
    it('rejects promise for invalid args', async () => {
      let flag = true;
      try {
        await transCtrl.getTransactions('');
      } catch (err) {
        flag = false;
      }
      expect(flag).to.be.false();
    });
  });

  describe('TransactionController.getTransactions("{"where": {"dateTime":"2019-03-11T00:27:52.422Z","accountNo":"CHK52321122","amount":20,"transactionType":"debit"}}")', () => {
    it('searches and returns an empty array', async () => {
      const result = await transCtrl.getTransactions(
        '{"where": {"dateTime":"2019-03-11T00:27:52.422Z","accountNo":"CHK52321122","amount":20,"transactionType":"debit"}}',
      );
      expect(result).to.be.empty();
    });
  });

  describe('TransactionController.getTransactions("{"where": {"dateTime":"2017-03-11T00:27:52.422Z","accountNo":"CHK52321122"}}")', () => {
    it('searches and returns transaction using filter', async () => {
      const filter = {
        where: {dateTime: '2017-03-11T00:27:52.422Z', accountNo: 'CHK52321122'},
      };
      const result = await transCtrl.getTransactions(JSON.stringify(filter));
      expect(result).to.not.be.empty();
      expect(result).have.lengthOf(5);
      expect(result[0].TransactionId).to.be.equal('DEBIT0001');
      expect(result[1].TransactionId).to.be.equal('DEBIT0002');
      expect(result[2].TransactionId).to.be.equal('DEBIT0003');
      expect(result[3].TransactionId).to.be.equal('DEBIT0004');
      expect(result[4].TransactionId).to.be.equal('DEBIT0005');
    });
  });
});

async function createTransactionController() {
  const ctx = new Context();

  const dataSource: juggler.DataSource = new DataSourceConstructor('local-fs', {
    connector: 'memory',
    file: path.resolve(__dirname, 'test.data.json'),
  });

  ctx.bind('dataSources.memory').to(dataSource);

  ctx.bind('repositories.TransactionRepository').toClass(TransactionRepository);

  // Bind the controller class
  ctx.bind('controllers.TransactionController').toClass(TransactionController);

  // Resolve the controller
  transCtrl = await ctx.get('controllers.TransactionController');
}
