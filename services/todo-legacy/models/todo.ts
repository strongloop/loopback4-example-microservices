import * as _ from 'lodash';
import { Entity } from '@loopback/repository';

export class Todo extends Entity {
  id: number;
  title: string;
  body: string;

  constructor(body?: Object) {
    super();
    if (body) {
      Object.assign(this, body);
    }
  }

  getId() {
    return this.id;
  }
}
