require.config({
    baseUrl: "/javascripts",
    paths: {
	"jquery": "lib/jquery",
	"underscore": "lib/underscore",
	"backbone": "lib/backbone",
	"text": "lib/text",
	"jquery.simplemodal": "lib/jquery.simplemodal"
    },
    shim: {
	"backbone": {
	    deps: ["underscore", "jquery"],
	    exports: "Backbone"
	},

	"underscore": {
	    exports: "_"
	},

	"text": {
	    deps: ["backbone", "underscore"]
	},

	"jquery.simplemodal" : {
	    deps: ["jquery"]
	}
    }
});

require(["jquery", "backbone", "routes", "jquery.simplemodal"], function($, Backbone) {
    $.ajaxPrefilter(function(options, originalOptions, jqXHR){
        options.url = options.url + ".json";
    });

    console.log("loading main...");
    Backbone.history.start();
});
