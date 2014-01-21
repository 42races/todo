define(["backbone", "messages"], function(Backbone, Message){
    var Bookmark = Backbone.Model.extend({
	urlRoot: "/bookmarks",
	defaults: {
	    permission: "private"
	},
	validate: function(attr, options) {
	    if ((attr.bm_url === "") || (attr.bm_url.match(/^\s$/))) {
		return(Message.blank_url);
	    }
	}
    });

    return Bookmark;
});
