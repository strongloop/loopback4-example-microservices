const application = (module.exports = require('./dist'));

if (require.main === module) {
  application.main();
}
