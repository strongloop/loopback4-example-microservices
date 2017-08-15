import { model } from '@loopback/repository/';
import {
  Entity,
  ModelDefinition,
  PropertyDefinition
} from '@loopback/repository';

@model(require('./account/model-definition'))
export class Account extends Entity {
  static definition = new ModelDefinition('Account', require('./account/model-definition').properties);
  static modelName = 'Account';
}
