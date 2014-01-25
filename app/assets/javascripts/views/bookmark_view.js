define(
    [
        "backbone",
        "models/bookmark",
        "collections/bookmarks",
        "text!templates/bookmarks/index.html",
        "text!templates/bookmarks/show.html",
        "text!templates/bookmarks/form.html"
    ],
    function(Backbone, Bookmark, BookmarkList, index_template, show_template, form) {
        var BookmarkListView = Backbone.View.extend({
            el: "#body",
            render: function() {
                var that = this;
                var bookmarks = new BookmarkList();
                bookmarks.fetch({
                    success: function() {
                        var template = _.template(index_template, {
                            bookmarks: bookmarks.models,
                            show_template: show_template
                        });
                        that.$el.html(template);
                    }
                });
            },
            events: {
                "click #new-bookmark": "newBookmark",
                "submit .bookmark-form": "saveBookmark",
                "click #cancel-bookmark": "cancelBookmark"
            },
            newBookmark: function(ev) {
                var template = _.template(form);
                $.modal(template());
            },
            saveBookmark: function(ev) {
                console.log("saving");
                return false;
            },
            cancelBookmark: function(ev) {
                ev.preventDefault();
                console.log("cancel clicked");
                $.modal.close();
                return false;
            }
        });

        return ({
            bookmark_list_view: BookmarkListView
        });
    }
);