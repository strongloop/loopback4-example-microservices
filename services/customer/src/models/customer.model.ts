import {Entity, model} from '@loopback/repository';
import {customerDefinition} from './customer.definition';

@model(customerDefinition)
export class Customer extends Entity {}
