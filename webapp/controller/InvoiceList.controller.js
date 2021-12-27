sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/type/Currency",
    "../model/formatter"
], function (Controller, JsonModel, Currency, formatter) {
    "use strict";

    return Controller.extend("sap.ui.demo.walkthrough.controller.InvoiceList", {
        formatter: formatter,
        
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