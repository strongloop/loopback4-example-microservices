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
import {dataSource} from './datasources';

export class TranscationMicroservice extends BootMixin(
  RepositoryMixin(RestApplication),
) {
  public _startTime: Date;

  constructor(options?: ApplicationConfig) {
    options = Object.assign(
      {},
      {
        rest: {
          port: 3003,
        },
      },
      options,
    );

    super(options);
    this.projectRoot = __dirname;
    this.setupDataSources();
  }

  async start() {
    this._startTime = new Date();
    return super.start();
  }

  setupDataSources() {
    this.bind('dataSources.memory').to(dataSource);
  }
}
