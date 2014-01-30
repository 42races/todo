define [
  'backbone',
  'text!templates/home.html'],
(Backbone, home_template) ->
  class HomeView extends Backbone.View
    el: '#body'
    render: =>
      t = _.template(home_template)
      @$el.html(t)
