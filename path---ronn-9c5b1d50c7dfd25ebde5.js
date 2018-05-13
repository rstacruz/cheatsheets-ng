webpackJsonp([0x77bcdfede045],{981:function(e,t){e.exports={data:{markdownRemark:{htmlAst:{type:"element",tagName:"div",properties:{},children:[{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Getting started"}]},{type:"comment",value:" {.-left-reference} "},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Installation"}]},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Installation"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:"gem install ronn\n"}]}]},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Usage"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:"ronn foo.1.md        # creates foo.1.html\nronn -r foo.1.md     # creates foo.1 (--roff)\nronn -r -h foo.1.md  # builds --roff and --html\nronn -m foo.1.md     # view as manpage\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Ronn is a Ruby gem."}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Basic template"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-markdown"]},children:[{type:"text",value:"name(1) -- short, single-sentence description\n=============================================\n\n## SYNOPSIS\n\n`name` [<optional>...] <flags>\n\n## DESCRIPTION\n\nA normal paragraph. This can span multiple lines and is terminated with two\nor more line endings just like Markdown.\n\n## OPTIONS\n\n * `-h`, `--help` :\n   Displays the help screen.\n\n * `--version` : \n   Displays version information.\n\n## EXAMPLES\n\nIndent examples with 4 spaces.\n\n    $ ls\n    $ ls -la\n\n## COPYRIGHT\n\n**PROJECTNAME** is copyright (c) 2015, Rico Sta. Cruz. Released under the MIT\nlicense.\n\n## SEE ALSO\n\nronn-format(7), ronn(1)\n"}]}]},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Formatting tags"}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Inline"}]},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Bold"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"`code`\n**strong**\n"}]}]},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Underline"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"<variable>\n_emphasis_\n*emphasis*\n"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Linking"}]},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Manual references"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"sh(1)\nmarkdown(7)\n"}]}]},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Sections"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"[STANDARDS][]\n[SEE ALSO][]\n[DIFFERENT TEXT][#SEE-ALSO]\n"}]}]},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"URL links"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"[URL link](http://github.com/rstacruz)\n<http://github.com>\n"}]}]},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Frequently-used sections"}]},{type:"comment",value:" {.-one-column} "},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Sections"}]},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"## SYNOPSIS"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"## DESCRIPTION"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"## OPTIONS"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"## SYNTAX"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"## ENVIRONMENT"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"## RETURN VALUES"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"## STANDARDS"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"## SECURITY CONSIDERATIONS"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"## BUGS"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"## HISTORY"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"## AUTHOR"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"## COPYRIGHT"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{},children:[{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"## SEE ALSO"}]}]},{type:"comment",value:" {.-four-column} "}]},{type:"text",value:"\n"}]},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Other CLI options"}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Options"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:"--pipe                       # write to stdout\n--server, -S                 # serve in http://localhost:1207\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:"--html, -5                   # default\n--fragment, -f               # html without header/title/footer\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:"--style=toc,80c              # toc (table of contents)\n                             # 80c (use 80c instead of 100c)\n                             # print (include print stylesheet)\n                             # dark\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:'--manual="MY MANUAL"         # shown on top-center\n--organization="RONN 0.7.0"  # shown on bottom-left\n--date="YYYY-MM-DD"          # shown on bottom-center\n'}]}]},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Sections"}]},{type:"text",value:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"},{type:"element",tagName:"table",properties:{},children:[{type:"element",tagName:"thead",properties:{},children:[{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"th",properties:{},children:[{type:"text",value:"Section"}]},{type:"element",tagName:"th",properties:{},children:[{type:"text",value:"Description"}]}]}]},{type:"element",tagName:"tbody",properties:{},children:[{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"1"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"General commands"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"2"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"System calls"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"3"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"C standard lib"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"4"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"Special files (/dev) and drivers"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"5"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"File formats"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"6"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"Games"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"7"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"Misc"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"8"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"System administration commands and procedures"}]}]}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"See "},{type:"element",tagName:"a",properties:{href:"http://www.december.com/unix/ref/mansec.html"},children:[{type:"text",value:"Man page sections"}]},{type:"text",value:" (december.com)."}]},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Using with npm"}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"npm scripts"}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Place manual files in "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"man/xxx.1.md"}]},{type:"text",value:", then in package.json:"}]},{type:"comment",value:" {.-setup} "},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-json"]},children:[{type:"text",value:'"scripts": {\n  "prepublish": "npm run build-man",\n  "build-man": "if which ronn; then ronn man/*.md --html --roff --style=toc,80c --organization=\\"@rstacruz\\"; fi"\n},\n"directories": {\n  "man": "man"\n}\n'}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"marked-man"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"npm install -g marked-man\nmarked-man foo.1.md > foo.1\n"}]}]},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Differences"}]},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"No definition lists"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Can't use "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"<br>"}]}]},{type:"text",value:"\n"}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"See "},{type:"element",tagName:"a",properties:{href:"https://github.com/kapouer/marked-man"},children:[{type:"text",value:"marked-man"}]},{type:"text",value:"."}]}]},frontmatter:{title:"Ronn",category:"Ruby libraries",intro:"Ronn generates Man pages. See [ronn(1)](http://rtomayko.github.io/ronn/ronn.1.html), [ronn-format(7)](http://rtomayko.github.com/ronn/ronn-format.7.html). Also see it on GitHub: [rtomayko/ronn](https://github.com/rtomayko/ronn).\n"}},relatedPages:{edges:[{node:{id:"SitePage /capybara",context:{nodePath:"/capybara",category:"Ruby libraries",title:"Capybara"}}},{node:{id:"SitePage /factory_bot",context:{nodePath:"/factory_bot",category:"Ruby libraries",title:"Factory Bot"}}},{node:{id:"SitePage /meta-tags",context:{nodePath:"/meta-tags",category:"Ruby libraries",title:"Meta-tags gem"}}},{node:{id:"SitePage /slim",context:{nodePath:"/slim",category:"Ruby libraries",title:"Slim"}}},{node:{id:"SitePage /chunky_png",context:{nodePath:"/chunky_png",category:"Ruby libraries",title:"Chunky PNG"}}},{node:{id:"SitePage /do",context:{nodePath:"/do",category:"Ruby libraries",title:"Do gem"}}}]},topPages:{edges:[{node:{id:"SitePage /elixir",context:{nodePath:"/elixir",category:"Elixir",title:"Elixir"}}},{node:{id:"SitePage /es6",context:{nodePath:"/es6",category:"JavaScript",title:"ES2015+"}}},{node:{id:"SitePage /react",context:{nodePath:"/react",category:"React",title:"React.js"}}},{node:{id:"SitePage /vim",context:{nodePath:"/vim",category:"Vim",title:"Vim"}}},{node:{id:"SitePage /vimscript",context:{nodePath:"/vimscript",category:"Vim",title:"Vim scripting"}}},{node:{id:"SitePage /capybara",context:{nodePath:"/capybara",category:"Ruby libraries",title:"Capybara"}}}]},allPages:{totalCount:364}},pathContext:{node_id:"/home/rsc/Dev/@devhints/cheatsheets-ng/sheets/ronn.md absPath of file >>> MarkdownRemark",nodePath:"/ronn",nodeType:"sheet",title:"Ronn",category:"Ruby libraries",weight:-1}}}});
//# sourceMappingURL=path---ronn-9c5b1d50c7dfd25ebde5.js.map