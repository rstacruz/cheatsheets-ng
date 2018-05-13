webpackJsonp([23441439083272],{776:function(e,t){e.exports={data:{markdownRemark:{htmlAst:{type:"element",tagName:"div",properties:{},children:[{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Reference"}]},{type:"comment",value:" {.-three-column} "},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Inheritance"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-docker"]},children:[{type:"text",value:"FROM ruby:2.2.2\n"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Variables"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-docker"]},children:[{type:"text",value:"ENV APP_HOME /myapp\nRUN mkdir $APP_HOME\n"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Initialization"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-docker"]},children:[{type:"text",value:"RUN bundle install\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-docker"]},children:[{type:"text",value:"WORKDIR /myapp\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-docker"]},children:[{type:"text",value:'VOLUME ["/data"]\n# Specification for mount point\n'}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-docker"]},children:[{type:"text",value:"ADD file.xyz /file.xyz\nCOPY --chown=user:group host_file.xyz /path/container_file.xyz\n"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Onbuild"}]},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"docker"}]},{type:"text",value:"\nONBUILD RUN bundle install"}]},{type:"element",tagName:"h1",properties:{},children:[{type:"text",value:"when used with another file"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:'### Commands\n\n```docker\nEXPOSE 5900\nCMD    ["bundle", "exec", "rails", "server"]\n'}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Entrypoint"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-docker"]},children:[{type:"text",value:'ENTRYPOINT ["executable", "param1", "param2"]\nENTRYPOINT command param1 param2\n'}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Configures a container that will run as an executable."}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-docker"]},children:[{type:"text",value:"ENTRYPOINT exec top -b\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"This will use shell processing to substitute shell variables, and will ignore any "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"CMD"}]},{type:"text",value:" or "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"docker run"}]},{type:"text",value:" command line arguments."}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Metadata"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-docker"]},children:[{type:"text",value:'LABEL version="1.0"\n'}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-docker"]},children:[{type:"text",value:'LABEL "com.example.vendor"="ACME Incorporated"\nLABEL com.example.label-with-value="foo"\n'}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-docker"]},children:[{type:"text",value:'LABEL description="This text illustrates \\\nthat label-values can span multiple lines."\n'}]}]},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"See also"}]},{type:"comment",value:" {.-one-column} "},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://docs.docker.com/engine/reference/builder/"},children:[{type:"text",value:"https://docs.docker.com/engine/reference/builder/"}]}]},{type:"text",value:"\n"}]}]},frontmatter:{title:"Dockerfile",category:"Devops",intro:null}},relatedPages:{edges:[{node:{id:"SitePage /docker-compose",context:{nodePath:"/docker-compose",category:"Devops",title:"docker-compose"}}},{node:{id:"SitePage /awscli",context:{nodePath:"/awscli",category:"Devops",title:"AWS CLI"}}},{node:{id:"SitePage /chef",context:{nodePath:"/chef",category:"Devops",title:"Chef"}}},{node:{id:"SitePage /deis",context:{nodePath:"/deis",category:"Devops",title:"Deis"}}},{node:{id:"SitePage /docker",context:{nodePath:"/docker",category:"Devops",title:"Docker CLI"}}},{node:{id:"SitePage /ec2",context:{nodePath:"/ec2",category:"Devops",title:"EC2 API tools"}}}]},topPages:{edges:[{node:{id:"SitePage /elixir",context:{nodePath:"/elixir",category:"Elixir",title:"Elixir"}}},{node:{id:"SitePage /es6",context:{nodePath:"/es6",category:"JavaScript",title:"ES2015+"}}},{node:{id:"SitePage /react",context:{nodePath:"/react",category:"React",title:"React.js"}}},{node:{id:"SitePage /vim",context:{nodePath:"/vim",category:"Vim",title:"Vim"}}},{node:{id:"SitePage /vimscript",context:{nodePath:"/vimscript",category:"Vim",title:"Vim scripting"}}},{node:{id:"SitePage /capybara",context:{nodePath:"/capybara",category:"Ruby libraries",title:"Capybara"}}}]},allPages:{totalCount:364}},pathContext:{node_id:"/home/rsc/Dev/@devhints/cheatsheets-ng/sheets/dockerfile.md absPath of file >>> MarkdownRemark",nodePath:"/dockerfile",nodeType:"sheet",title:"Dockerfile",category:"Devops",weight:0}}}});
//# sourceMappingURL=path---dockerfile-36dd4b1740bdda0c3333.js.map