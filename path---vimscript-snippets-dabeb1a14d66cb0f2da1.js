webpackJsonp([58016398989404],{1063:function(e,t){e.exports={data:{markdownRemark:{htmlAst:{type:"root",children:[{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Bind function to key and command"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"command! YoFunctionHere call s:YoFunctionHere()\nnnoremap <silent> x :call <SID>FunctionHere()<CR>\nfunction! s:FunctionHere()\nendfunction\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Call a function in insert mode"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"inoremap X <C-R>=script#myfunction()<CR>\ninoremap <F2> <C-R>=MyVimFunc()?'':''<CR>\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Checking plugins"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:'if globpath(&rtp, "plugin/commentary.vim") != ""\n'}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Autoload"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:'" autoload/hello.vim\nif exists("g:hello_loaded") | finish | endif\nlet g:hello_loaded=1\n\nfunction hello#method()\nendfunction\n\n" calling hello#method() will load only if autoload()\n'}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Misc"}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Version check"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:'if version < 704\n  echom "requires vim >= 7.4"\nendif\n'}]}]}],data:{quirksMode:!1}},frontmatter:{title:"Vimscript snippets",category:"Vim",intro:null}},relatedPages:{edges:[{node:{id:"SitePage /vim",context:{nodePath:"/vim",category:"Vim",title:"Vim"}}},{node:{id:"SitePage /vimscript",context:{nodePath:"/vimscript",category:"Vim",title:"Vim scripting"}}},{node:{id:"SitePage /tabular",context:{nodePath:"/tabular",category:"Vim",title:"Tabular"}}},{node:{id:"SitePage /projectionist",context:{nodePath:"/projectionist",category:"Vim",title:"Projectionist"}}},{node:{id:"SitePage /vim-digraphs",context:{nodePath:"/vim-digraphs",category:"Vim",title:"Vim digraphs"}}},{node:{id:"SitePage /vim-easyalign",context:{nodePath:"/vim-easyalign",category:"Vim",title:"Vim Easyalign"}}}]},topPages:{edges:[{node:{id:"SitePage /elixir",context:{nodePath:"/elixir",category:"Elixir",title:"Elixir"}}},{node:{id:"SitePage /es6",context:{nodePath:"/es6",category:"JavaScript",title:"ES2015+"}}},{node:{id:"SitePage /react",context:{nodePath:"/react",category:"React",title:"React.js"}}},{node:{id:"SitePage /vim",context:{nodePath:"/vim",category:"Vim",title:"Vim"}}},{node:{id:"SitePage /vimscript",context:{nodePath:"/vimscript",category:"Vim",title:"Vim scripting"}}},{node:{id:"SitePage /capybara",context:{nodePath:"/capybara",category:"Ruby libraries",title:"Capybara"}}}]},allPages:{totalCount:366}},pathContext:{node_id:"/home/rsc/Dev/@devhints/cheatsheets-ng/sheets/vimscript-snippets.md absPath of file >>> MarkdownRemark",nodePath:"/vimscript-snippets",nodeType:"sheet",title:"Vimscript snippets",category:"Vim",weight:0,updated:null}}}});
//# sourceMappingURL=path---vimscript-snippets-dabeb1a14d66cb0f2da1.js.map