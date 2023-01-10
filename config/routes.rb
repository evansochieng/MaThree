Rails.application.routes.draw do
  
  # routes for resources
  resources :vehicles
  resources :routes
  resources :payments
  resources :drivers
  resources :commuters
  resources :orders

  # add routes for authentication
  post "/login", to: "sessions#create"
  get "/me", to: "commuters#autologin"
  delete "/logout", to: "sessions#destroy"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
