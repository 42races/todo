define(
    [
	"backbone",
	"models/bookmark",
	"collections/bookmarks",
	"text!templates/bookmarks/index.html",
	"text!templates/bookmarks/show.html"
    ],
    function(Backbone, Bookmark, BookmarkList, index_template, show_template) {
	var BookmarkListView = Backbone.View.extend({
	    el: ".body",
	    render: function() {
		var that = this;
		var bookmarks = new BookmarkList();
		bookmarks.fetch({
		    success: function() {
			var template = _.template(index_template, { bookmarks: bookmarks.models, show_template: show_template });
			that.$el.html(template);
		    }
		});
	    }
	});

	return({ bookmark_list_view: BookmarkListView });
    }
);
