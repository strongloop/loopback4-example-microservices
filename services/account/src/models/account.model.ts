// Copyright IBM Corp. 2018. All Rights Reserved.
// Node module: loopback4-example-microservices
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import {Entity, model} from '@loopback/repository';
import {accountDefinition} from './account.definition';

@model(accountDefinition)
export class Account extends Entity {}
