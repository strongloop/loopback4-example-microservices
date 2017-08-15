import { Application } from '@loopback/core';
import { AccountController } from './controllers/AccountController';

const app = new Application();

app.controller(AccountController);
app.bind('http.port').to(3001);

app.start();

console.log('Application started on port:', app.getSync('http.port'));
