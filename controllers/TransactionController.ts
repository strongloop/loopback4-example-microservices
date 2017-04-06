import {def} from './TransactionController.api';
import {api, inject} from 'loopback-next/packages/loopback';
import {TransactionRepository} from '../repositories/TransactionRepository';

@api(def)
export class TransactionController {
    constructor(@inject('app.info') private _info: any) {
        this._info = {uptime: 1000};
    }

    async getUptime() : Promise<any> {
        return Promise.resolve(JSON.stringify(this._info));
    }

    async getTransactions() : Promise<any> {

        let testClass = new TransactionRepository();
        let txns = await testClass.find();
        return Promise.resolve(JSON.stringify(txns));

    }

}

