import { Application } from '@loopback/core';
import { AccountController } from './controllers/AccountManagementController';

const app = new Application();
app.controller(AccountController);

app.start();

console.log('Application started on port:', app.getSync('http.port'));
