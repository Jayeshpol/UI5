sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
], function (Controller, MessageToast, JSONModel, ResourceModel) {
    "use strict";

    return Controller.extend("<id>.controller.App", {
        /*onInit: function () {
            //set the data module in View
            var oData = { recipient: { name: "UI5" } };

            var oModel = new JSONModel(oData);

            this.getView().setModel(oModel);

            //Set i18Model
            var i18nModel = new ResourceModel({
                bundleName: "sap.ui.demo.walkthrough.i18n.i18n"
            });
            this.getView().setModel(i18nModel, "i18n");
        }, */

        onShowHello: function () {

            // read msg from i18n model
            var oBundle = this.getView().getModel("i18n").getResourceBundle();
            var sRecipient = this.getView().getModel().getProperty("/recipient/name");
            var sMsg = oBundle.getText("helloMsg", [sRecipient]);
            // show message
            MessageToast.show(sMsg);
        },
    });
});