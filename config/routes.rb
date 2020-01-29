Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users

  get "/albums", to: 'homes#index'
  get "/albums/:id", to: 'homes#index'
  get "/albums/new", to: 'homes#index'

  namespace :api do
    namespace :v1 do
      resources :albums, only: [:index, :show, :create]
    end
  end
end
