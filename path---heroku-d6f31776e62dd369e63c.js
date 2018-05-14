webpackJsonp([0x6991608bf8e0],{833:function(e,t){e.exports={data:{markdownRemark:{htmlAst:{type:"root",children:[{type:"element",tagName:"h3",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"create"}]},{type:"text",value:" - Create an app"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:"heroku create sushi\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:"git push heroku master\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"access"}]},{type:"text",value:" - Collaboration"}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Manage collaborators"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:"heroku access                     # List\nheroku access:add me@xy.com\nheroku access:remove me@xy.com\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Transfer to another owner"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:"heroku apps:transfer new@owner.com\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"logs"}]},{type:"text",value:" - Show logs"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:"heroku logs\nheroku logs -t      # --tail (stream)\nheroku logs -s app  # --source (only on app logs)\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"releases"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:"heroku releases\nheroku releases:info v25\nheroku rollback\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"pg"}]},{type:"text",value:" - PostgreSQL"}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Start a database"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:"heroku addons:add heroku-postgresql\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Enable backups"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:"heroku addons:add pgbackups:auto-month\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"See: "},{type:"element",tagName:"a",properties:{href:"https://devcenter.heroku.com/articles/heroku-postgresql"},children:[{type:"text",value:"Heroku PostgreSQL"}]},{type:"text",value:" "},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"(devcenter.heroku.com)"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"config"}]},{type:"text",value:" - Environment var configuration"}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Listing"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:"heroku config        # List\nheroku config -s     # List in shell format\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Getting"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:"heroku config:get KEY\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Setting"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:"heroku config:set KEY=val\nheroku config:set KEY1=val KEY2=val ...\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:"heroku config:unset KEY1\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"apps"}]},{type:"text",value:" - Applications"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:"heroku apps                  # list\nheroku apps:create [NAME]\nheroku apps:destroy --app APP\nheroku apps:info\nheroku apps:open             # open in browser\nheroku apps:rename NEWNAME\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"maintenance"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:"heroku maintenance:on\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:"heroku maintenance:off\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Processes"}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"ps"}]},{type:"text",value:" - Managing processes"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:"heroku ps              # list\nheroku ps:scale web=1  # spawn more dynos\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"restart"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:"heroku restart\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"run"}]},{type:"text",value:" - Running tasks"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:"heroku run bash\nheroku run console                  # Rails console\nheroku run rake assets:precompile\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Domains"}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"domains"}]},{type:"text",value:" - Custom domains"}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Add both!"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:"heroku domains:add example.com\nheroku domains:add www.example.com\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Removing"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:"heroku domains:clear\nheroku domains:remove example.com\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"See: "},{type:"element",tagName:"a",properties:{href:"https://devcenter.heroku.com/articles/custom-domains"},children:[{type:"text",value:"Custom domains"}]},{type:"text",value:" "},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"(devcenter.heroku.com)"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Wildcard domains"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:"heroku addons:add wildcard_domains\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:"*.yourdomain.com => heroku.com\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Other tricks"}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"htpasswd (for PHP apps)"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Create an "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:".htaccess"}]},{type:"text",value:" file in the webroot:"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:'AuthUserFile /app/www/.htpasswd\nAuthType Basic\nAuthName "Restricted Access"\nRequire valid-user\n'}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Create a "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:".htpasswd"}]},{type:"text",value:" file:"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:"$ htpasswd -c .htpasswd [username]\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"See: "},{type:"element",tagName:"a",properties:{href:"https://gist.github.com/3316425"},children:[{type:"text",value:"gist.github.com"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"References"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://addons.heroku.com/"},children:[{type:"text",value:"https://addons.heroku.com/"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://devcenter.heroku.com/"},children:[{type:"text",value:"https://devcenter.heroku.com/"}]}]},{type:"text",value:"\n"}]}],data:{quirksMode:!1}},frontmatter:{title:"Heroku",category:"Devops",intro:"[Heroku](http://heroku.com/) is a web hosting platform supporting many languages, and this guide is a reference to Heroku's [command-line interface](http://heroku.com/).\n"}},relatedPages:{edges:[{node:{id:"SitePage /docker-compose",context:{nodePath:"/docker-compose",category:"Devops",title:"docker-compose"}}},{node:{id:"SitePage /awscli",context:{nodePath:"/awscli",category:"Devops",title:"AWS CLI"}}},{node:{id:"SitePage /chef",context:{nodePath:"/chef",category:"Devops",title:"Chef"}}},{node:{id:"SitePage /deis",context:{nodePath:"/deis",category:"Devops",title:"Deis"}}},{node:{id:"SitePage /dockerfile",context:{nodePath:"/dockerfile",category:"Devops",title:"Dockerfile"}}},{node:{id:"SitePage /docker",context:{nodePath:"/docker",category:"Devops",title:"Docker CLI"}}}]},topPages:{edges:[{node:{id:"SitePage /elixir",context:{nodePath:"/elixir",category:"Elixir",title:"Elixir"}}},{node:{id:"SitePage /es6",context:{nodePath:"/es6",category:"JavaScript",title:"ES2015+"}}},{node:{id:"SitePage /react",context:{nodePath:"/react",category:"React",title:"React.js"}}},{node:{id:"SitePage /vim",context:{nodePath:"/vim",category:"Vim",title:"Vim"}}},{node:{id:"SitePage /vimscript",context:{nodePath:"/vimscript",category:"Vim",title:"Vim scripting"}}},{node:{id:"SitePage /capybara",context:{nodePath:"/capybara",category:"Ruby libraries",title:"Capybara"}}}]},allPages:{totalCount:364}},pathContext:{node_id:"/home/rsc/Dev/@devhints/cheatsheets-ng/sheets/heroku.md absPath of file >>> MarkdownRemark",nodePath:"/heroku",nodeType:"sheet",title:"Heroku",category:"Devops",weight:0,updated:"2017-10-11T00:00:00.000Z"}}}});
//# sourceMappingURL=path---heroku-d6f31776e62dd369e63c.js.map