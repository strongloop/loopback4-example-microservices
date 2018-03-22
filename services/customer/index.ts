import * as application from './src';

export * from './src';

if (require.main === module) {
  application.main().catch(err => {
    console.log('Cannot start the app.', err);
    process.exit(1);
  });
}
