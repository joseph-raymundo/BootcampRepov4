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
            //Comment code for now:
            //var oTextBundle = this.fnDisplayMsg("Add button pressed");
            //var sMsg = oTextBundle.getText("addButtonMsg");
            //  this.fnDisplayMsg(sMsg);

            // Instantiate the fragment

                // create dialog lazily
                if (!this.oDialog) {
                    // By using loadFragment, we are adding the fragment as a dependent to the View
                    // By doing so, we can use the functions inside the view's controller
                    this.oDialog = this.loadFragment({
                        name: "com.training.exer1josephraymundo.fragment.ProductDialog"
                    });
                } 
                this.oDialog.then(function(oDialog) {
                    oDialog.open();
                });
        },
        onCloseDialog: function (){
            this.getView().byId("idProductDialog").close();
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
            /* Start Replace
            var oInputFNameValue = this.getView().byId("idInptFName").getValue();
            var oInputLNameValue = this.getView().byId("idInptLName").getValue();

            // Check if first name is blank
            if (oInputFNameValue === "" || oInputLNameValue === ""){
                sap.m.MessageToast.show("Required Field is blank"); 
            }*/
                var oInputFName = this.getView().byId("idInptFName");
                var oInputLName = this.getView().byId("idInptLName");
                var oInputFNameValue = oInputFName.getValue();
                var oInputLNameValue = oInputLName.getValue();
                var oRouter = this.getOwnerComponent().getRouter();

                // Check if first name and last name is blank
                if (oInputFNameValue === "" || oInputLNameValue === ""){
                   
                // set value state to Error
                    oInputFName.setValueState("Error");
                    oInputLName.setValueState("Error");
                } else {
                    oInputFName.setValueState("None");
                    oInputLName.setValueState("None");

                    //Navigate to review page passing first
                    oRouter.navTo("RouteReviewPage", {
                        firstName: oInputFNameValue
                    });

                }
            //End Replace
        }
    } );
    
});