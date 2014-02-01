define [
  'backbone',
  'text!templates/shared/forgot.html'
],
(Backbone, forgot_template) ->
  class ForgotFormView extends Backbone.View
    el: '#body'
    render: =>
      t = _.template(forgot_template)
      @$el.html(t)
