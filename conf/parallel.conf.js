user= process.env.LT_USERNAME || "<your username>",
key=  process.env.LT_ACCESS_KEY || "<your accessKey>",

exports.config = {

  seleniumHost: 'hub.lambdatest.com',
  seleniumPort: 80,

  test: '../tests/single_test.js',

  commonCapabilities: {
    name: "parallel-test",
    build: "wd-lambdatest-sample"
  },

  capabilities: [{
    browserName: 'chrome',
    platform: 'Windows 10',
    version: 'latest',
  },{
    browserName: 'firefox',
    platform: 'Windows 10',
    version: 'latest',
  },{
    browserName: 'safari',
    platform: 'macos 10.13',
    version: 'latest',
  }]
}

// Code to support common capabilities
exports.config.capabilities.forEach(function(caps){
  for(var i in exports.config.commonCapabilities) caps[i] = caps[i] || exports.config.commonCapabilities[i];
});
