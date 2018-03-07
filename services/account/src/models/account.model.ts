import {Entity, model} from '@loopback/repository';
import {accountDefinition} from './';

@model(accountDefinition)
export class Account extends Entity {}
