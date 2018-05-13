webpackJsonp([0xf01e00534de0],{966:function(e,t){e.exports={data:{markdownRemark:{htmlAst:{type:"root",children:[{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"in config/environments/development.rb:"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"# Source maps for Sass\nconfig.sass.debug_info = true\nconfig.sass.line_comments = false\n\n# Don't break apart\nconfig.assets.debug = false\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Partial locals"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"<%= render 'article', full: true %>\n<%= render 'article' %>\n\n<% if local_assigns[:full] %>\n  ...\n<% end %>\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"HTML in i18n"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:'en:\n  read_more_html: "read <b>more</b>..."\n'}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Exception handling:"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"# config/application.rb\nconfig.exceptions_app = self.routes\n\nget '/404', to: 'errors#not_found'\nget '/500', to: 'errors#server_error'\n\nclass ErrorsController\n  def not_found\n    render status: :not_found\n  end\n end\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Rails updating:"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"rake rails:update\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Distinct pluck:"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"Article.distinct.pluck('author')\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Relation#merge"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"scope :with_drafts, -> {\n  uniq.joins(:articles).merge(Article.draft)\n}\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Order"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"scope :recent, -> { order created_at: :desc }\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Group by month"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:".group(\"to_char(created_at, 'YYYY-MM')\")\n.group(\"to_char(created_at, 'YYYY-MM')\").count\n"}]}]}],data:{quirksMode:!1}},frontmatter:{title:"Rails tricks",category:"Rails",intro:null}},relatedPages:{edges:[{node:{id:"SitePage /arel",context:{nodePath:"/arel",category:"Rails",title:"Arel"}}},{node:{id:"SitePage /rails-features",context:{nodePath:"/rails-features",category:"Rails",title:"Rails features"}}},{node:{id:"SitePage /rails-forms",context:{nodePath:"/rails-forms",category:"Rails",title:"Form helpers"}}},{node:{id:"SitePage /rails-controllers",context:{nodePath:"/rails-controllers",category:"Rails",title:"Controllers"}}},{node:{id:"SitePage /rails-gems",context:{nodePath:"/rails-gems",category:"Rails",title:"Rails gems"}}},{node:{id:"SitePage /rails-helpers",context:{nodePath:"/rails-helpers",category:"Rails",title:"Helpers"}}}]},topPages:{edges:[{node:{id:"SitePage /elixir",context:{nodePath:"/elixir",category:"Elixir",title:"Elixir"}}},{node:{id:"SitePage /es6",context:{nodePath:"/es6",category:"JavaScript",title:"ES2015+"}}},{node:{id:"SitePage /react",context:{nodePath:"/react",category:"React",title:"React.js"}}},{node:{id:"SitePage /vim",context:{nodePath:"/vim",category:"Vim",title:"Vim"}}},{node:{id:"SitePage /vimscript",context:{nodePath:"/vimscript",category:"Vim",title:"Vim scripting"}}},{node:{id:"SitePage /capybara",context:{nodePath:"/capybara",category:"Ruby libraries",title:"Capybara"}}}]},allPages:{totalCount:364}},pathContext:{node_id:"/home/rsc/Dev/@devhints/cheatsheets-ng/sheets/rails-tricks.md absPath of file >>> MarkdownRemark",nodePath:"/rails-tricks",nodeType:"sheet",title:"Rails tricks",category:"Rails",weight:0}}}});
//# sourceMappingURL=path---rails-tricks-b41e32c998ed92c1dbe3.js.map