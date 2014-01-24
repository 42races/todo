define [
  'backbone',
  'models/note',
  'collections/notes',
  'text!templates/notes/index.html',
  'text!templates/notes/show.html',
  'text!templates/notes/form.html'],
(Backbone, Note, NoteList, index_template, show_template, form) ->
  class NoteListView extends Backbone.View
    el: '.body'

    render: =>
      notes = new NoteList()
      notes.fetch
        success: =>
          t = _.template(index_template, notes: notes.models, show_template: show_template)
          @$el.html(t)

    events:
      'click #new-note': 'newNote'
      'submit form': 'saveNote'
      'click #cancel-note': 'cancel'
      'click .delete': 'deleteNote'
      'click .edit': 'editNote'
      'change #note-permission': 'changePermission'

    newNote: =>
      note = new Note()
      t = _.template(form, note: note)
      @$el.html(t)

    editNote: (e) =>
      li = $(e.currentTarget).closest('li')
      note = new Note(id: li.data().id)
      note.fetch
        success: (note) =>
          t = _.template(form, note: note)
          @$el.html(t)

    saveNote: (e) =>
      e.preventDefault()
      e.stopPropagation()
      note_details = $(e.currentTarget).serializeObject()
      note = new Note(note_details)
      note.save note_details
      Backbone.history.navigate('#/notes', trigger: true)

    deleteNote: (e) =>
      e.preventDefault()
      e.stopPropagation()
      li = $(e.currentTarget).closest('li')
      note = new Note(id: li.data().id)
      note.destroy
        success: ->
          li.remove()

    cancel: (e) =>
      e.preventDefault()
      e.stopPropagation()
      Backbone.history.navigate('#/notes', trigger: true)

    changePermission: (e) =>
      cb = $(e.currentTarget)
      if cb.is(':checked')
        cb.val('private')
      else
        cb.val('public')
