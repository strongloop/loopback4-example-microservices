import { Application, ApplicationConfig } from '@loopback/core';
import { CustomerController } from './controllers/CustomerController';
import { RestBindings, RestComponent, RestServer } from '@loopback/rest';
import {DataSourceConstructor} from '@loopback/repository';
import {CustomerRepository} from './repositories/customer/index';

class CustomerApplication extends Application {
    private _startTime: Date;

    constructor(options?: ApplicationConfig) {
        options = Object.assign(
            {},
            {
                components: [RestComponent],
                rest: {
                    port: 3002
                }
            },
            options
        );
        super(options);

        const dataSource = new DataSourceConstructor('local-fs', {
            connector: 'memory',
            file:  './repositories/customer/datasources/local-fs/data.json'
        });

        const app = this;
        app.bind('dataSources.memory').to(dataSource);
        app.bind('repositories.CustomerRepository').toClass(CustomerRepository);
        app.controller(CustomerController);
    }

    async start() {
        this._startTime = new Date();
        return super.start();
    }

    async info() {
        const rest = await this.getServer(RestServer);
        const port: Number = await rest.get(RestBindings.PORT);
        return {
            appName: "customer",
            uptime: Date.now() - this._startTime.getTime(),
            url: `http://127.0.0.1:${port}`,
        };
    }
}

async function main(): Promise<void> {
    const app = new CustomerApplication();
    await app.start();
    console.log('Application Info:', await app.info());
}

main().catch(err => {
    console.log('Cannot start the app.', err);
    process.exit(1);
});
