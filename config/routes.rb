Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users

  get "/albums", to: 'homes#index'
  get "/albums/:id", to: 'homes#index'

  namespace :api do
    namespace :v1 do
      resources :albums, only: [:index, :show]
    end
  end
end
