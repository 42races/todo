Todo::Application.routes.draw do
  resources :notes
  resources :bookmarks
  resources :tasks
  resources :dashboards

  root 'dashboards#index'
end
