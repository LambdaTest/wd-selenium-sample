import * as chai from "chai";
import chaiAsPromised from "chai-as-promised"; // ✅ default export
import wd from "wd";
import colors from "colors";
import configModule from "../conf/single.conf.js"; // ✅ adjust if needed

const { config } = configModule;

// --- Chai setup ---
chai.use(chaiAsPromised);
chai.should();
chaiAsPromised.transferPromiseness = wd.transferPromiseness;

// --- Add custom wd chain method ---
wd.addPromiseChainMethod("onQuit", function (done) {
  if (done) done();
  return this;
});

async function runOnLambdaTest(caps, test) {
  console.log(`Starting Test: ${test.name.green}\n`);

  const username = process.env.LT_USERNAME || config.user;
  const accessKey = process.env.LT_ACCESS_KEY || config.key;

  const browser = wd.promiseChainRemote(
    config.seleniumHost,
    config.seleniumPort,
    username,
    accessKey
  );

  browser.on("status", info => console.log(info.cyan));
  browser.on("command", (eventType, command, response) =>
    console.log(" >", eventType.green, command, (response || "").grey)
  );
  browser.on("http", (meth, path, data) =>
    console.log(" >", meth.yellow, path, (data || "").grey)
  );

  await test.run(browser.init(caps));
  await browser.quit();
}

// --- Load and execute test ---
const testModule = await import(config.test);
const test = testModule.default || testModule; // ✅ handles both default and named exports

for (const caps of config.capabilities) {
  await runOnLambdaTest(caps, test);
}
