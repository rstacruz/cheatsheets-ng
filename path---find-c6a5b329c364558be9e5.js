webpackJsonp([93026980849093],{803:function(e,t){e.exports={data:{markdownRemark:{htmlAst:{type:"element",tagName:"div",properties:{},children:[{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Usage"}]},{type:"comment",value:" {.-prime} "},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:"find <path> <conditions> <actions>\n"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Conditions"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:'-name "*.c"\n'}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:"-user jonathan\n-nouser\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:"-type f            # File\n-type d            # Directory\n-type l            # Symlink\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:"-depth 2           # At least 3 levels deep\n-regex PATTERN\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:'-newer   file.txt\n-newerm  file.txt        # modified newer than file.txt\n-newerX  file.txt        # [c]hange, [m]odified, [B]create\n-newerXt "1 hour ago"    # [t]imestamp\n'}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Condition flow"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:'\\! -name "*.c"\n\\( x -or y \\)\n'}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Actions"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:"-exec rm {} \\;\n-print\n-delete\n"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Examples"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:"find . -name '*.jpg'\nfind . -name '*.jpg' -exec rm {} \\;\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:'find . -newerBt "24 hours ago"\n'}]}]}]},frontmatter:{title:"Find",category:"CLI",intro:null}},relatedPages:{edges:[{node:{id:"SitePage /cron",context:{nodePath:"/cron",category:"CLI",title:"Cron"}}},{node:{id:"SitePage /httpie",context:{nodePath:"/httpie",category:"CLI",title:"httpie"}}},{node:{id:"SitePage /adb",context:{nodePath:"/adb",category:"CLI",title:"adb (Android Debug Bridge)"}}},{node:{id:"SitePage /composer",context:{nodePath:"/composer",category:"CLI",title:"composer"}}},{node:{id:"SitePage /fish-shell",context:{nodePath:"/fish-shell",category:"CLI",title:"Fish shell"}}},{node:{id:"SitePage /rsync",context:{nodePath:"/rsync",category:"CLI",title:"Rsync"}}}]},topPages:{edges:[{node:{id:"SitePage /elixir",context:{nodePath:"/elixir",category:"Elixir",title:"Elixir"}}},{node:{id:"SitePage /es6",context:{nodePath:"/es6",category:"JavaScript",title:"ES2015+"}}},{node:{id:"SitePage /react",context:{nodePath:"/react",category:"React",title:"React.js"}}},{node:{id:"SitePage /vim",context:{nodePath:"/vim",category:"Vim",title:"Vim"}}},{node:{id:"SitePage /vimscript",context:{nodePath:"/vimscript",category:"Vim",title:"Vim scripting"}}},{node:{id:"SitePage /capybara",context:{nodePath:"/capybara",category:"Ruby libraries",title:"Capybara"}}}]},allPages:{totalCount:364}},pathContext:{node_id:"/home/rsc/Dev/@devhints/cheatsheets-ng/sheets/find.md absPath of file >>> MarkdownRemark",nodePath:"/find",nodeType:"sheet",title:"Find",category:"CLI",weight:0}}}});
//# sourceMappingURL=path---find-c6a5b329c364558be9e5.js.map