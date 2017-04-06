let DataSource = require('loopback-datasource-juggler').DataSource;

let ds = new DataSource('TransactionDB', {
    "connector": "memory",
    "file": "./models/transaction/data.json"
});

let Transaction = ds.define('Transaction', require('../models/transaction/schema.json'));

export class TransactionRepository {
    async find(): Promise<any> {
        let txns = await Transaction.find();
        return txns;
    }
}
