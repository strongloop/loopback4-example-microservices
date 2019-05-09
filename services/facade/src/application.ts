// Copyright IBM Corp. 2018. All Rights Reserved.
// Node module: loopback4-example-microservices
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import {ApplicationConfig} from '@loopback/core';
import {RestApplication} from '@loopback/rest';
/* tslint:disable:no-unused-variable */
import {
  DataSourceConstructor,
  juggler,
  RepositoryMixin,
  Class,
  Repository,
} from '@loopback/repository';
/* tslint:disable:no-unused-variable */
import {BootMixin, Booter, Binding} from '@loopback/boot';

export class FacadeMicroservice extends BootMixin(
  RepositoryMixin(RestApplication),
) {
  public _startTime: Date;

  constructor(options?: ApplicationConfig) {
    options = Object.assign(
      {},
      {
        rest: {
          port: 3101,
        },
      },
      options,
    );

    super(options);
    this.projectRoot = __dirname;
  }

  async start() {
    this._startTime = new Date();
    return super.start();
  }
}
