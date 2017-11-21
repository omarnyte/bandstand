Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    root to: 'static_pages#root' 

    resources :bands, only: [:index, :show, :create]
    resource :session, only: [:create, :destroy]
  end

end
