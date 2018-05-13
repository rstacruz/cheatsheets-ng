webpackJsonp([0x712efc6d11c7],{970:function(e,t){e.exports={data:{markdownRemark:{htmlAst:{type:"element",tagName:"div",properties:{},children:[{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Basic RDoc format"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-rb"]},children:[{type:"text",value:"# Foo.\n#\n# @example\n#\n#   y\n#   g\n#\n# @param [String] param_name The xx and xx.\n#\n# @see http://url.com\n#\n# @return [true] if so\n"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Inline"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-markdown"]},children:[{type:"text",value:"*bold*\n_emphasized_\n+code+\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-markdown"]},children:[{type:"text",value:"http://www.link.com\nSee Models::User@Examples\n{Google}[http://google.com]\n"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Skip"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-rb"]},children:[{type:"text",value:"def input # :nodoc:\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-rb"]},children:[{type:"text",value:"module MyModule # :nodoc: all\n"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Definition lists"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-rb"]},children:[{type:"text",value:"# == Definition lists\n#\n# list::  hi.\n# +foo+:: parameterized\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-rb"]},children:[{type:"text",value:"# == Definition lists\n# [foo]   also\n# [bar]   like this\n"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Return types"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-rb"]},children:[{type:"text",value:"# @return [String]\n# @return [String, nil] the name\n"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Callseq"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-rb"]},children:[{type:"text",value:"# :call-seq:\n#   ARGF.readlines(sep=$/)     -> array\n#   ARGF.readlines(limit)      -> array\n#   ARGF.readlines(sep, limit) -> array\n#\n#   ARGF.to_a(sep=$/)     -> array\n#   ARGF.to_a(limit)      -> array\n#   ARGF.to_a(sep, limit) -> array\n"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Category"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-rb"]},children:[{type:"text",value:"# :category: Utilities\n"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Sections"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-rb"]},children:[{type:"text",value:"# :section: Expiry methods\n# methods relating to expiring\n\ndef expire!\ndef expired?\n...\n"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Using tomdoc"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-rb"]},children:[{type:"text",value:"# :markup: TomDoc\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Place this at the beginning of the file."}]},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Also see"}]},{type:"comment",value:" {.-one-column} "},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"http://rdoc.rubyforge.org/RDoc/Markup.html"},children:[{type:"text",value:"http://rdoc.rubyforge.org/RDoc/Markup.html"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{},children:[{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"a",properties:{href:"http://www.rubydoc.info/gems/yard/file/docs/GettingStarted.md"},children:[{type:"text",value:"http://www.rubydoc.info/gems/yard/file/docs/GettingStarted.md"}]}]},{type:"comment",value:" {.-also-see} "}]},{type:"text",value:"\n"}]}]},frontmatter:{title:"Rdoc",category:"Markup",intro:null}},relatedPages:{edges:[{node:{id:"SitePage /markdown",context:{nodePath:"/markdown",category:"Markup",title:"Markdown"}}},{node:{id:"SitePage /textile",context:{nodePath:"/textile",category:"Markup",title:"Textile"}}},{node:{id:"SitePage /kramdown",context:{nodePath:"/kramdown",category:"Markup",title:"Kramdown"}}},{node:{id:"SitePage /rst",context:{nodePath:"/rst",category:"Markup",title:"ReStructuredText"}}},{node:{id:"SitePage /tomdoc",context:{nodePath:"/tomdoc",category:"Markup",title:"Tomdoc"}}},{node:{id:"SitePage /yaml",context:{nodePath:"/yaml",category:"Markup",title:"Yaml"}}}]},topPages:{edges:[{node:{id:"SitePage /elixir",context:{nodePath:"/elixir",category:"Elixir",title:"Elixir"}}},{node:{id:"SitePage /es6",context:{nodePath:"/es6",category:"JavaScript",title:"ES2015+"}}},{node:{id:"SitePage /react",context:{nodePath:"/react",category:"React",title:"React.js"}}},{node:{id:"SitePage /vim",context:{nodePath:"/vim",category:"Vim",title:"Vim"}}},{node:{id:"SitePage /vimscript",context:{nodePath:"/vimscript",category:"Vim",title:"Vim scripting"}}},{node:{id:"SitePage /capybara",context:{nodePath:"/capybara",category:"Ruby libraries",title:"Capybara"}}}]},allPages:{totalCount:364}},pathContext:{node_id:"/home/rsc/Dev/@devhints/cheatsheets-ng/sheets/rdoc.md absPath of file >>> MarkdownRemark",nodePath:"/rdoc",nodeType:"sheet",title:"Rdoc",category:"Markup",weight:0}}}});
//# sourceMappingURL=path---rdoc-77ecdf0022903534f93e.js.map