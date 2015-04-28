/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('FreeSwitch.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    requires: [
        'Ext.window.MessageBox',
        'FreeSwitch.view.Form'
    ],

    alias: 'controller.main',

    init: function(){

    },

    addExtension: function() {
        var windowAdd = Ext.create("FreeSwitch.view.Form").show(); 	
    },
});
