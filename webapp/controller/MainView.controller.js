sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], 
/**
 * @param {typeof sap.ui.core.mvc.Controller} Controller
 */
   function (Controller, MessageToast) {
    //"use strict";

    return Controller.extend("com.training.exer1josephraymundo.controller.MainView", {
        onInit() {
        },
        onAddItem: function (){
            var oTextBundle = this.fnDisplayMsg("Add button pressed");
            var sMsg = oTextBundle.getText("addButtonMsg");
                this.fnDisplayMsg(sMsg);
        },

        fnDisplayMsg: function (sMsg){
            MessageToast.show(sMsg);
        },
        onChangeMOP: function (oEvent) {
            var sSelectedKey = oEvent.getParameter("selectedItem").getProperty("key");
            var oMobileLabel = this.getView().byId("idLblPhone");
            var oMobileInput = this.getView().byId("idInputPhone");            
            var oCcNumLabel = this.getView().byId("idLblCcNum");
            var oCcNumInput = this.getView().byId("idInputCcNum");
            var sSelectedText = oEvent.getParameter("selectedItem").getText();

            if (sSelectedKey === "GCASH"){
                // show the mobile field, hide credit card field
                oMobileLabel.setVisible(true);
                oMobileInput.setVisible(true);
                oCcNumLabel.setVisible(false);
                oCcNumInput.setVisible(false);                
            } else if (sSelectedKey === "CC"){
                //Show credit card field, hide mobile field
                oMobileLabel.setVisible(false);
                oMobileInput.setVisible(false);
                oCcNumLabel.setVisible(true);
                oCcNumInput.setVisible(true);
            } else {
                //Hide all optional fields
                oMobileLabel.setVisible(false);
                oMobileInput.setVisible(false);
                oCcNumLabel.setVisible(false);
                oCcNumInput.setVisible(false);
            } 
            this.fnDisplayMsg(sSelectedText);
        },
        onPressCheckout: function (){
            var oInputFNameValue = this.getView().byId("idInptFName").getValue();
            var oInputLNameValue = this.getView().byId("idInptLName").getValue();

            // Check if first name is blank
            if (oInputFNameValue === "" || oInputLNameValue === ""){
                sap.m.MessageToast.show("Required Field is blank"); 
            }
        }
    } );
    
});