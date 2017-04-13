# loopback-next-example

[![Gitter](https://img.shields.io/gitter/room/nwjs/nw.js.svg)](https://gitter.im/strongloop/loopback)

In Loopback (2.x/3.x), models were responsible for both accessing data in other systems (databases, SOAP services, etc.) and providing the application's external REST API. This made it easy to quickly build a REST interface for an existing database, but difficult to customize the REST API and fine-tune it to the needs of application clients.

LoopBack v4 is moving to the well-known Model-(View-)Controller pattern, where the code responsible for data access and manipulation is separated from the code responsible for implementing the REST API.

In loopback-next-example we demonstrate this loose coupling. The facade here uses a set of repositories one corresponding to each of the Account, Customer & Transaction microservice. These repositories are nothing but swagger connectors to the corresponding services running locally on the given ports, defined in swagger configurations of the services. These ports are 3001, 3002 & 3003 for Account, Customer and Transaction services respectively. The services along with the facade, reside in services folder. Each of the services has its own set of repositories, which can be connections to one or many other dependent services. In a typical scenario, there will at least be one repository which represents the DB access for that model. In our loopback-next-example all the services Accout, Customer and Transaction have one repository that represents the DB access and uses the in memory database connector, to connect to the in memory db.

## Installation

### prerequisites
 - https://github.com/strongloop/loopback-next/wiki/README#installation
 - node >= v6.0
 - ts-node >= v3.0.2

### Install loopback-next
```
$ git clone git@github.com:strongloop/loopback-next
$ cd loopback-next
$ bin/build
```

### Install dependencies for loopback-next-example
```
$ cd ..
$ git clone git@github.com:strongloop/loopback-next-example
$ cd loopback-next-example
$ bin/build
```

## Run

### To start the facade and all microservices

```
$ bin/start
```
**Sample Output**
```
Stopping service if any running...
Starting services...
Started account service, Pid: XXXXX
Started customer service, PID: XXXXX
Started transaction service, PID: XXXXX
Started facade service, PID: XXXXX
Application Info: { uptime: 14 }
Application Info: { uptime: 15 }
Application Info: { uptime: 13 }
Application Info: { uptime: 11 }
Started all services!!
To run the app, execute: 
./bin/get-account-summary
./bin/get-account
```

## Usage

### Make a request to get the account summary screen data

Then run the [`get-account-summary`](https://github.com/strongloop/loopback-next-example/blob/master/bin/get-account-summary#L2)
script to make a request to the facade to get the the summary of account id CCHK52321122:
```
$ bin/get-account-summary
```
**Sample Output**
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
```

### Make a request to get the account

Then run the [`get-account`](https://github.com/strongloop/loopback-next-example/blob/master/bin/get-account#L2)
script to make a request to the facade to get the account :
```
$ bin/get-account
```
**Sample Output**
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

### To stop the facade and all micro-services

```
$ bin/stop
```
**Sample Output**
```
Stopped facade and all the services!
```

# Team

<table>
<tr>
<td><a href="http://github.com/ritch">Ritchie Martori<img src="https://avatars2.githubusercontent.com/u/462228?v=3&s=60"></a></td>
<td><a href="http://github.com/superkhau">Simon Ho<img src="https://avatars1.githubusercontent.com/u/1617364?v=3&s=60"></a></td>
<td><a href="http://github.com/siddhipai">Siddhi Pai<img src="https://avatars0.githubusercontent.com/u/15273582?v=3&u=d53eb3a459e72484c0ffed865c4e41f9ed9b4fdf&s=60"></a></td>
<td><a href="http://github.com/mpatsute">Mahesh Patsute<img src="https://avatars3.githubusercontent.com/u/24725376?v=3&s=60"></a></td>
<td><a href="http://github.com/deepakrkris">Deepak Rajamohan<img src="https://avatars2.githubusercontent.com/u/7688315?v=3&s=60"></a></td>
</tr>
</table>

[See all contributors](https://github.com/strongloop/loopback-next-example/graphs/contributors)

# Contributing

 - [Guidelines]()
 - [Join the team]()

# License

[MIT](https://github.com/strongloop/loopback-next-example/blob/master/LICENSE)
