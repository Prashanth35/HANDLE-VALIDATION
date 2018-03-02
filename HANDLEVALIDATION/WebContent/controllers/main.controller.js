sap.ui.define([
  'sap/m/MessagePopover',
  'sap/m/MessagePopoverItem',
  'sap/ui/core/mvc/Controller',
], function(MessagePopover, MessagePopoverItem, Controller) {
  "use strict";

  var oMessagePopover = new MessagePopover({
    items: {
      path: "message>/",
      template: new sap.m.MessagePopoverItem({
        description: "{message>description}",
        type: "{message>type}",
        title: "{message>message}"
      })
    }
  });

  oMessagePopover.setModel(sap.ui.getCore().getMessageManager().getMessageModel(), "message");

  return Controller.extend("handlevalidation.controller.main", {
    onInit: function() {},

    openMsgList: function(oEvent) {
    	debugger;
      oMessagePopover.openBy(oEvent.getSource());
    }
  });
});