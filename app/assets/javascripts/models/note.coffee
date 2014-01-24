define ['backbone',
'messages'],
(Backbone, Message) ->
  class Note extends Backbone.Model
    urlRoot: '/notes'
    defaults:
      permission: 'public'