import {Entity, model} from '@loopback/repository';

@model(require('./accoun-definition.json'))
export class Account extends Entity {}