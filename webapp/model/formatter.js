sap.ui.define([], function () {
    "use strict";
    return {
        statusText: function (sstatus) {
            var resourceBundle = this.getView().getModel("i18n").getResourceBundle();
            switch (sstatus) {
                case "A":
                    return resourceBundle.getText("invoiceStatusA");
                case "B":
                    return resourceBundle.getText("invoiceStatusB");
                case "C":
                    return resourceBundle.getText("invoiceStatusC");
                case "Foo":
                    return resourceBundle.getText("invoiceStatusFoo");
                default:
                    return sStatus;
            }
        }
    }
});
