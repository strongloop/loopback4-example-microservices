import {
  Application,
  Server
} from 'loopback-next/packages/loopback';

class ExampleApplication extends Application {
  constructor() {
    super();
    const app = this;
  }

  private _startTime : Date;

  async start() {
    this._startTime = new Date();
    const server = new Server();
    return server.start();
  }

  info() {
    return {
      uptime: Date.now() - this._startTime.getTime(),
    };
  }
}

// tslint:disable-next-line:no-floating-promises
main().catch(err => {
  console.log('Cannot start the app.', err);
  process.exit(1);
});

async function main(): Promise<void> {
  const app = new ExampleApplication();

  await app.start();
  console.log('Application Info:', app.info());
}
