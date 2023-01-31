Rails.application.routes.draw do
  resources :followers
  resources :likes
  resources :comments
  resources :bookmarks
  resources :posts
  resources :users

end
