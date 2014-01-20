define(
    [
        "require",
        "backbone",
        "views/tasks/index",
        "views/home_view",
        "views/form_view",
        "views/bookmark_view",
        "views/note_view"
    ],
    function(require, Backbone, TaskListView, HomeView, FormView, BookmarkView, NoteView) {

        var Router = Backbone.Router.extend({
            routes: {
                "": "home",
                "login": "login",
                "register": "register",
                "forgot_password": "forgot_password",
                "tasks": "tasks",
                "bookmarks": "bookmarks",
                "notes": "notes"
            }
        });

        var router = new Router();

        router.on("route:home", function() {
            var homePage = new HomeView();
            homePage.render();
        });

        router.on("route:login", function() {
            var LoginFormView = FormView.login_form_view;
            var form = new LoginFormView();
            form.render();
        });

        router.on("route:register", function() {
            var RegisterFormView = FormView.register_form_view;
            var form = new RegisterFormView();
            form.render();
        });

        router.on("route:forgot_password", function() {
            var ForgotFormView = FormView.forgot_form_view;
            var form = new ForgotFormView();
            form.render();
        });

        router.on("route:tasks", function() {
            var taskList = new TaskListView();
            taskList.render();
        });

        router.on("route:bookmarks", function() {
            var BookmarkListView = BookmarkView.bookmark_list_view;
            var bookmarkList = new BookmarkListView();
            bookmarkList.render();
        });

        router.on("route:notes", function() {
            var NoteListView = NoteView.note_list_view;
            var noteList = new NoteListView();
            noteList.render();
        });

        return router;
    }
);