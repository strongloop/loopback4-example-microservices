import { Application, Server } from 'loopback-next/packages/core';
import { AccountController } from './controllers/AccountController';

export class AccountMicroservice extends Application {
  private _startTime: Date;

  constructor() {
    super();
    const app = this;
    app.controller(AccountController);
    app.bind('servers.http.enabled').to(true);
    app.bind('servers.https.enabled').to(true);
  }

  async start() {
    this._startTime = new Date();
    const server = new Server(this, { port: 3001 });
    server.bind('applications.accounts').to(this);
    return server.start();
  }

  info() {
    const uptime = Date.now() - this._startTime.getTime();
    return { uptime: uptime };
  }
}

async function main(): Promise<void> {
  const app = new AccountMicroservice();
  await app.start();
  console.log('Application Info:', app.info());
}

if (require.main === module) {
  main().catch(err => {
    console.log('Cannot start the app.', err);
    process.exit(1);
  });
}
