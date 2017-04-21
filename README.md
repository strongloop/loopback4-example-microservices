# loopback-next-example

[![Gitter](https://img.shields.io/gitter/room/nwjs/nw.js.svg)](https://gitter.im/strongloop/loopback)

How to build scalable microservices using LoopBack.next.

## Installation

Make sure you have the following installed:

- [Node.js](https://nodejs.org/en/download/) >= 7.0.0
- [TypeScript](https://www.typescriptlang.org/) >= 2.0.0 `npm i -g typescript`
- [TypeScript Node](https://github.com/TypeStrong/ts-node) >= 3.0.0 `npm i -g ts-node`

Then install loopback-next:

```shell
git clone https://github.com/strongloop/loopback-next
cd loopback-next
npm start
```

Then install loopback-next-example:

```shell
cd ..
git clone https://github.com/strongloop/loopback-next-example
cd loopback-next-example
npm run build # or ./bin/build
```

## Basic use

### Start all microservices

```shell
npm start
```

### Perform a HTTP GET request to retrieve account summary data

```shell
curl localhost:3000/account/summary?accountNumber=CHK52321122
```

### Perform a HTTP GET request to retrieve account data

```
curl -s localhost:3001/accounts?accountNumber=CHK52321122
```

### To stop the facade and all microservices

```
npm stop
```

> Helper scripts for all the above commands are also available in
> https://github.com/strongloop/loopback-next-example/tree/master/bin

### What's different in Loopback 4.x ?

In Loopback (2.x/3.x), models were responsible for both accessing data in other systems (databases, SOAP services, etc.) and providing the application's external REST API. This made it easy to quickly build a REST interface for an existing database, but difficult to customize the REST API and fine-tune it to the needs of application clients.

LoopBack v4 is moving to the well-known Model-(View-)Controller pattern, where the code responsible for data access and manipulation is separated from the code responsible for implementing the REST API.

In loopback-next-example we demonstrate this loose coupling. Facade is our the top level service that serves the account summary api, and is dependent on the three Account, Customer and Transaction services. But the facade only aggregates the call to the three services, and not tighly coupled with the service implementation, and thats why it can vary independent of the three services. We can define the apis in facade the way we want. Thus code responsible for data access and manipulation is seperated from the code responsible for implementing client side APIs.

# Team

Ritchie Martori|Simon Ho|Siddhi Pai|Mahesh Patsute|Deepak Rajamohan
:-:|:-:|:-:|:-:|:-:
[<img src="https://avatars2.githubusercontent.com/u/462228?v=3&s=60">](http://github.com/ritch")|<a href="http://github.com/superkhau"><img src="https://avatars1.githubusercontent.com/u/1617364?v=3&s=60"></a>|<a href="http://github.com/siddhipai"><img src="https://avatars0.githubusercontent.com/u/15273582?v=3&u=d53eb3a459e72484c0ffed865c4e41f9ed9b4fdf&s=60"></a>|<a href="http://github.com/mpatsute"><img src="https://avatars3.githubusercontent.com/u/24725376?v=3&s=60">|<a href="http://github.com/deepakrkris"><img src="https://avatars2.githubusercontent.com/u/7688315?v=3&s=60"></a>

[See all contributors](https://github.com/strongloop/loopback-next-example/graphs/contributors)

# Contributing

- [Guidelines](https://github.com/strongloop/loopback-next/wiki/Contributing)
- [Join the team](https://github.com/strongloop/loopback-next/wiki/Contributing#join-the-team)

# License

[MIT](https://github.com/strongloop/loopback-next-example/blob/master/LICENSE)
