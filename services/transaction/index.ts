import {Application, ApplicationConfig} from '@loopback/core';
import {TransactionController} from './src/controllers/TransactionController';
import {RestBindings, RestComponent, RestServer} from '@loopback/rest';
import {TransactionRepository} from './src/repositories/index';
import {DataSourceConstructor} from '@loopback/repository';

class TransactionApplication extends Application {
  private _startTime: Date;

  constructor(options?: ApplicationConfig) {
    options = Object.assign(
      {},
      {
        components: [RestComponent],
        rest: {
          port: 3003,
        },
      },
      options,
    );
    super(options);

    const dataSource = new DataSourceConstructor('local-fs', {
      connector: 'memory',
      file: './repositories/transaction/datasources/local-fs/data.json',
    });

    const app = this;
    app.bind('dataSources.memory').to(dataSource);
    app
      .bind('repositories.TransactionRepository')
      .toClass(TransactionRepository);
    app.controller(TransactionController);
  }

  async start() {
    this._startTime = new Date();
    return super.start();
  }

  async info() {
    const rest = await this.getServer(RestServer);
    const port: Number = await rest.get(RestBindings.PORT);
    return {
      appName: 'transaction',
      uptime: Date.now() - this._startTime.getTime(),
      url: `http://127.0.0.1:${port}`,
    };
  }
}

async function main(): Promise<void> {
  const app = new TransactionApplication();
  await app.start();
  console.log('Application Info:', await app.info());
}

main().catch(err => {
  console.log('Cannot start the app.', err);
  process.exit(1);
});
