# Run Selenium Tests With WD — TestMu AI (Formerly LambdaTest)
![JavaScript](https://user-images.githubusercontent.com/95698164/172134732-2e9c780e-10ac-4956-b366-86ffc25bf070.png)

<p align="center">
  <a href="https://www.testmuai.com/blog/?utm_source=github&utm_medium=repo&utm_campaign=wd-selenium-sample" target="_bank">Blog</a>
  &nbsp; &#8901; &nbsp;
  <a href="https://www.testmuai.com/support/docs/?utm_source=github&utm_medium=repo&utm_campaign=wd-selenium-sample" target="_bank">Docs</a>
  &nbsp; &#8901; &nbsp;
  <a href="https://www.testmuai.com/learning-hub/?utm_source=github&utm_medium=repo&utm_campaign=wd-selenium-sample" target="_bank">Learning Hub</a>
  &nbsp; &#8901; &nbsp;
  <a href="https://www.testmuai.com/newsletter/?utm_source=github&utm_medium=repo&utm_campaign=wd-selenium-sample" target="_bank">Newsletter</a>
  &nbsp; &#8901; &nbsp;
  <a href="https://www.testmuai.com/certifications/?utm_source=github&utm_medium=repo&utm_campaign=wd-selenium-sample" target="_bank">Certifications</a>
  &nbsp; &#8901; &nbsp;
  <a href="https://www.youtube.com/@TestMuAI" target="_bank">YouTube</a>
</p>
&emsp;
&emsp;
&emsp;

*Learn how to use WD framework to configure and run your JavaScript automation testing scripts on the TestMu AI platform*

[<img height="58" width="200" src="https://user-images.githubusercontent.com/70570645/171866795-52c11b49-0728-4229-b073-4b704209ddde.png">](https://accounts.lambdatest.com/register)

## Table Of Contents

* [Pre-requisites](#pre-requisites)
* [Run Your First Test](#run-your-first-test)
* [Running Your Parallel Tests Using WD Framework](#running-your-parallel-tests-using-wd-framework)
* [Local Testing With TestNG](#testing-locally-hosted-or-privately-hosted-projects)

## Pre-requisites 

Before getting started with Automated Scripts using Selenium with **WD** framework on TestMu AI Automation, you need to:

* Download and install **NodeJS**. You should be having **NodeJS v6** or newer. Click [here](https://nodejs.org/en/) to download.
* Make sure you are using the latest version of **JavaScript**.
* Install **npm** from the official website by clicking [here](https://www.npmjs.com/).
* Download [Selenium JavaScript bindings](https://www.selenium.dev/downloads/) from the official website. Latest versions of **Selenium Client** and **WebDriver** are ideal for running your JavaScript automation testing script on TestMu AI’s Selenium Grid.

### Installing Selenium Dependencies and tutorial repo

Clone the TestMu AI’s [wd-selenium-sample repository](https://github.com/LambdaTest/wd-selenium-sample) and navigate to the code directory as shown below:
```bash
git clone https://github.com/LambdaTest/wd-selenium-sample
cd wd-selenium-sample
```
Install the required project dependencies using the command below:
```bash
npm i
```

### Setting up Your Authentication

Make sure you have your TestMu AI credentials with you to run test automation scripts on TestMu AI Selenium Grid. You can obtain these credentials from the [TestMu AI Automation Dashboard](https://automation.lambdatest.com/build/?utm_source=github&utm_medium=repo&utm_campaign=wd-selenium-sample) or through [TestMu AI Profile](https://accounts.lambdatest.com/login/?utm_source=github&utm_medium=repo&utm_campaign=wd-selenium-sample).

Set TestMu AI `Username` and `Access Key` in environment variables.
  * For **Linux/macOS**:
  ```bash
  export LT_USERNAME="YOUR_USERNAME" export LT_ACCESS_KEY="YOUR ACCESS KEY"
  ```
  * For **Windows**:
  ```bash
  set LT_USERNAME="YOUR_USERNAME" set LT_ACCESS_KEY="YOUR ACCESS KEY"
  ```

## Run Your First Test

### Sample Test with WD

**Test Scenario:** This is a simple WD automation script that tests a sample to-do list app. The code marks two list items as done, adds a list item and then finally gives the total number of pending items as output. Check out the [single_test.js](https://github.com/LambdaTest/wd-selenium-sample/blob/master/tests/single_test.js) file to run your first sample test script. 

### Configuration of Your Test Capabilities

In `conf/single.conf.js`, you need to update your test capabilities. In this code, we are passing browser, browser version, and operating system information, along with TestMu AI Selenium grid capabilities via capabilities object. The capabilities object in the above code are defined as:
```js
capabilities: [{
    browserName: 'chrome',
    platform: 'Windows 10',
    version: 'latest',
    name: "single-test",
    build: "wd-lambdatest-sample",
    geoLocation : "US"
  }]
```
> You can generate capabilities for your test requirements with the help of our inbuilt **[Capabilities Generator tool](https://www.testmuai.com/capabilities-generator/?utm_source=github&utm_medium=repo&utm_campaign=wd-selenium-sample)**.

## Executing the Test

The tests can be executed in the terminal using the following command
```bash
npm run single
```
Your test results would be displayed on the test console (or command-line interface if you are using terminal/cmd) and on [TestMu AI automation dashboard](https://automation.lambdatest.com/build/?utm_source=github&utm_medium=repo&utm_campaign=wd-selenium-sample). TestMu AI Automation Dashboard will help you view all your text logs, screenshots and video recording for your entire automation tests.

## Running Your Parallel Tests Using WD Framework

### Setting up the Parallel Environment
You can go to `conf/parallel.conf.js` file in the repo to configure your parallel test cases: 
```js
user= process.env.LT_USERNAME || "<your username>",       // Your Username
key=  process.env.LT_ACCESS_KEY || "<your accessKey>",    // Your Access Key

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
    geoLocation : "US"
  },{
    browserName: 'chrome',
    platform: 'Windows 10',
    version: 'latest-1',
    geoLocation : "US"
  },{
    browserName: 'chrome',
    platform: 'Windows 10',
    version: 'latest-2',
    geoLocation : "US"
  }]
}

// Code to support common capabilities
exports.config.capabilities.forEach(function(caps){
  for(var i in exports.config.commonCapabilities) caps[i] = caps[i] || exports.config.commonCapabilities[i];
});
```
### Executing Parallel Tests with WD

To run parallel tests using **WD**, we would have to execute the below command in the terminal:
```bash
npm run parallel
```
Your test results would be displayed on the test console (or command-line interface if you are using terminal/cmd) and on [TestMu AI automation dashboard](https://automation.lambdatest.com/build/?utm_source=github&utm_medium=repo&utm_campaign=wd-selenium-sample).

## Testing Locally Hosted or Privately Hosted Projects

You can test your locally hosted or privately hosted projects with [TestMu AI Selenium grid cloud](https://www.testmuai.com/selenium-automation/?utm_source=github&utm_medium=repo&utm_campaign=wd-selenium-sample) using TestMu AI Tunnel app. All you would have to do is set up an SSH tunnel using TestMu AI Tunnel app and pass toggle `tunnel = True` via desired capabilities. TestMu AI Tunnel establishes a secure SSH protocol based tunnel that allows you in testing your locally hosted or privately hosted pages, even before they are made live.

>Refer our [TestMu AI Tunnel documentation](https://www.testmuai.com/support/docs/testing-locally-hosted-pages/) for more information.

Here’s how you can establish TestMu AI Tunnel.

>Download the binary file of:
* [TestMu AI Tunnel for Windows](https://downloads.lambdatest.com/tunnel/v3/windows/64bit/LT_Windows.zip)
* [TestMu AI Tunnel for Mac](https://downloads.lambdatest.com/tunnel/v3/mac/64bit/LT_Mac.zip)
* [TestMu AI Tunnel for Linux](https://downloads.lambdatest.com/tunnel/v3/linux/64bit/LT_Linux.zip)

Open command prompt and navigate to the binary folder.

Run the following command:
```bash
LT -user {user’s login email} -key {user’s access key}
```
So if your user name is lambdatest@example.com and key is 123456, the command would be:
```bash
LT -user lambdatest@example.com -key 123456
```
Once you are able to connect **TestMu AI Tunnel** successfully, you would just have to pass on tunnel capabilities in the code shown below :

**Tunnel Capability**
```js
const capabilities = {
        tunnel: true,
}
```

## Additional Links

* [Advanced Configuration for Capabilities](https://www.testmuai.com/support/docs/selenium-automation-capabilities/)
* [How to test locally hosted apps](https://www.testmuai.com/support/docs/testing-locally-hosted-pages/)
* [How to integrate TestMu AI with CI/CD](https://www.testmuai.com/support/docs/integrations-with-ci-cd-tools/)

## Tutorials 📙

Check out our latest tutorials on TestNG automation testing 👇

* [How To Use isDisplayed() In Selenium WebDriver](https://www.testmuai.com/blog/isdisplayed-in-selenium/?utm_source=github&utm_medium=repo&utm_campaign=wd-selenium-sample)
* [How To Find Element By Text In Selenium WebDriver](https://www.testmuai.com/blog/how-to-find-element-by-text-in-selenium/?utm_source=github&utm_medium=repo&utm_campaign=wd-selenium-sample)

## Documentation & Resources :books:
 
Visit the following links to learn more about TestMu AI's features, setup and tutorials around test automation, mobile app testing, responsive testing, and manual testing.

* [TestMu AI Documentation](https://www.testmuai.com/support/docs/?utm_source=github&utm_medium=repo&utm_campaign=wd-selenium-sample)
* [TestMu AI Blog](https://www.testmuai.com/blog/?utm_source=github&utm_medium=repo&utm_campaign=wd-selenium-sample)
* [TestMu AI Learning Hub](https://www.testmuai.com/learning-hub/?utm_source=github&utm_medium=repo&utm_campaign=wd-selenium-sample)    

## TestMu AI Community :busts_in_silhouette:

The [TestMu AI Community](https://community.testmuai.com/?utm_source=github&utm_medium=repo&utm_campaign=wd-selenium-sample) allows people to interact with tech enthusiasts. Connect, ask questions, and learn from tech-savvy people. Discuss best practises in web development, testing, and DevOps with professionals from across the globe 🌎

## What's New At TestMu AI ❓

To stay updated with the latest features and product add-ons, visit [Changelog](https://changelog.lambdatest.com/)

## 🚀 [LambdaTest is Now TestMu AI](https://www.testmuai.com/lambdatest-is-now-testmuai/)

👋 Welcome to TestMu AI, the next evolution of LambdaTest. As of January 2026, LambdaTest has officially rebranded to TestMu AI. We have evolved from a cross-browser testing cloud into a unified, AI-native quality engineering platform designed for the modern DevOps era.

Whether you have been part of the LambdaTest community for years or are just discovering TestMu AI, our mission remains the same: to help you ship faster with high-scale test execution, autonomous testing, and deep quality analytics.

**🔄 Our Rebrand Journey**

We chose the name TestMu AI to reflect our shift towards intelligent, autonomous testing. While our identity has changed, our core technology and commitment to the testing community stay the same.

**✨ Specialties**

- 🤖 AI-Native Test Execution (Formerly LambdaTest)
- ⚡ Autonomous Test Automation
- 🌐 Cross-Browser & Mobile Testing
- 📊 Unified Quality Intelligence

👉 Find [LambdaTest's New Home](https://www.testmuai.com/).