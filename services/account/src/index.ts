import {AccountMicroservice} from './application';
import {RestServer, RestBindings} from '@loopback/rest';

export async function main() {
  const app = new AccountMicroservice();
  try {
    await app.boot();
    await app.start();
    console.log('Application Info:', await info());
  } catch (err) {
    console.error(`Cannot start the app ${err}`);
    process.exit(1);
  }

  async function info() {
    const rest = await app.getServer<RestServer>(RestServer);
    const port = await rest.get<Number>(RestBindings.PORT);
    return {
      appName: 'account',
      uptime: Date.now() - app._startTime.getTime(),
      url: `http://127.0.0.1:${port}`,
    };
  }
}
