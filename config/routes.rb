Rails.application.routes.draw do
  
  resources :vehicles
  resources :routes
  resources :payments
  resources :drivers
  resources :commuters
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
