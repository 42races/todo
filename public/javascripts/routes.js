define(
    [
	"require",
	"backbone",
	"views/task_view",
	"views/home_view"
    ],
    function(require, Backbone, TaskView, HomeView) {

	console.log("router");
	var Router = Backbone.Router.extend({
	    routes: {
		"": "home",
		"tasks": "tasks"
	    }
	});

	var TaskListView = TaskView.task_list_view;

	var router = new Router();
	router.on("route:home", function(){
	    var homePage = new HomeView();
	    homePage.render();
	});

	router.on("route:tasks", function() {
	    var taskList = new TaskListView();
	    taskList.render();
	});
    }
);
