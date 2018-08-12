webpackJsonp([84668095664495],{962:function(e,t){e.exports={data:{markdownRemark:{htmlAst:{type:"element",tagName:"div",properties:{},children:[{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Showing routes"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-sh"]},children:[{type:"text",value:"mix phx.routes        # 1.3+\nmix phoenix.routes    # 1.2 and below\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"See: "},{type:"element",tagName:"a",properties:{href:"https://hexdocs.pm/phoenix/Mix.Tasks.Phoenix.Routes.html"},children:[{type:"text",value:"Mix.Tasks.Phoenix.Routes"}]},{type:"text",value:" "},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"(hexdocs.pm)"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Single routes"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-elixir"]},children:[{type:"text",value:'get "/", PageController, :index\n'}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Also: "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"put"}]},{type:"text",value:" "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"post"}]},{type:"text",value:" "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"patch"}]},{type:"text",value:" "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"options"}]},{type:"text",value:" "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"delete"}]},{type:"text",value:" "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"head"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Resources"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-elixir"]},children:[{type:"text",value:'resources "/users", UserController\nresources "/users", UserController, only: [:index, :show]\nresources "/users", UserController, except: [:delete]\n'}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-elixir"]},children:[{type:"text",value:'resources "/users", UserController,\n  as: :person    # helper name (person_path)\n  name: :person  # ...?\n  param: :id     # name of parameter for this resource\n'}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Generates these routes:"}]},{type:"text",value:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"},{type:"element",tagName:"table",properties:{},children:[{type:"element",tagName:"thead",properties:{},children:[{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"th",properties:{},children:[{type:"text",value:"Method"}]},{type:"element",tagName:"th",properties:{},children:[{type:"text",value:"Path"}]},{type:"element",tagName:"th",properties:{},children:[{type:"text",value:"Helper"}]}]}]},{type:"element",tagName:"tbody",properties:{},children:[{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"GET"}]},{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"/users"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"user_path(:index)"}]}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"GET"}]},{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"/users/new"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"user_path(:new)"}]}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"GET"}]},{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"/users/:id"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"user_path(:show, user)"}]}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"GET"}]},{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"/users/:id/edit"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"user_path(:edit, user)"}]}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"POST"}]},{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"/users"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"user_path(:create, user)"}]}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"PATCH/PUT"}]},{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"/users/:id"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"user_path(:update, user)"}]}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"DELETE"}]},{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"/users/:id"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"user_path(:delete, user)"}]}]}]}]}]},{type:"comment",value:" {.-left-align} "},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"See: "},{type:"element",tagName:"a",properties:{href:"https://hexdocs.pm/phoenix/Phoenix.Router.html#resources/4"},children:[{type:"text",value:"resources/4"}]},{type:"text",value:" "},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"(hexdocs.pm)"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Path helpers"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-elixir"]},children:[{type:"text",value:"user_path(conn, :index)                 # → /users\nuser_path(conn, :show, 17)              # → /users/17\nuser_path(conn, :show, %User{id: 17})   # → /users/17\nuser_path(conn, :show, 17, admin: true) # → /users/17?admin=true\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-elixir"]},children:[{type:"text",value:'user_url(conn, :index) # → "http://localhost:4000/users"\n'}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-elixir"]},children:[{type:"text",value:"MyApp.Router.Helpers.user_path(MyApp.Endpoint, :index)\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"See: "},{type:"element",tagName:"a",properties:{href:"https://hexdocs.pm/phoenix/Phoenix.Router.html#module-helpers"},children:[{type:"text",value:"Helpers"}]},{type:"text",value:" "},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"(hexdocs.pm)"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Nested resources"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-elixir"]},children:[{type:"text",value:'resources "/users", UserController do\n  resources "/posts", PostController\nend\n'}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-elixir"]},children:[{type:"text",value:"user_post_path(:index, 17)     # → /users/17/posts\nuser_post_path(:show, 17, 12)  # → /users/17/posts/12\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"See: "},{type:"element",tagName:"a",properties:{href:"https://hexdocs.pm/phoenix/Phoenix.Router.html#module-scopes-and-resources"},children:[{type:"text",value:"Scopes and resources"}]},{type:"text",value:" "},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"(hexdocs.pm)"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Scoped routes"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-elixir"]},children:[{type:"text",value:'scope "/admin" do\n  pipe_through :browser\n  resources "/reviews", MyApp.Admin.ReviewController\nend\n# reviews_path() -> /admin/reviews\n'}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-elixir"]},children:[{type:"text",value:'scope "/admin", as: :admin do: ... end\n# admin_reviews_path() -> /admin/reviews\n'}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"See: "},{type:"element",tagName:"a",properties:{href:"https://hexdocs.pm/phoenix/Phoenix.Router.html#scope/2"},children:[{type:"text",value:"scope/2"}]},{type:"text",value:" "},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"(hexdocs.pm)"}]}]}]},frontmatter:{title:"Phoenix: Routing",category:"Elixir",intro:null}},relatedPages:{edges:[{node:{id:"SitePage /elixir",context:{nodePath:"/elixir",category:"Elixir",title:"Elixir"}}},{node:{id:"SitePage /phoenix-conn",context:{nodePath:"/phoenix-conn",category:"Elixir",title:"Phoenix: Plug.Conn"}}},{node:{id:"SitePage /ets",context:{nodePath:"/ets",category:"Elixir",title:"Erlang ETS"}}},{node:{id:"SitePage /phoenix-migrations",context:{nodePath:"/phoenix-migrations",category:"Elixir",title:"Phoenix: Ecto migrations"}}},{node:{id:"SitePage /phoenix@1.2",context:{nodePath:"/phoenix@1.2",category:"Elixir",title:"Phoenix 1.2"}}},{node:{id:"SitePage /phoenix",context:{nodePath:"/phoenix",category:"Elixir",title:"Phoenix"}}}]},topPages:{edges:[{node:{id:"SitePage /elixir",context:{nodePath:"/elixir",category:"Elixir",title:"Elixir"}}},{node:{id:"SitePage /es6",context:{nodePath:"/es6",category:"JavaScript",title:"ES2015+"}}},{node:{id:"SitePage /react",context:{nodePath:"/react",category:"React",title:"React.js"}}},{node:{id:"SitePage /vim",context:{nodePath:"/vim",category:"Vim",title:"Vim"}}},{node:{id:"SitePage /vimscript",context:{nodePath:"/vimscript",category:"Vim",title:"Vim scripting"}}},{node:{id:"SitePage /capybara",context:{nodePath:"/capybara",category:"Ruby libraries",title:"Capybara"}}}]},allPages:{totalCount:366}},pathContext:{node_id:"/home/rsc/Dev/@devhints/cheatsheets-ng/sheets/phoenix-routing.md absPath of file >>> MarkdownRemark",nodePath:"/phoenix-routing",nodeType:"sheet",title:"Phoenix: Routing",category:"Elixir",weight:-1,updated:null}}}});
//# sourceMappingURL=path---phoenix-routing-693038521d7c473a00cf.js.map