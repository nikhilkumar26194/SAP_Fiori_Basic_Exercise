sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("form.project2.controller.simpleform", {
        onInit: function () {
            var oData =[{

            }]
         this.getView().SetModel(new JSONModel(oData),"persondetail");
        }
    });
});
