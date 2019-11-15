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
[LambdaTest](https://www.lambdatest.com/) is a cloud based selenium grid infrastructure that can help you run automated cross browser compatibility tests on 2000+ different browser and operating system environments. LambdaTest supports all programming languages and frameworks that are supported with Selenium, and have easy integrations with all popular CI/CD platforms. It's a perfect solution to bring your [selenium automation testing](https://www.lambdatest.com/selenium-automation) to cloud based infrastructure that not only helps you increase your test coverage over multiple desktop and mobile browsers, but also allows you to cut down your test execution time by running tests on parallel.
