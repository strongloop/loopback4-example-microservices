import {Entity, model} from '@loopback/repository';

@model(require('./customer-definition.json'))
export class Customer extends Entity {}