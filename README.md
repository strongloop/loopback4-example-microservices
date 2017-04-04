# loopback-next-example
The example that determines what features get worked on in LoopBack-next.

## Installation and running

```
# install loopback-next
git clone git@github.com:strongloop/loopback-next
cd loopback-next
npm i
npm i -g lerna
lerna bootstrap
npm link
# install loopback-next-example
cd ..
git clone git@github.com:strongloop/loopback-next-example
cd loopback-next-example
npm i
npm link loopback-next
npm start
```

Test it out by running `curl localhost:3000/vitals`, you should see `{uptime: 1000}`.
