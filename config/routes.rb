Rails.application.routes.draw do
  resources :followers
  resources :likes
  resources :comments
  resources :bookmarks
  resources :posts
  resources :users

  post "/signup", to: "users#create"
  get "/me", to: "users#show"

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  get "/posts", to: "posts#index"
  get "user_posts/:id", to: "posts#user_posts"
  
  get "/post_comments/:id", to: "comments#post_comments"

end
