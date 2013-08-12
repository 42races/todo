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
    },

    "todo": {
      deps: ["backbone"]
    }
  }
});

require(["todo", "routes"], function(Todo) {
  console.log("loading main...");
  Backbone.history.start();
  Todo.initialize();
});