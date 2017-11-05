// test/unit/test.js
import 'mocha';
import {CustomerController} from '../../controllers/CustomerController';
import {expect} from '@loopback/testlab';
import {CustomerRepository} from '../../repositories/customer';
import * as path from 'path';
import {Context} from '@loopback/context';
import {juggler, DataSourceConstructor} from '@loopback/repository';

let custCtrl: CustomerController;

const testCust = {
    id: '000222333',
    firstName: 'Harry',
    lastName: 'Simpleton',
    ssn: '141-XX-C900',
    customerSince: '2017-11-04T09:04:00.000Z',
    street: '742 Neverred Terrace',
    state: 'TX',
    city: 'Houston',
    zip: '77001',
    lastUpdated: '2017-11-04T09:04:00.000Z'
};

const brokenCust = {
    id: '000222333',
    namFirst: 'Harry',
    nameLast: 'Simpleton',
    address: {
        street: '742 Neverred Terrace',
        state: 'TX',
        city: 'Houston',
        zip: '77001'
    }
};

describe('CustomerController Unit Test Suite', () => {
    before(createCustomerController);

    describe('CustomerController.getCustomers("{}")', () => {
        it('returns an array of all Customers', async () => {
            const result = await custCtrl.getCustomers('{}');
            expect(result).to.not.be.empty();
            expect(result).have.lengthOf(2);
            expect(result[0].id).to.equalOneOf([
                '000343223',
                '003499223'
            ]);
        });
    });

    describe('CustomerController.getCustomers("")', () => {
        it('rejects promise for invalid args', async () => {
            let flag = true;
            try {
                await custCtrl.getCustomers( '');
            } catch (err) {
                flag = false;
            }
            expect(flag).to.be.false();
        });
    });

    describe('CustomerController.getCustomers("{"where": {"firstName":"Simpson","lastName": "Ron"}}")', () => {
        it('searches and returns an empty array', async () => {
            const result = await custCtrl.getCustomers('{"where": {"firstName":"Simpson","lastName": "Ron"}}');
            expect(result).to.be.empty();
        });
    });

    describe('CustomerController.getCustomers("{"where": {"firstName":"Ron","lastName": "Simpson"}}")', () => {
        it('searches and returns customer using filter', async () => {
            const filter = {'where': {'firstName': 'Ron', 'lastName': 'Simpson'}};
            const result = await custCtrl.getCustomers(JSON.stringify(filter));
            expect(result).to.not.be.empty();
            expect(result).have.lengthOf(1);
            expect(result[0].firstName).to.be.equal(filter.where.firstName);
            expect(result[0].lastName).to.be.equal(filter.where.lastName);
        });
    });

    describe('CustomerController.getCustomer("{"where": {"id": 0000000000}}}")', () => {
        it('searches and returns an empty array', async () => {
            const id = '0000000000';
            const filter = {'where': {id}};
            const result = await custCtrl.getCustomers(JSON.stringify(filter));
            expect(result).to.be.empty();
        });
    });

    describe('CustomerController.getCustomer("000343223")', () => {
        it('searches and returns customer using id', async () => {
            const id = '000343223';
            const result = await custCtrl.getCustomer(id);
            expect(result).to.not.be.empty();
            expect(result.firstName).to.be.equal('Ron');
            expect(result.lastName).to.be.equal('Simpson');
        });
    });
});

async function createCustomerController() {
    const ctx = new Context();

    const dataSource: juggler.DataSource = new DataSourceConstructor('local-fs', {
        connector: 'memory',
        file:  path.resolve(__dirname, 'test.data.json')
    });

    ctx.bind('dataSources.memory').to(dataSource);

    ctx.bind('repositories.CustomerRepository').toClass(CustomerRepository);

    // Bind the controller class
    ctx.bind('controllers.CustomerController').toClass(CustomerController);

    // Resolve the controller
    custCtrl = await ctx.get('controllers.CustomerController');
}
