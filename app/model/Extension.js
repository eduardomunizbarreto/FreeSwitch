Ext.define("FreeSwitch.model.Extension", {
	extend: "Ext.data.Model",
	fields:[
		{text:"id", type: "int"},
		{text:"nome", type: "string"},
		{text:"ramal", type: "int"},
		{text:"senha", type: "string"},
	]
});