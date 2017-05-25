import { model } from 'loopback-next/packages/repository/';
import {
  Entity,
  ModelDefinition,
  PropertyDefinition
} from 'loopback-next/packages/repository';

@model(require('./account/model-definition'))
export class Account extends Entity {
  static definition = new ModelDefinition('Account', require('./account/model-definition').properties);
  static modelName = 'Account';
}
