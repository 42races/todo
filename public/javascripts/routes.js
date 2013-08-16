define(
    [
	"require",
	"backbone",
	"views/task_view",
	"views/home_view",
	"views/form_view"
    ],
    function(require, Backbone, TaskView, HomeView, FormView) {

	console.log("router");
	var Router = Backbone.Router.extend({
	    routes: {
		"": "home",
		"login": "login",
		"register": "register",
		"forgot_password": "forgot_password",
		"tasks": "tasks"
	    }
	});

	var router = new Router();
	router.on("route:home", function(){
	    var homePage = new HomeView();
	    homePage.render();
	});

	router.on("route:login", function(){
	    var LoginFormView = FormView.login_form_view;
	    var form = new LoginFormView();
	    form.render();
	});

	router.on("route:register", function(){
	    var RegisterFormView = FormView.register_form_view;
	    var form = new RegisterFormView();
	    form.render();
	});

	router.on("route:forgot_password", function(){
	    var ForgotFormView = FormView.forgot_form_view;
	    var form = new ForgotFormView();
	    form.render();
	});


	router.on("route:tasks", function() {
	    var TaskListView = TaskView.task_list_view;
	    var taskList = new TaskListView();
	    taskList.render();
	});
    }
);
