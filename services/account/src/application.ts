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

export class AccountMicroservice extends BootMixin(
  RepositoryMixin(RestApplication),
) {
  public _startTime: Date;

  constructor(options?: ApplicationConfig) {
    options = Object.assign(
      {},
      {
        rest: {
          port: 3001,
        },
      },
      options,
    );

    super(options);
    this.projectRoot = __dirname;
    this._startTime = new Date();
    this.setupDataSources();
  }

  setupDataSources() {
    const dataSource: juggler.DataSource = new DataSourceConstructor(
      'local-fs',
      {
        connector: 'memory',
        file: './src/datasources/local-fs/data.json',
      },
    );
    this.bind('dataSources.memory').to(dataSource);
  }
}
