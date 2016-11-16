Rails.application.routes.draw do
  mount ActionCable.server => '/cable'

      resources :games
      devise_for :users

end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
