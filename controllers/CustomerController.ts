import {def} from './CustomerController.api';
import {api, inject} from 'loopback-next/packages/loopback';

let DataSource = require('../../loopback-datasource-juggler').DataSource;

let ds = new DataSource('CustomerDB', {
    "connector": "memory",
    "file": "data.json"
});

@api(def)
export class CustomerController {
   constructor() {
      var Customer = ds.define('Customer', {
       name: String,
     });
   }
   public async query() : Promise<string>{
       var Customer = ds.define('Customer', {
        name: String,
       });
       var data = await Customer.find();
       console.log(data[0].customerNumber);
       return JSON.stringify({customerNumber: data[0].customerNumber, firstName: data[0].firstName});
   }
}
