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
      'submit #bookmark-form': 'saveBookmark'
      'click #cancel-bookmark': 'cancelBookmark'
      'click .edit': 'editBookmark'
      'click .delete': 'deleteBookmark'

    newBookmark: (e) ->
      bookmark = new Bookmark()
      t = _.template(form, bookmark: bookmark)
      @$el.html(t)

    editBookmark: (e) =>
      li = $(e.currentTarget).closest('li')
      bookmark = new Bookmark(id: li.data().id)
      bookmark.fetch
        success: =>
          t = _.template(form, bookmark: bookmark)
          @$el.html(t)

    saveBookmark: (e) =>
      e.preventDefault()
      bookmark_details = $(e.currentTarget).serializeObject()
      bm = new Bookmark(bookmark_details)
      bm.save bookmark_details,
        success: ->
          Backbone.history.navigate('#/', trigger: true)
          Backbone.history.navigate('#/bookmarks', trigger: true)
        error: (data) ->
          cosole.log("error")

    cancelBookmark: (e) ->
      e.preventDefault()
      Backbone.history.navigate('#/bookmarks', trigger: true)

    deleteBookmark: (e) ->
      li = $(e.currentTarget).closest('li')
      bookmark = new Bookmark(id: li.data().id)
      bookmark.destroy
        success: ->
          li.remove()