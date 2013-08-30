define(["backbone", "messages"], function(Backbone, Message){
    var Note = Backbone.Model.extend({
	urlRoot: "/notes"
    });

    return Note;
});
