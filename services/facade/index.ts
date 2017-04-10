import {Application, Server} from 'loopback-next/packages/loopback';
import {AccountController} from './controllers';

class ExampleApplication extends Application {
  constructor() {
    super();  
    const app = this;
    app.controller(AccountController);

    app.bind('servers.http.enabled').to(true);
    app.bind('servers.https.enabled').to(true);
  }

  private _startTime : Date;

  async start() {
    this._startTime = new Date();
    const server = new Server();
    server.bind('applications.example').to(this);
    return server.start();
  }

  info() {
    return {
      uptime: Date.now() - this._startTime.getTime(),
    };
  }
}

main().catch(err => {
  console.log('Cannot start the app.', err);
  process.exit(1);
});

async function main(): Promise<void> {
  const app = new ExampleApplication();
  await app.start();
  console.log('Application Info:', app.info());
}
