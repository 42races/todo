define [
  'backbone',
  'text!templates/shared/login.html'
],
(Backbone, login_template) ->
  class LoginFormView extends Backbone.View
    el: '#body'
    render: =>
      t = _.template(login_template)
      @$el.html(t)
