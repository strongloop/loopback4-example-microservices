# loopback-next-example
The example that determines what features get worked on in LoopBack-next.

## Instalation and running

```
# install loopback-next
git clone git@github.com:strongloop/loopback-next
cd loopback-next
npm i
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
