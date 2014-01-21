define(
    [
	"backbone"
    ],
    function(Backbone) {
	var NoteList = Backbone.Collection.extend({
	    url: "/notes"
	});

	return NoteList;
    }
);
