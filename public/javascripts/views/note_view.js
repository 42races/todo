define(
    [
	"backbone",
        "models/note",
	"collections/notes",
	"text!templates/notes/index",
	"text!templates/notes/show",
	"text!templates/notes/form"
    ],
    function(Backbone, Note, NoteList, index_template, show_template, form) {
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
		"click #new-note": "newNote",
                "submit form": "createNote"
	    },
	    newNote: function() {
		var template = _.template(form);
		this.$el.html(template);
	    },
            createNote: function(evt) {
                var that = this;
                evt.preventDefault();
                console.log($(evt.currentTarget).serializeObject());
                var note_details = $(evt.currentTarget).serializeObject();
                var note = new Note(note_details);
                note.save(note_details, {
                    success: function(note) {
                        var template = _.template(show_template, { note: note });
                        that.$el.html(template);
                    }
                });
            }
	});

	return({ note_list_view: NoteListView });
    }
);
