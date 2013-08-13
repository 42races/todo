define(["model/task.js"], function(Task){
    var TaskList = Backbone.Collection.extend({
	url: "/tasks"
    });

    return TaskList;
});
