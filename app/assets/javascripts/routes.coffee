define [
  'require',
  'backbone',
  'views/tasks/index',
  'views/home_view',
  'views/form_view',
  'views/bookmark_view',
  'views/notes/index'],
(require, Backbone, TaskListView, HomeView, FormView, BookmarkView, NoteListView) ->

  class AppRouter extends Backbone.Router
    routes:
      '': 'home'
      'login': 'login'
      'register': 'register'
      'forgot_password': 'forgot_password'
      'tasks': 'tasks'
      'bookmarks': 'bookmarks'
      'notes': 'notes'

  router = new AppRouter()

  router.on 'route:home', ->
    homePage = new HomeView()
    homePage.render()

  router.on 'route:login', ->
    LoginFormView = FormView.login_form_view
    form = new LoginFormView()
    form.render()

  router.on 'route:register', ->
    RegisterFormView = FormView.register_form_view
    form = new RegisterFormView()
    form.render()

  router.on 'route:forgot_password', ->
    ForgotFormView = FormView.forgot_form_view
    form = new ForgotFormView()
    form.render()

  router.on 'route:tasks', ->
    taskList = new TaskListView()
    taskList.render()

  router.on 'route:bookmarks', ->
    BookmarkListView = BookmarkView.bookmark_list_view
    bookmarkList = new BookmarkListView()
    bookmarkList.render()

  router.on 'route:notes', ->
    noteList = new NoteListView()
    noteList.render()