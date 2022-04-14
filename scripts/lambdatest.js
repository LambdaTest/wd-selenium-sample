var chai = require("chai"),
  chaiAsPromised = require("chai-as-promised"),
  wd = require('wd'),
  colors = require('colors'),
  child_process = require('child_process')

chai.use(chaiAsPromised);
chai.should();
chaiAsPromised.transferPromiseness = wd.transferPromiseness;

wd.addPromiseChainMethod(
  'onQuit', function (done) {
    if (done) done();
    return this;
  }
);

async function runOnlambdatest(caps, test, done) {
  console.log("Starting Test: " + test.name.green + '\n');
  var browser = wd.promiseChainRemote(config.seleniumHost, config.seleniumPort, username, accessKey);

  // optional extra logging
  browser.on('status', function (info) {
    console.log(info.cyan);
  });
  browser.on('command', function (eventType, command, response) {
    console.log(' > ' + eventType.green, command, (response || '').grey);
  });
  browser.on('http', function (meth, path, data) {
    console.log(' > ' + meth.yellow, path, (data || '').grey);
  });

  await test.run(browser.init(caps))
  return browser.quit();
}

var config_file = process.argv[2] || 'conf.js'
var config = require(config_file).config;
var test = require(config.test);

var username = process.env.LT_USERNAME || config.user;
var accessKey = process.env.LT_ACCESS_KEY || config.key;

for (var i in config.capabilities) {
  var caps = config.capabilities[i];
  if (caps["tunnel"]) {
    //start tunnel
  }
  else {
    runOnlambdatest(caps, test);
  }
}
