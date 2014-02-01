define [
  'require',
  'backbone',
  'views/tasks/index',
  'views/home/index',
  'views/user/sign_in',
  'views/user/sign_up',
  'views/user/forgot',
  'views/bookmarks/index',
  'views/notes/index'],
(require,Backbone, TaskListView, HomeView, LoginFormView, RegisterFormView, ForgotFormView, BookmarkListView, NoteListView) ->

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
    form = new LoginFormView()
    form.render()

  router.on 'route:register', ->
    form = new RegisterFormView()
    form.render()

  router.on 'route:forgot_password', ->
    form = new ForgotFormView()
    form.render()

  router.on 'route:tasks', ->
    taskList = new TaskListView()
    taskList.render()

  router.on 'route:bookmarks', ->
    bookmarkList = new BookmarkListView()
    bookmarkList.render()

  router.on 'route:notes', ->
    noteList = new NoteListView()
    noteList.render()