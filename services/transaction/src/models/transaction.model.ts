import {Entity, model} from '@loopback/repository';
import {transactionDefinition} from './transaction.definition';

@model(transactionDefinition)
export class Transaction extends Entity {}
