Rails.application.routes.draw do
  mount ActionCable.server => '/cable'
    root 'games#index'
      resources :games
      devise_for :users, :controllers => {sessions: 'sessions', registrations: 'registrations'}
end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
