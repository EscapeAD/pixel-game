Rails.application.routes.draw do
  mount ActionCable.server => '/cable'
  root 'games#index'
  post '/',       to: 'games#create'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
