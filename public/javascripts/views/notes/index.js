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
                        var template = _.template(index_template, {
                            notes: notes.models,
                            show_template: show_template
                        });
                        that.$el.html(template);
                    }
                });
            },
            events: {
                "click #new-note": "newNote",
                "submit form": "saveNote",
                "click #cancel-note": "cancel",
                "click .delete": "deleteNote",
                "click .edit": "editNote"
            },
            newNote: function() {
                var note = new Note();
                var template = _.template(form, {
                    note: note
                });
                this.$el.html(template);
            },
            editNote: function(ev) {
                var that = this;
                var li = $(ev.currentTarget).closest("li");
                var note = new Note({
                    id: li.data().id
                });
                note.fetch({
                    success: function(note) {
                        var template = _.template(form, {
                            note: note
                        });
                        that.$el.html(template);
                    }
                });
            },
            saveNote: function(ev) {
                ev.preventDefault();
                ev.stopPropagation()
                var that = this;
                var note_details = $(ev.currentTarget).serializeObject();
                var note = new Note(note_details);
                note.save(note_details);
                var v = new NoteListView()
                v.render();
            },
            deleteNote: function(ev) {
                var li = $(ev.currentTarget).parent().parent();
                var note = new Note({
                    id: li.data().id
                });
                note.destroy({
                    success: function() {
                        li.remove();
                    }
                });
            },
            cancel: function() {
                var v = new NoteListView()
                v.render()
            }
        });

        return NoteListView;
    }
);