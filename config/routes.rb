Todo::Application.routes.draw do
  resources :notes

  resources :bookmarks
  resources :tasks
end
