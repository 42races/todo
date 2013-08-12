var K;
define(["text!templates/index.html"], function(indexTemplate) {
	var Router = Backbone.Router.extend({
		routes: {
			"": "todos"
		}
	});

	var Todo = Backbone.Model.extend({
		urlRoot: "/todos",
		defaults: {
			status: "pending"
		}
	});

	var TodoList = Backbone.Collection.extend({
		url: "/todos"
	});

	var TodoView = Backbone.View.extend({
		el: "#todo-container",
		render: function() {
			var that = this;
			var todos = new TodoList();
			todos.fetch({
				success: function(){
					var template = _.template(indexTemplate, { todos: todos.models });
					that.$el.html(template);
				}
			});
		},
		events: {
			"change #new_todo": "saveTodo"
		},
		saveTodo: function (ev) {
			var target = $(ev.currentTarget);
			var todo = new Todo({
				item: target.val(),
				status: "pending"
			});

			todo.save({ item: "cool", status: "pending"}, {
				success: function() {
					var todoList = new TodoView();
	  				todoList.render();
				}
			});
		}
	});

	var router = new Router();
	router.on("route:todos", function() {
		var todoList = new TodoView();
	  	todoList.render();
	});
});