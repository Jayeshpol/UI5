sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/type/Currency",
    "../model/formatter",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], function (Controller, JSONModel, Currency, formatter, Filter, FilterOperator) {
    "use strict";

    return Controller.extend("sap.ui.demo.walkthrough.controller.InvoiceList", {
        formatter: formatter,

        /**
         * @override
         */
        onInit: function () {
            var oViewModel = new JSONModel({
                Currency: "EUR"
            });
            this.getView().setModel(oViewModel, "view");
        },
        onFilterInvoices : function (oEvent) {

            // build filter array
            var aFilter = [];
            var sQuery = oEvent.getParameter("query");
            if (sQuery) {
                aFilter.push(new Filter("ProductName", FilterOperator.Contains, sQuery));
            }

            // filter binding
            var oList = this.byId("invoiceList");
            var oBinding = oList.getBinding("items");
            oBinding.filter(aFilter);
		}
    });
});