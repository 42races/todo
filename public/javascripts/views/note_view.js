define(
    [
	"backbone",
	"collections/notes",
	"text!templates/notes/index",
	"text!templates/notes/show",
	"text!templates/notes/form"
    ],
    function(Backbone, NoteList, index_template, show_template, form) {
	var NoteListView = Backbone.View.extend({
	    el: ".body",
	    render: function() {
		var that = this;
		var notes = new NoteList();
		notes.fetch({
		    success: function() {
			var template = _.template(index_template, { notes: notes.models, show_template: show_template });
			that.$el.html(template);
		    }
		});
	    },
	    events: {
		"click #new-note": "newNote"
	    },
	    newNote: function() {
		var template = _.template(form);
		this.$el.html(template);
	    }
	});

	return({ note_list_view: NoteListView });
    }
);
