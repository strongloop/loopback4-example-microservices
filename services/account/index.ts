import {Application, ApplicationConfig} from '@loopback/core';
import {RestBindings, RestComponent, RestServer} from '@loopback/rest';
import {AccountRepository} from './repositories/account/index';
import {juggler, DataSourceConstructor} from '@loopback/repository';
import {AccountController} from './controllers/AccountController';

class AccountMicroservice extends Application {
  private _startTime: Date;

    constructor(options?: ApplicationConfig) {
        options = Object.assign(
            {},
            {
                components: [RestComponent],
                rest: {
                    port: 3001
                }
            },
            options
        );
        super(options);

        const dataSource: juggler.DataSource = new DataSourceConstructor('local-fs', {
            connector: 'memory',
            file:  './repositories/account/datasources/local-fs/data.json'
        });

        const app = this;

        app.bind('dataSources.memory').to(dataSource);
        app.bind('repositories.AccountRepository').toClass(AccountRepository);
        app.controller(AccountController);
  }

  async start() {
    this._startTime = new Date();
    return super.start();
  }

  async info() {
      const rest = await this.getServer(RestServer);
      const port: Number = await rest.get(RestBindings.PORT);
      return {
          appName: 'account',
          uptime: Date.now() - this._startTime.getTime(),
          url: `http://127.0.0.1:${port}`,
      };
  }
}

async function main(): Promise<void> {
  const app = new AccountMicroservice();
  await app.start();
  console.log('Application Info:', await app.info());
}

main().catch(err => {
  console.log('Cannot start the app.', err);
  process.exit(1);
});
