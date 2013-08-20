require.config({
  baseUrl: "/javascripts",
  paths: {
    "jquery": "lib/jquery",
    "underscore": "lib/underscore",
    "backbone": "lib/backbone",
    "text": "lib/text"
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
    }
  }
});

require(["jquery", "backbone", "routes"], function($, Backbone) {
    $.ajaxPrefilter(function(options, originalOptions, jqXHR){
        options.url = options.url + ".json";
    });

    console.log("loading main...");
    Backbone.history.start();
});
