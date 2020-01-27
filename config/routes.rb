Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users

  get "/albums", to: 'homes#index'
end
