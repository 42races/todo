define(function(){
    var Task = Backbone.Model.extend({
	urlRoot: "/tasks",
	defaults: {
	    status: "pending"
	}
    });

    return Task;
});
