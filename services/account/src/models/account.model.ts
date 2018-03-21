import {Entity, model} from '@loopback/repository';
import {accountDefinition} from './account.definition';

@model(accountDefinition)
export class Account extends Entity {}
