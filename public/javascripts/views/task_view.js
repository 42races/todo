define(
    [
        "models/task",
        "collections/tasks",
        "text!templates/tasks/index.html",
        "text!templates/tasks/show.html",
	"text!templates/tasks/editor.html"
    ],
    function(Task, TaskList, index_template, show_template, editor_template){

        var TaskView = Backbone.View.extend({
            initialize: function(task) {
                this.task = task;
            },
            el: ".task-list",
            render: function() {
                var that = this;
                var task = this.task || new Task();
                task.fetch({
                    success: function(){
                        var template = _.template(show_template, { task: task });
                        that.$el.append(template);
                    }
                });
            }
        });

        var TaskListView = Backbone.View.extend({
	    el: ".body",
	    render: function() {
	        var that = this;
	        var tasks = new TaskList();
	        tasks.fetch({
		    success: function(){
		        var template = _.template(index_template, { tasks: tasks.models, show_template: show_template });
		        that.$el.html(template);
		    }
	        });
	    },
	    events: {
	        "change #new-task": "saveTask",
		"change #edit-task": "updateTask",
		"change .input-status": "updateStatus",
		"dblclick .item": "makeEditable",
		"click .delete": "deleteTask"
	    },
	    saveTask: function (ev) {
	        var target = $(ev.currentTarget);
	        var task = new Task({ item: target.val().trim() });

	        task.save(task.toJSON(), {
		    success: function(task) {
			target.val("");
		        var task_view = new TaskView(task);
		        task_view.render();
		    }
	        });
	    },
	    updateTask: function(ev) {
		var li = $(ev.currentTarget).parent().parent();
		var task = new Task({ id: li.data().id });
		task.fetch({ success: function() {
		    task.save({ item: $(ev.currentTarget).val() }, {
			success: function(task) {
			    var template = _.template(show_template, { task: task });
                            li.replaceWith(template);
			}
		    });
		}});
	    },
	    updateStatus: function(ev) {
		var li = $(ev.currentTarget).parent().parent();
                var status = (ev.currentTarget.checked) ? "completed" : "pending"
		var task = new Task({ id: li.data().id, status: status });

		task.save({ status: status }, {
		    success: function(task) {
                        var template = _.template(show_template, { task: task });
                        li.replaceWith(template);
		    },
                    validate: false
		});
	    },
	    makeEditable: function(ev) {
		var template = _.template(editor_template, { item: $(ev.currentTarget).html().trim() });
		$(ev.currentTarget).html(template);
	    },
	    deleteTask: function(ev) {
		var li = $(ev.currentTarget).parent();
		var target = $(ev.currentTarget);
		var task = new Task({ id: li.data().id });
		task.destroy({
		    success: function() {
			li.remove();
		    }
		});
	    }
        });
        return({ task_list_view: TaskListView, task_view: TaskView});
    }
);
