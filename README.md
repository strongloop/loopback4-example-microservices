# loopback-next-example

The example that determines what features get worked on in LoopBack-next in order to demonstrate best practices for building scalable Microservices.

## Installation & Run

**install loopback-next**
```
$ git clone git@github.com:strongloop/loopback-next
$ cd loopback-next
$ npm i
$ npm i -g lerna
$ lerna bootstrap
$ npm link
```

**install loopback-next-example**
```
$ cd ..
$ git clone git@github.com:strongloop/loopback-next-example
$ cd loopback-next-example
$ npm i
$ npm link loopback-next
$ chmod +x bin/*
$ bin/start.sh
```

### Make a request to get the account summary screen data, and get account.

```
$ bin/get-account-summary.sh
$ bin/get-account.sh
```

### To stop the facade and all micro-services

```
$ bin/stop.sh
```

## Working

 - The services folder contains 3 microservices which include [account](https://github.com/strongloop/loopback-next-example/tree/master/services/account), [customer](https://github.com/strongloop/loopback-next-example/tree/master/services/customer), [transaction](https://github.com/strongloop/loopback-next-example/tree/master/services/transaction)
 - Loopback-next-example returns the summary of the above 3 entities in form of json.