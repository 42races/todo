define [
  'backbone',
  'text!templates/shared/register.html'
],
(Backbone, register_template) ->
  class RegisterFormView extends Backbone.View
    el: '#body'
    render: =>
      t = _.template(register_template)
      @$el.html(t)
