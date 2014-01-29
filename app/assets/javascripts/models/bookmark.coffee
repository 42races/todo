define ['backbone',
  'messages'],
  (Backbone, Message) ->
    class Bookmark extends Backbone.Model
      urlRoot: '/bookmarks'
      defaults:
        permission: 'public'

      # validate: (attr, options) ->
      #   if (attr.bm_url == '') || attr.bm_url.match(/^\s$/)
      #     return Message.blank_url