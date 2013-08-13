define(["views/task_view"], function(TaskView) {
    var Router = Backbone.Router.extend({
	routes: {
	    "": "tasks"
	}
    });

    var router = new Router();

    router.on("route:tasks", function() {
	var taskList = new TaskView();
	taskList.render();
    });
});
