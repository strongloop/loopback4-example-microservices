import { Application, Server, ServerConfig } from '@loopback/core';
import { TodoController } from './controllers/todo-controller';
import { Todo } from './models/todo';
import {
  juggler,
  DataSourceConstructor,
  DefaultCrudRepository
} from '@loopback/repository';
import { datasources } from './datasources';

export class TodoApplication extends Application {
  private _startTime: Date;

  constructor() {
    super();
    const app = this;
    let ds = datasources['ds'];
    // Controller bindings
    app.controller(TodoController);

    let datasource = new DataSourceConstructor('ds', ds);
    // FIXME(kev): datasource.createModel needs to return a
    // juggler.PersistedModel instead of a juggler.ModelBase
    // in order to use the DefaultCrudRepository.
    let todo = require('./models/todo-model.json');
    let TodoLegacy: any = datasource.createModel(todo.name, todo.properties);
    let TodoRepository = new DefaultCrudRepository<Todo, number>(
      TodoLegacy,
      datasource
    );
    app.bind('repositories.todo').to(TodoRepository);

    // Server protocol bindings
    app.bind('servers.http.enabled').to(true);
    app.bind('servers.https.enabled').to(true);
  }

  async start() {
    this._startTime = new Date();
    const server = new Server(this, { port: Number(process.env.PORT) || 3000 });
    server.bind('applications.todo-legacy').to(this);
    return server.start();
  }

  info() {
    const uptime = Date.now() - this._startTime.getTime();
    return { uptime: uptime };
  }
}
