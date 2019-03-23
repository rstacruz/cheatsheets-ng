---
title: Routes
category: Rails
tags: [WIP]
---

##

### Multiple resources (`resources`)

```rb
resources :books
```

```rb
# PhotosController:
# index  =>    GET /photos
# new    =>    GET /photos/new
# create =>   POST /photos/new
# show   =>    GET /photos/:id
# edit   =>    GET /photos/:id/edit
# update =>    PUT /photos/:id
# delete => DELETE /photos/:id
#
# Helpers:
# new_book_path
# book_path(id)
# edit_book_path(id)
```

### Custom actions

```rb
resources :photos do
  member { get 'preview' }       # /photo/1/preview
  collection { get 'search' }    # /photos/search
```

```rb
  get 'preview', on: :member     # (..same as the first)
end
```

### Options

```rb
resources :photos,
  path_names: { new: 'brand_new' }    # /photos/1/brand_new
  path: 'postings'                    # /postings
  only: :index
  only: [:index, :show]
  except: :show
  except: [:index, :show]

  shallow: true                       # also generate shallow routes
  shalow_path: 'secret'
  shallow_prefix: 'secret'
```

## Single resource (`resource`)

## Resource

```rb
resource :coder
```

```rb
# CodersController:
# new    =>    GET /coder/new
# create =>   POST /coder/new
# show   =>    GET /coder
# edit   =>    GET /coder/edit
# update =>    PUT /coder
# delete => DELETE /coder
```

## Matching (`match`)

```rb
match 'photo/:id' => 'photos#show'  # /photo/what-is-it
match 'photo/:id', id: /[0-9]+/     # /photo/0192
match 'photo/:id' => 'photos#show', constraints: { id: /[0-9]+/ }
match 'photo/:id', via: :get
match 'photo/:id', via: [:get, :post]
```

```rb
match 'photo/*path' => 'photos#unknown'    # /photo/what/ever
```

```rb
# params[:format] == 'jpg'
match 'photos/:id' => 'photos#show', :defaults => { :format => 'jpg' }
```

### Get/post

```rb
get 'photo/:id' => 'photos#show'
# same as match 'photo/:id' => 'photos#show', via: :get
```

```rb
post 'photo/:id' => 'photos#update'
# same as match 'photo/:id' => 'photos#show', via: :post
```

`get` is the same as `match via: :get`.

### Redirection

```rb
match '/stories' => redirect('/posts')
match '/stories/:name' => redirect('/posts/%{name}')
```

Use `redirect()` to make redirections.

### Named

```rb
# logout_path
match 'exit' => 'sessions#destroy', as: :logout
```

Use `as:` to name routes.

### Constraints

```rb
match '/', constraints: { subdomain: 'admin' }
```

```rb
# admin.site.com/admin/photos
namespace 'admin' do
  constraints subdomain: 'admin' do
    resources :photos
  end
end
```

Use `constraints:` to add constraints.

### Custom constraints

```rb
class BlacklistConstraint
  def initialize
    @ips = Blacklist.retrieve_ips
  end

  def matches?(request)
    @ips.include?(request.remote_ip)
  end
end
```

```rb
TwitterClone::Application.routes.draw do
  match "*path" => "blacklist#index",
    :constraints => BlacklistConstraint.new
end
```

### Scopes

```rb
scope 'admin', constraints: { subdomain: 'admin' } do
  resources ...
end
```

### Rack middleware

```rb
# Yes, Sprockets is middleware
match '/application.js' => Sprockets
```

### Route helpers

```rb
projects_path   # /projects
projects_url    # http://site.com/projects
```

### Default help text

```rb
# The priority is based upon order of creation:
# first created -> highest priority.
```

```rb
# Sample of regular route:
match 'products/:id' => 'catalog#view'
```

```rb
# Keep in mind you can assign values other than :controller and :action
```

```rb
# Sample of named route:
match 'products/:id/purchase' => 'catalog#purchase', :as => :purchase
```

```rb
# This route can be invoked with purchase_url(:id => product.id)
```

```rb
# Sample resource route (maps HTTP verbs to controller actions automatically):
resources :products
```

```rb
# Sample resource route with options:
resources :products do
  member do
    get 'short'
    post 'toggle'
  end
```

```rb
  collection do
    get 'sold'
  end
end
```

```rb
# Sample resource route with sub-resources:
resources :products do
  resources :comments, :sales
  resource :seller
end
```

```rb
# Sample resource route with more complex sub-resources
resources :products do
  resources :comments
  resources :sales do
    get 'recent', :on => :collection
  end
end
```

```rb
# Sample resource route within a namespace:
namespace :admin do
  # Directs /admin/products/* to Admin::ProductsController
  # (app/controllers/admin/products_controller.rb)
  resources :products
end
```

```rb
# You can have the root of your site routed with "root"
# just remember to delete public/index.html.
root :to => 'welcome#index'
```

```rb
# See how all your routes lay out with "rake routes"
```

```rb
# This is a legacy wild controller route that's not recommended for RESTful applications.
# Note: This route will make all actions in every controller accessible via GET requests.
match ':controller(/:action(/:id(.:format)))'
```

### References

- [Guides/Routing](http://guides.rubyonrails.org/routing.html)

- [ActionDispatch::Routing::Mapper](http://api.rubyonrails.org/classes/ActionDispatch/Routing/Mapper.html)
  (See included modules)
