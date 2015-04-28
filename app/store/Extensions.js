Ext.define("FreeSwitch.store.Extensions", {
	extend: "Ext.data.Store",
	model: "FreeSwitch.model.Extension",
	proxy:{
		type: "ajax",
		url: "php/getExtensions.php",
		reader:{
			type: "json",
			rootProperty:"extensions"
		}
	},
	autoLoad:true
});