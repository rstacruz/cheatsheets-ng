webpackJsonp([0xb09f91febe8f],{1005:function(e,t){e.exports={data:{markdownRemark:{htmlAst:{type:"root",children:[{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Multiple resources ("},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"resources"}]},{type:"text",value:")"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"resources :books\n\n# PhotosController:\n# index  =>    GET /photos\n# new    =>    GET /photos/new\n# create =>   POST /photos/new\n# show   =>    GET /photos/:id\n# edit   =>    GET /photos/:id/edit\n# update =>    PUT /photos/:id\n# delete => DELETE /photos/:id\n#\n# Helpers:\n# new_book_path\n# book_path(id)\n# edit_book_path(id)\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Custom actions"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"resources :photos do\n  member { get 'preview' }       # /photo/1/preview\n  collection { get 'search' }    # /photos/search\n\n  get 'preview', on: :member     # (..same as the first)\nend\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Options"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"resources :photos,\n  path_names: { new: 'brand_new' }    # /photos/1/brand_new\n  path: 'postings'                    # /postings\n  only: :index\n  only: [:index, :show]\n  except: :show\n  except: [:index, :show]\n\n  shallow: true                       # also generate shallow routes\n  shalow_path: 'secret'\n  shallow_prefix: 'secret'\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Single resource ("},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"resource"}]},{type:"text",value:")"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"resource :coder\n\n# CodersController:\n# new    =>    GET /coder/new\n# create =>   POST /coder/new\n# show   =>    GET /coder\n# edit   =>    GET /coder/edit\n# update =>    PUT /coder\n# delete => DELETE /coder\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Matching ("},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"match"}]},{type:"text",value:")"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"match 'photo/:id' => 'photos#show'  # /photo/what-is-it\nmatch 'photo/:id', id: /[0-9]+/     # /photo/0192\nmatch 'photo/:id' => 'photos#show', constraints: { id: /[0-9]+/ }\nmatch 'photo/:id', via: :get\nmatch 'photo/:id', via: [:get, :post]\n\nmatch 'photo/*path' => 'photos#unknown'    # /photo/what/ever\n\n# params[:format] == 'jpg'\nmatch 'photos/:id' => 'photos#show', :defaults => { :format => 'jpg' }\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Get/post"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"get"}]},{type:"text",value:" is the same as "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"match via: :get"}]},{type:"text",value:"."}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"get 'photo/:id' => 'photos#show'\n# same as match 'photo/:id' => 'photos#show', via: :get\n\npost 'photo/:id' => 'photos#update'\n# same as match 'photo/:id' => 'photos#show', via: :post\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Redirection"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"match '/stories' => redirect('/posts')\nmatch '/stories/:name' => redirect('/posts/%{name}')\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Named"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"# logout_path\nmatch 'exit' => 'sessions#destroy', as: :logout\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Constraints"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"match '/', constraints: { subdomain: 'admin' }\n\n# admin.site.com/admin/photos\nnamespace 'admin' do\n  constraints subdomain: 'admin' do\n    resources :photos\n  end\nend\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Custom constraints"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:'class BlacklistConstraint\n  def initialize\n    @ips = Blacklist.retrieve_ips\n  end\n \n  def matches?(request)\n    @ips.include?(request.remote_ip)\n  end\nend\n \nTwitterClone::Application.routes.draw do\n  match "*path" => "blacklist#index",\n    :constraints => BlacklistConstraint.new\nend\n'}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Scopes"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"scope 'admin', constraints: { subdomain: 'admin' } do\n  resources ...\nend\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Rack middleware"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"# Yes, Sprockets is middleware\nmatch '/application.js' => Sprockets\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Route helpers"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"projects_path   # /projects\nprojects_url    # http://site.com/projects\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Default help text"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"# The priority is based upon order of creation:\n# first created -> highest priority.\n\n# Sample of regular route:\nmatch 'products/:id' => 'catalog#view'\n\n# Keep in mind you can assign values other than :controller and :action\n\n# Sample of named route:\nmatch 'products/:id/purchase' => 'catalog#purchase', :as => :purchase\n\n# This route can be invoked with purchase_url(:id => product.id)\n\n# Sample resource route (maps HTTP verbs to controller actions automatically):\nresources :products\n\n# Sample resource route with options:\nresources :products do\n  member do\n    get 'short'\n    post 'toggle'\n  end\n\n  collection do\n    get 'sold'\n  end\nend\n\n# Sample resource route with sub-resources:\nresources :products do\n  resources :comments, :sales\n  resource :seller\nend\n\n# Sample resource route with more complex sub-resources\nresources :products do\n  resources :comments\n  resources :sales do\n    get 'recent', :on => :collection\n  end\nend\n\n# Sample resource route within a namespace:\nnamespace :admin do\n  # Directs /admin/products/* to Admin::ProductsController\n  # (app/controllers/admin/products_controller.rb)\n  resources :products\nend\n\n# You can have the root of your site routed with \"root\"\n# just remember to delete public/index.html.\nroot :to => 'welcome#index'\n\n# See how all your routes lay out with \"rake routes\"\n\n# This is a legacy wild controller route that's not recommended for RESTful applications.\n# Note: This route will make all actions in every controller accessible via GET requests.\nmatch ':controller(/:action(/:id(.:format)))'\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"References"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"a",properties:{href:"http://guides.rubyonrails.org/routing.html"},children:[{type:"text",value:"Guides/Routing"}]}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"a",properties:{href:"http://api.rubyonrails.org/classes/ActionDispatch/Routing/Mapper.html"},children:[{type:"text",value:"ActionDispatch::Routing::Mapper"}]},{type:"text",value:"\n(See included modules)"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"}]}],data:{quirksMode:!1}},frontmatter:{title:"Routes",category:"Rails",intro:null}},relatedPages:{edges:[{node:{id:"SitePage /arel",context:{nodePath:"/arel",category:"Rails",title:"Arel"}}},{node:{id:"SitePage /rails-features",context:{nodePath:"/rails-features",category:"Rails",title:"Rails features"}}},{node:{id:"SitePage /rails-gems",context:{nodePath:"/rails-gems",category:"Rails",title:"Rails gems"}}},{node:{id:"SitePage /rails-forms",context:{nodePath:"/rails-forms",category:"Rails",title:"Form helpers"}}},{node:{id:"SitePage /rails-helpers",context:{nodePath:"/rails-helpers",category:"Rails",title:"Helpers"}}},{node:{id:"SitePage /rails-controllers",context:{nodePath:"/rails-controllers",category:"Rails",title:"Controllers"}}}]},topPages:{edges:[{node:{id:"SitePage /elixir",context:{nodePath:"/elixir",category:"Elixir",title:"Elixir"}}},{node:{id:"SitePage /es6",context:{nodePath:"/es6",category:"JavaScript",title:"ES2015+"}}},{node:{id:"SitePage /react",context:{nodePath:"/react",category:"React",title:"React.js"}}},{node:{id:"SitePage /vim",context:{nodePath:"/vim",category:"Vim",title:"Vim"}}},{node:{id:"SitePage /vimscript",context:{nodePath:"/vimscript",category:"Vim",title:"Vim scripting"}}},{node:{id:"SitePage /capybara",context:{nodePath:"/capybara",category:"Ruby libraries",title:"Capybara"}}}]},allPages:{totalCount:366}},pathContext:{node_id:"/home/rsc/Dev/@devhints/cheatsheets-ng/sheets/rails-routes.md absPath of file >>> MarkdownRemark",nodePath:"/rails-routes",nodeType:"sheet",title:"Routes",category:"Rails",weight:0,updated:null}}}});
//# sourceMappingURL=path---rails-routes-bfb5c5f84361996acb07.js.map