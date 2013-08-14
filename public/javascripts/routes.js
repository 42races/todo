define(["require", "backbone", "views/task_view"], function(require, Backbone, View) {

    console.log("router");
    var Router = Backbone.Router.extend({
	routes: {
	    "": "tasks"
	}
    });

    var TaskListView = View.task_list_view;

    var router = new Router();
    router.on("route:tasks", function() {
	var taskList = new TaskListView();
	taskList.render();
    });
});
