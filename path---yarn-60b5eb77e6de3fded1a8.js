webpackJsonp([0x9508e46e076b],{1056:function(e,t){e.exports={data:{markdownRemark:{htmlAst:{type:"element",tagName:"div",properties:{},children:[{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"npm equivalents"}]},{type:"text",value:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"},{type:"element",tagName:"table",properties:{},children:[{type:"element",tagName:"thead",properties:{},children:[{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"th",properties:{},children:[{type:"text",value:"npm"}]},{type:"element",tagName:"th",properties:{},children:[{type:"text",value:"yarn"}]}]}]},{type:"element",tagName:"tbody",properties:{},children:[{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"npm install"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"yarn"}]}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"npm install gulp --save"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"yarn add gulp"}]}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"npm install gulp --save-dev --save-exact"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"yarn add gulp --dev --exact"}]}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"npm install -g gulp"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"yarn global add gulp"}]}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"./node_modules/.bin/gulp"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"yarn run gulp"}]}]}]}]}]},{type:"comment",value:" {.-left-align.-headers} "},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"yarn install"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"--no-lockfile\n--pure-lockfile\n--frozen-lockfile\n--silent\n--offline\n--update-checksums\n--check-files\n--flat\n--force\n--ignore-scripts\n--modules-folder <path>\n--production[=true|false]\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"These options are available for "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"yarn install"}]},{type:"text",value:"."}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"yarn add"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"--dev\n--peer\n--optional\n--exact\n--tilde\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"These options are available for "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"yarn add"}]},{type:"text",value:"."}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Workspaces"}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"In "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"package.json"}]},{type:"text",value:":"}]},{type:"comment",value:" {.-setup} "},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-json"]},children:[{type:"text",value:'"workspaces": [\n  "packages/*"\n]\n'}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"jest/\n├─ package.json\n└─ packages/\n   ├─ jest-matcher-utils/\n   │  └─ package.json\n   └─ jest-diff/\n      └─ package.json\n"}]}]},{type:"comment",value:" {.-box-chars} "},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"(New in 1.0) Allows monorepos to share packages with each other. See: "},{type:"element",tagName:"a",properties:{href:"https://yarnpkg.com/blog/2017/08/02/introducing-workspaces/"},children:[{type:"text",value:"Introducing workspaces"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Selective version resolution"}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"In "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"package.json"}]},{type:"text",value:":"}]},{type:"comment",value:" {.-setup} "},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-json"]},children:[{type:"text",value:'"resolutions": {\n  "**/sass-brunch/node-sass": "4.5.2"\n}\n'}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"(New in 1.0) Allows you to specify versions for sub-dependencies. See: "},{type:"element",tagName:"a",properties:{href:"https://github.com/yarnpkg/yarn/pull/4105"},children:[{type:"text",value:"Selective version resolutions"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Create"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:"yarn create react-app hello\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Install "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"create-react-app"}]},{type:"text",value:" and runs it. See: "},{type:"element",tagName:"a",properties:{href:"https://github.com/yarnpkg/rfcs/blob/master/implemented/0000-yarn-create.md"},children:[{type:"text",value:"yarn create"}]}]}]},frontmatter:{title:"Yarn",category:"JavaScript libraries",intro:null}},relatedPages:{edges:[{node:{id:"SitePage /chai",context:{nodePath:"/chai",category:"JavaScript libraries",title:"Chai.js"}}},{node:{id:"SitePage /flow",context:{nodePath:"/flow",category:"JavaScript libraries",title:"Flow"}}},{node:{id:"SitePage /jest",context:{nodePath:"/jest",category:"JavaScript libraries",title:"Jest"}}},{node:{id:"SitePage /lodash",context:{nodePath:"/lodash",category:"JavaScript libraries",title:"Lodash"}}},{node:{id:"SitePage /pug",context:{nodePath:"/pug",category:"JavaScript libraries",title:"Pug"}}},{node:{id:"SitePage /bluebird",context:{nodePath:"/bluebird",category:"JavaScript libraries",title:"bluebird.js"}}}]},topPages:{edges:[{node:{id:"SitePage /elixir",context:{nodePath:"/elixir",category:"Elixir",title:"Elixir"}}},{node:{id:"SitePage /es6",context:{nodePath:"/es6",category:"JavaScript",title:"ES2015+"}}},{node:{id:"SitePage /react",context:{nodePath:"/react",category:"React",title:"React.js"}}},{node:{id:"SitePage /vim",context:{nodePath:"/vim",category:"Vim",title:"Vim"}}},{node:{id:"SitePage /vimscript",context:{nodePath:"/vimscript",category:"Vim",title:"Vim scripting"}}},{node:{id:"SitePage /capybara",context:{nodePath:"/capybara",category:"Ruby libraries",title:"Capybara"}}}]},allPages:{totalCount:364}},pathContext:{node_id:"/home/rsc/Dev/@devhints/cheatsheets-ng/sheets/yarn.md absPath of file >>> MarkdownRemark",nodePath:"/yarn",nodeType:"sheet",title:"Yarn",category:"JavaScript libraries",weight:-3}}}});
//# sourceMappingURL=path---yarn-60b5eb77e6de3fded1a8.js.map