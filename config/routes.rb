Rails.application.routes.draw do
  
  # routes for resources
  resources :vehicles
  resources :routes
  resources :payments
  resources :drivers
  resources :commuters
  resources :orders
  resources :admins

  # add routes for authentication
  post "/login", to: "sessions#create"
  get "/me", to: "commuters#autologin"
  delete "/logout", to: "sessions#destroy"

  # add post method for mpesa payment
  post "/payment", to: "mpesa#initiate_payment"
  get "/payment", to: "mpesa#payment_response"

  # add route for finding order for logged in user
  get "/rides/:name", to: "orders#myorders"

  # add routes for admin authentication
  post "/adminlogin", to: "sessions#createadmin"
  get "/me", to: "admins#autologin"
  #delete "/logout", to: "sessions#destroy"
  

  # # generate a route to use as our websocket server endpoint
  # mount ActionCable.server => '/cable'

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
