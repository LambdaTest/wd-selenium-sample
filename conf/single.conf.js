user= process.env.LT_USERNAME || "<your username>",
key=  process.env.LT_ACCESS_KEY || "<your accessKey>",

exports.config = {

  seleniumHost: 'hub.lambdatest.com',
  seleniumPort: 80,

  test: '../tests/single_test.js',

  capabilities: [{
    browserName: 'chrome',
    platform: 'win10',
    version: '67',
    name: "single-test",
    build: "wd-lambdatest-sample"
  }]
}
