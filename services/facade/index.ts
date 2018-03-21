import {Application, ApplicationConfig} from '@loopback/core';
import {AccountController} from './controllers/AccountManagementController';
import {RestBindings, RestComponent, RestServer} from '@loopback/rest';

class FacadeMicroservice extends Application {
  private _startTime: Date;

  constructor(options?: ApplicationConfig) {
    options = Object.assign(
      {},
      {
        components: [RestComponent],
      },
      options,
    );
    super(options);
    const app = this;
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
      appName: 'facade',
      uptime: Date.now() - this._startTime.getTime(),
      url: `http://127.0.0.1:${port}`,
    };
  }
}

async function main(): Promise<void> {
  const app = new FacadeMicroservice();
  await app.start();
  console.log('Application Info:', await app.info());
}

main().catch(err => {
  console.log('Cannot start the app.', err);
  process.exit(1);
});
