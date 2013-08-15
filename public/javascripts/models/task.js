define(["backbone", "messages"], function(Backbone, Message){
    var Task = Backbone.Model.extend({
	urlRoot: "/tasks",
	defaults: {
	    status: "pending"
	},
	validate: function(attr, options) {
	    if ((attr.item === "") || (attr.item.match(/^\s$/))) {
		return(Message.blank_item);
	    }
	},
        completed: function() {
            return(this.status === "completed");
        },
        pending: function() {
            return(this.status === "pending");
        }

    });

    return Task;
});
