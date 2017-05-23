import { Application, Server } from 'loopback-next/packages/core';
import { CustomerController } from './controllers/CustomerController';

class CustomerApplication extends Application {
  private _startTime: Date;

  constructor() {
    super();
    const app = this;
    app.controller(CustomerController);
    app.bind('servers.http.enabled').to(true);
    app.bind('servers.https.enabled').to(true);
  }

  async start() {
    this._startTime = new Date();
    const server = new Server({ port: 3002 });
    server.bind('applications.customer').to(this);
    return server.start();
  }

  info() {
    const uptime = Date.now() - this._startTime.getTime();
    return { uptime: uptime };
  }
}

async function main(): Promise<void> {
  const app = new CustomerApplication();
  await app.start();
  console.log('Application Info:', app.info());
}

main().catch(err => {
  console.log('Cannot start the app.', err);
  process.exit(1);
});