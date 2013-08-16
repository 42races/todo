define(["backbone", "messages"], function(Backbone, Message){
    var Bookmark = Backbone.Model.extend({
	urlRoot: "/bookmarks",
	defaults: {
	    permission: "private"
	},
	validate: function(attr, options) {
	    if ((attr.url === "") || (attr.url.match(/^\s$/))) {
		return(Message.blank_url);
	    }
	}
    });

    return Bookmark;
});
