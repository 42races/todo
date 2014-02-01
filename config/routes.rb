Todo::Application.routes.draw do
  devise_for :users
  resources :notes
  resources :bookmarks
  resources :tasks
  resources :dashboards

  root 'dashboards#index'
end
