// Copyright IBM Corp. 2017,2018. All Rights Reserved.
// Node module: loopback4-example-microservices
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import * as application from './src';

export * from './src';

if (require.main === module) {
  application.main().catch(err => {
    console.log('Cannot start the app.', err);
    process.exit(1);
  });
}
