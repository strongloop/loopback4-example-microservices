import { Application } from '@loopback/core';
import { TransactionController } from './controllers/TransactionController';

const app = new Application();

app.controller(TransactionController);
app.bind('http.port').to(3003);

app.start();

console.log('Application started on port:', app.getSync('http.port'));
