sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/type/Currency"
], function (Controller, JsonModel, Currency) {
    "use strict";

    return Controller.extend("sap.ui.demo.walkthrough.controller.InvoiceList", {
        /**
         * @override
         */
        onInit: function () {
            var oViewModel = new JsonModel({
                Currency: "EUR"
            });
            this.getView().setModel(oViewModel, "view");
        }
    });
});