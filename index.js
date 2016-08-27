var buttons = require("sdk/ui/button/action");

var action_button = buttons.ActionButton({
  id: "tab-groups-button", 
  label: "Tab Groups", 
  icon: "./icon-16.png", 
  onClick: function(){
    groups_panel.show();
  }
});

var groups_panel = require("sdk/panel").Panel({
  width: 180, //might need to change width and height
  height: 280, 
  contentURL: require("sdk/self").data.url("panel.html") 
});

exports.action_button = action_button;
exports.groups_panel = groups_panel;

