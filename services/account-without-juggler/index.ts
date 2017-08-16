import { Application } from '@loopback/core';
import { AccountController } from './controllers/AccountController';
import { AccountRepository } from './repositories/account';

const app = new Application();

app.controller(AccountController);
app.bind('http.port').to(3001);
app.bind('repositories.account').toClass(AccountRepository);

app.start();

console.log('Application started on port:', app.getSync('http.port'));
