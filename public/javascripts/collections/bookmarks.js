define(
    [
	"backbone"
    ],
    function(Backbone) {
	var BookmarkList = Backbone.Collection.extend({
	    url: "/bookmarks"
	});

	return BookmarkList;
    }
);
