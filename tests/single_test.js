module.exports = {
  name: 'Wd-selenium-sample Todo Test',
  run : async function (browser) {
    await browser.get("https://lambdatest.github.io/sample-todo-app/")
    let li1 = await browser.elementByName('li1')
    await browser.clickElement(li1)
    console.log("Successfully clicked first list item.")
    let li2 = await browser.elementByName('li2')
    await browser.clickElement(li2)
    console.log("Successfully clicked second list item.");
    let textElem = await browser.elementById('sampletodotext')
    await textElem.sendKeys('Complete Lambdatest Tutorial\n')
    console.log("Successfully added a new task.")
  }
};