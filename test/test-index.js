var index = require("../index"); //assuming that tabgroups refers to tabgroups.js

/*
 * This isn't a very good test given that show() is asynchronous.
 * How do you even test asynchronous things? 
 */
exports["test panel shows up"] = function(assert) {
  index.action_button.click(); 
  assert.equal(index.groups_panel.isShowing == true, true, "Action button works boi!!"); 
}

require("sdk/test").run(exports);
