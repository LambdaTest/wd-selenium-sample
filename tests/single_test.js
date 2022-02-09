module.exports = {
  name: 'Wd-selenium-sample Todo Test',
  run : function (browser) {
    return browser
      .get("https://lambdatest.github.io/sample-todo-app/").then(function(){
        browser.elementById('li1').clickElement().then(function(){
            console.log("Successfully clicked first list item.");
        });
        browser.elementById('li2').clickElement().then(function(){
            console.log("Successfully clicked second list item.");
          });

          browser.elementById('sampletodotext').sendKeys('Complete Lambdatest Tutorial\n').then(function(){
            browser.elementById('addbutton').clickElement().then(function(){
                  console.log("Successfully added a new task.");
              });
          });
      });
  }
};
