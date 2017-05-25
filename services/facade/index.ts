import { Application, Server } from 'loopback-next/packages/core';
import { AccountController } from './controllers/AccountManagementController';

class FacadeMicroservice extends Application {
  private startTime: Date;

  constructor() {
    super();
    this.controller(AccountController);
    this.bind('servers.http.enabled').to(true);
    this.bind('servers.https.enabled').to(true);
  }

  async start() {
    this.startTime = new Date();
    const server = new Server();
    server.bind('applications.facade').to(this);
    return server.start();
  }

  info() {
    const uptime = Date.now() - this.startTime.getTime();
    return { uptime: uptime };
  }
}

async function main(): Promise<void> {
  const app = new FacadeMicroservice();
  await app.start();
  console.log('Application Info:', app.info());
}

main().catch(err => {
  console.log('Cannot start the app.', err);
  process.exit(1);
});