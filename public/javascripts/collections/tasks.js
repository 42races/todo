define(["backbone"], function(Backbone){
    var TaskList = Backbone.Collection.extend({
	url: "/tasks"
    });

    return TaskList;
});
