Rails.application.routes.draw do
  namespace :api do
    get '/stuffs', to: 'stuffs#index'
  end
end
