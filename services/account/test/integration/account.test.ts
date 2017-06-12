import {expect, supertest as request } from '@loopback/testlab';
import { AccountMicroservice } from '../../index';

describe('account', () => {
  let service: AccountMicroservice;
  let client: request.SuperTest<request.Test>;
  const url = 'http://127.0.0.1:3001';
  let testItems : any;
  async function startMicroservice() {
    service = new AccountMicroservice();
    service.bind('servers.http.address').to('127.0.0.1');
    await service.start();
    client = request(url);
    return Promise.resolve();
  }
  before((done) => {
    startMicroservice().then(done);
  });

  it('finds all by accountNumber', (done) => {
    client.get('/accounts')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  after((done) => {
    // FIXME(kjdelisle): We have no clean way to shutdown an Application or
    // server!
    done();
  })
});

