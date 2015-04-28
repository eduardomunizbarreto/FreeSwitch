/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('FreeSwitch.view.main.Main', {
	extend: 'Ext.container.Container',
	requires: [
		'FreeSwitch.view.main.MainController',
		'FreeSwitch.view.main.MainModel'
	],

	xtype: 'app-main',
	
	controller: 'main',
	viewModel: {
		type: 'main'
	},

	layout: {
		type: 'border'
	},

	items: [{
		xtype: 'treepanel',
		rootVisible: false,
		root:{
			children:[
				{text:"Ramais", leaf: true, iconCls:"telephone"}
			]
		},
		bind: {
			title: '{name}'
		},
		region: 'west',
		width: 250,
		split: true,
	},{
		region: 'center',
		xtype: 'tabpanel',
		items:[{
			title: 'Ramais',
			xtype: "grid",
			store: "FreeSwitch.store.Extensions",
			columns:[
				{text:"Id", dataIndex:"id"},
				{text:"Nome", dataIndex:"nome", flex:1},
				{text:"Ramal", dataIndex:"ramal"},
				{text:"Senha", dataIndex:"senha", flex:1},
			],
			tbar:[
				{xtype:"button", text:"Adicionar", iconCls:"add", padding: 5, handler: "addExtension" },
				{xtype:"button", text:"Remover", iconCls:"delete", padding: 5}
			]
		}]
	}]
});
