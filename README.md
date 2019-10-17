# wd-lambdatest-sample

[WD](https://github.com/admc/wd) Integration with lambdatest.

![lambdatest Logo](https://www.lambdatest.com/images/sticky-logo.png)

## Setup
* Clone the repo
* Install dependencies `npm install`
* Update `*.conf.js` files inside the `conf/` directory with your [lambdatest Username and Access Key]

## Running your tests
- To run a single test, run `npm run single`
- To run parallel tests, run `npm run parallel`

## Notes
* You can export the environment variables for the Username and Access Key of your lambdatest account

  ```
  export LT_USERNAME=<your username> &&
  export LT_ACCESS_KEY=<your accesskey>
  ```
## About LambdaTest
[LambdaTest](https://www.lambdatest.com/) is a cloud based selenium grid infrastructure that can help you run automated cross browser compatibility tests on 2000+ different browser and operating system environments. All test data generated during testing including Selenium command logs, screenshots generated in testing, video logs, selenium logs, network logs, console logs, and metadata logs can be extracted using [LambdaTest automation APIs](https://www.lambdatest.com/support/docs/api-doc/). This data can then be used for creating custom reports.
