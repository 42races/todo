define(
    ["backbone", "text!templates/home"],
    function(Backbone, home_template) {
	var HomeView = Backbone.View.extend({
	    el: "body",
	    render: function() {
		var that = this;
		var template = _.template(home_template);
		that.$el.html(template);
	    }
	});

	return HomeView;
    }
);
