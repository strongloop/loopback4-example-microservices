# loopback-next-example

[![Gitter](https://img.shields.io/gitter/room/nwjs/nw.js.svg)](https://gitter.im/strongloop/loopback)

How to use LoopBack.next and some recommended best practices.

## Installation

Make sure you have the following installed:

- [Node.js](https://nodejs.org) >= 7.0.0
- [TypeScript](https://www.typescriptlang.org/) >= 2.0.0 `npm i -g typescript`
- [TypeScript Node](https://github.com/TypeStrong/ts-node) >= 3.0.0 `npm i -g ts-node`

Then install loopback-next:

```
$ git clone https://github.com/strongloop/loopback-next
$ cd loopback-next
$ ./bin/build
```

Then install loopback-next-example:

```
$ cd ..
$ git clone https://github.com/strongloop/loopback-next-example
$ cd loopback-next-example
$ ./bin/build
```

## Basic use

### Start all microservices

```
$ ./bin/start
```

You should see:

```
Stopping microservices related to the example...
Starting services...
Started account service, Pid: XXXXX
Started customer service, PID: XXXXX
Started transaction service, PID: XXXXX
Started facade service, PID: XXXXX
Application Info: { uptime: 14 }
Application Info: { uptime: 15 }
Application Info: { uptime: 13 }
Application Info: { uptime: 11 }
All microservices started successfully.
To test the application, run the get account summary script:
./bin/get-account-summary
./bin/get-account
```

### Perform a HTTP GET request to retrieve account summary data

```
$ ./bin/get-account-summary
```

You should see:

```
{
  "account": {
    "customerNumber": "000343223",
    "balance": 85.84,
    "branch": "Foster City",
    "type": "Checking",
    "avgBalance": 398.93,
    "minimumBalance": 10,
    "id": "CHK52321122"
  },
  "customer": [
    {
      "firstName": "Ron",
      "lastName": "Simpson",
      "ssn": "141-XX-X800",
      "customerSince": "2017-03-14T23:05:18.779Z",
      "street": "742 Evergreen Terrace",
      "state": "OR",
      "city": "Springfield",
      "zip": "95555",
      "lastUpdated": "2017-03-14T23:05:18.599Z",
      "id": "000343223"
    }
  ],
  "transaction": [
    {
      "TransactionId": "DEBIT0001",
      "dateTime": "2017-03-11T00:27:52.422Z",
      "accountNo": "CHK52321122",
      "amount": 20,
      "transactionType": "debit"
    }
  ]
```

> The data above is the account summary for the Account with ID `CCHK52321122`.

### Perform a HTTP GET request to retrieve account data

```
$ ./bin/get-account
```

You should see:

```
[
  {
    "customerNumber": "000343223",
    "balance": 85.84,
    "branch": "Foster City",
    "type": "Checking",
    "avgBalance": 398.93,
    "minimumBalance": 10,
    "id": "CHK52321122"
  },
  {
    "customerNumber": "003499223",
    "balance": 99.99,
    "branch": "Foster City",
    "type": "Checking",
    "avgBalance": 500.93,
    "minimumBalance": 10,
    "id": "CHK54520000"
  }
]
```

> The data above is the account details for account with ID `CCHK52321122`.

### To stop the facade and all microservices

```
$ ./bin/stop
```

You should see:

```
All microservices stopped successfully.
```
### What's different in Loopback 4.x ?

In Loopback (2.x/3.x), models were responsible for both accessing data in other systems (databases, SOAP services, etc.) and providing the application's external REST API. This made it easy to quickly build a REST interface for an existing database, but difficult to customize the REST API and fine-tune it to the needs of application clients.

LoopBack v4 is moving to the well-known Model-(View-)Controller pattern, where the code responsible for data access and manipulation is separated from the code responsible for implementing the REST API.

In loopback-next-example we demonstrate this loose coupling. Facade is our the top level service that serves the account summary api, and is dependent on the three Account, Customer and Transaction services. But the facade only aggregates the call to the three services, and not tighly coupled with the service implementation, and thats why it can vary independent of the three services. We can define the apis in facade the way we want. Thus code responsible for data access and manipulation is seperated from the code responsible for implementing client side APIs.

# Team

Ritchie Martori|Simon Ho|Siddhi Pai|Mahesh Patsute|Deepak Rajamohan
:-:|:-:|:-:|:-:|:-:
<a href="http://github.com/ritch"><img src="https://avatars2.githubusercontent.com/u/462228?v=3&s=60">|<a href="http://github.com/superkhau"><img src="https://avatars1.githubusercontent.com/u/1617364?v=3&s=60"></a>|<a href="http://github.com/siddhipai"><img src="https://avatars0.githubusercontent.com/u/15273582?v=3&u=d53eb3a459e72484c0ffed865c4e41f9ed9b4fdf&s=60"></a>|<a href="http://github.com/mpatsute"><img src="https://avatars3.githubusercontent.com/u/24725376?v=3&s=60">|<a href="http://github.com/deepakrkris"><img src="https://avatars2.githubusercontent.com/u/7688315?v=3&s=60"></a>

[See all contributors](https://github.com/strongloop/loopback-next-example/graphs/contributors)

# Contributing

- [Guidelines](https://github.com/strongloop/loopback-next-example/wiki/Contribution-guidelines)
- [Join the team](https://github.com/strongloop/loopback-next-example/wiki/Join-the-team)

# License

[MIT](https://github.com/strongloop/loopback-next-example/blob/master/LICENSE)
