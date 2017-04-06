import {Application, Server} from 'loopback-next/packages/loopback';
import {CustomerController} from './controllers';

class CustomerApplication extends Application {
  private _startTime : Date;

  constructor() {
    super();
    const app = this;
    app.controller(CustomerController);
    app.bind('servers.http.enabled').to(true);
    app.bind('servers.https.enabled').to(true);
  }

  async start() {
    this._startTime = new Date();
    const server = new Server();
    server.bind('applications.customer').to(this);
    return server.start();
  }

  info() {
    const uptime = Date.now() - this._startTime.getTime();
    return {uptime: uptime};
  }
}

// tslint:disable-next-line:no-floating-promises
main().catch(err => {
  console.log('Cannot start the app.', err);
  process.exit(1);
});

async function main(): Promise<void> {
  const app = new CustomerApplication();
  await app.start();
  console.log('Application Info:', app.info());
}
