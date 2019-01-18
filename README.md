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
