Ext.define("FreeSwitch.view.Form", {
    extend: 'Ext.window.Window',
    title: "Salvar Ramal",
    bodyPadding: 5,
    width: 300,
    modal: false,

    layout: "anchor",

    items: [{
        xtype: "form",
        url: "php/addExtension.php",
        defaultType: "textfield",
        items: [{
            fieldLabel: "Nome",
            name: "nome",
            allowBlank: false,
        }, {
            fieldLabel: "Ramal",
            name: "ramal",
            allowBlank: false
        }, {
            fieldLabel: "Senha",
            name: "senha",
            allowBlank: false,
            inputType: "password"
        }],
        buttons: [{
            text: 'Salvar',
            formBind: true, //only enabled once the form is valid
            handler: function() {
                var form = this.up('form').getForm();
                var windowAdd = this.up("window");
                if (form.isValid()) {
                    // Submit the Ajax request and handle the response
                    form.submit({
                        success: function(form, action) {
                            Ext.Msg.alert('Success', action.result.message, function(){
                            	windowAdd.close();
                            });

                        },
                        failure: function(form, action) {
                            Ext.Msg.alert('Failed', action.result ? action.result.message : 'No response');
                        }
                    });
                }
            }
        }]
    }]
});