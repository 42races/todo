define ['backbone',
  'messages'],
  (Backbone, Message) ->
    class Bookmark extends Backbone.Model
      urlRoot: '/bookmarks'
      defaults:
        permission: 'private'

      validate: (attr, options) ->
        if (attr.bm_url == '') || attr.bm_url.match(/^\s$/)
          Message.blank_url