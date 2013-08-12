define(["text!templates/index.html"], function(indexTemplate) {
	var Router = Backbone.Router.extend({
		routes: {
			"": "tasks"
		}
	});

	var Task = Backbone.Model.extend({
		urlRoot: "/tasks",
		defaults: {
			status: "pending"
		}
	});

	var TaskList = Backbone.Collection.extend({
		url: "/tasks"
	});

	var TaskView = Backbone.View.extend({
		el: "body",
		render: function() {
			var that = this;
			var tasks = new TaskList();
			tasks.fetch({
				success: function(){
					var template = _.template(indexTemplate, { tasks: tasks.models });
					that.$el.html(template);
				}
			});
		},
		events: {
			"change #new_task": "saveTask"
		},
		saveTask: function (ev) {
			var target = $(ev.currentTarget);
			var task = new Task({
				item: target.val(),
				status: "pending"
			});

			task.save(task.toJSON(), {
				success: function() {
					var taskList = new TaskView();
	  				taskList.render();
				}
			});
		}
	});

	var router = new Router();
	router.on("route:tasks", function() {
		var taskList = new TaskView();
	  	taskList.render();
	});
});