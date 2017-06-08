import { Application, Server } from 'loopback-next/packages/core';
import { TransactionController } from './controllers/TransactionController';

class TransactionApplication extends Application {
  private startTime: Date;

  constructor() {
    super();
    const app = this;
    app.controller(TransactionController);
    app.bind('servers.http.enabled').to(true);
    app.bind('servers.https.enabled').to(true);
  }

  async start() {
    this.startTime = new Date();
    const server = new Server(this, { port: 3003 });
    server.bind('applications.transaction').to(this);
    return server.start();
  }

  info() {
    const uptime = Date.now() - this.startTime.getTime();
    return { uptime: uptime };
  }
}

async function main(): Promise<void> {
  const app = new TransactionApplication();
  await app.start();
  console.log('Application Info:', app.info());
}

main().catch(err => {
  console.log('Cannot start the app.', err);
  process.exit(1);
});