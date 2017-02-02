Rails.application.routes.draw do default_url_options :host => "sim-app.com"
  get 'sessions/new'

  root 'static_pages#home'

  get 'static_pages/home'

  get  '/signup',  to: 'users#new'
  post '/signup',  to: 'users#create'
  get    '/login',   to: 'sessions#new'
  post   '/login',   to: 'sessions#create'
  delete '/logout',  to: 'sessions#destroy'
  resources :users do
    member do
      get :confirm_email
    end
  end

end
