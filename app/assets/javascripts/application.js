require(["jquery", "backbone", "routes"], function($, Backbone) {
    $.ajaxPrefilter(function(options, originalOptions, jqXHR) {
        options.url = options.url + ".json";
    });

    $.fn.serializeObject = function() {
        var o = {};
        var a = this.serializeArray();
        $.each(a, function() {
            if (o[this.name] !== undefined) {
                if (!o[this.name].push) {
                    o[this.name] = [o[this.name]];
                }
                o[this.name].push(this.value || '');
            } else {
                o[this.name] = this.value || '';
            }
        });
        return o;
    };

    console.log("loading main...");
    Backbone.history.start();
});