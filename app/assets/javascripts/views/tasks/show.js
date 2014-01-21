define(
    [
        "models/task",
        "collections/tasks",
        "text!templates/tasks/show.html",
    ],
    function(Task, TaskList, show_template) {

        var TaskView = Backbone.View.extend({
            initialize: function(task) {
                this.task = task;
            },
            el: ".task-list",
            render: function() {
                var that = this;
                var task = this.task || new Task();
                task.fetch({
                    success: function() {
                        var template = _.template(show_template, {
                            task: task
                        });
                        that.$el.append(template);
                    }
                });
            }
        });

        return TaskView
    }
);