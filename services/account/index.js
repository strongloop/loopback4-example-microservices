const application = (module.exports = require('./dist/src'));

if (require.main === module) {
  application.main();
}
