sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
function (Controller ,JSONModel) {
    "use strict";

    return Controller.extend("gopro1.project1.controller.GOPRO", {
        onInit: function () {
            var oModel = JSONModel( );
            this.getView().setModel(oModel);
              
        }
    });
});
