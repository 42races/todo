define [
  'backbone',
  'models/bookmark',
  'collections/bookmarks',
  'text!templates/bookmarks/index.html',
  'text!templates/bookmarks/show.html',
  'text!templates/bookmarks/form.html'],
(Backbone, Bookmark, BookmarkList, index_template, show_template, form) ->
  class BookmarkListView  extends Backbone.View
    el: '#body'
    render: =>
      bookmarks = new BookmarkList()
      bookmarks.fetch
        success: =>
          t = _.template(index_template,
            bookmarks: bookmarks.models
            show_template: show_template)
          @$el.html(t)

    events:
      'click #new-bookmark': 'newBookmark'
      'submit .bookmark-form': 'saveBookmark'
      'click #cancel-bookmark': 'cancelBookmark'
      'click .edit': 'editBookmark'
      'click .delete': 'deleteBookmark'

    newBookmark: (ev) ->
      t = _.template(form);
      $.modal(t);

    editBookmark: (ev) ->
      li = $(ev.currentTarget).closest('li')
      bookmark = new Bookmark(id: li.data().id)
      bookmark.fetch
        success: ->
          t = _.template(form, bookmark: bookmark)
          $.modal(t)

    saveBookmark: (ev) ->
      console.log('saving');

    cancelBookmark: (ev) ->
      ev.preventDefault();
      console.log('cancel clicked');
      $.modal.close();

    deleteBookmark: (e) ->
      li = $(e.currentTarget).closest('li')
      bookmark = new Bookmark(id: li.data().id)
      bookmark.destroy
        success: ->
          li.remove()