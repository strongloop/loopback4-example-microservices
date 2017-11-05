import {Entity, model} from '@loopback/repository';

@model( require('./transaction-definition.json'))
export class Transaction extends Entity {}