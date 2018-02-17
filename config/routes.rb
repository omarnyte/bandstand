Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:index, :show, :create]
    resources :bands, only: [:index, :show, :create]
    resources :genres, only: [:index, :show, :create]
    resources :albums, except: [:create, :edit]
    resources :follows, only: [:index, :create, :destroy]
    resources :followed_bands, only: [:show]
    resources :searches, only: [:index]
  end
end
