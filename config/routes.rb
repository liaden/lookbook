Lookbook::Engine.routes.draw do
  mount Lookbook::Engine.websocket => Lookbook::Engine.cable.mount_path

  root to: "app#index", as: :home

  get "/preview/*path", to: "app#preview", as: :preview
  get "/*path", to: "app#show", as: :show
end
