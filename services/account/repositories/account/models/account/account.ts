import {Entity, model} from '@loopback/repository';

@model(require('./account-definition.json'))
export class Account extends Entity {
}