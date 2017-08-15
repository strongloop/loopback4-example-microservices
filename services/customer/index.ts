import { Application } from '@loopback/core';
import { CustomerController } from './controllers/CustomerController';

const app = new Application();

app.controller(CustomerController);
app.bind('http.port').to(3002);

app.start();

console.log('Application started on port:', app.getSync('http.port'));
