# loopback-next-example

The example that determines what features get worked on in LoopBack-next in order to demonstrate best practices for building scalable Microservices.

## Installation

```
# install loopback-next
git clone git@github.com:strongloop/loopback-next
cd loopback-next
npm i
npm i -g lerna
lerna bootstrap
npm link
# install loopback-next-example
cd ..
git clone git@github.com:strongloop/loopback-next-example
cd loopback-next-example
npm i
npm link loopback-next
```

## Execution

```
cd loopback-next-example
bin/start_all.sh
```

## Working

 - The services folder contains 3 microservices which include [account](https://github.com/strongloop/loopback-next-example/tree/master/services/facade/repositories/account), [customer](https://github.com/strongloop/loopback-next-example/tree/master/services/facade/repositories/customer), [transaction](https://github.com/strongloop/loopback-next-example/tree/master/services/facade/repositories/transaction).
 - Loopback-next-example returns the summary of the above 3 entities in form of json.
