webpackJsonp([52770774668349],{1023:function(e,t){e.exports={data:{markdownRemark:{htmlAst:{type:"root",children:[{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Node"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-yml"]},children:[{type:"text",value:"language: node_js\nnode_js:\n- '4'\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Provides: 0.10, 0.8, 0.6, 0.11 (latest dev)"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Defaults install to "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"npm install"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Defaults test to "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"npm test"}]}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Ruby"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-yml"]},children:[{type:"text",value:"language: ruby\nrvm:\n- 2.0.0\n- 1.9.3\n- 1.8.7\n- rbx-19mode\n- jruby-19mode\n- jruby-18mode\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Defaults install to "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"bundle install"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Defaults test to "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"rake"}]}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Build lifecycle"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"before_install"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"install"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"before_script"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"script"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"after_success"}]},{type:"text",value:" or "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"after_failure"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"after_script"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"OPTIONAL "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"before_deploy"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"OPTIONAL "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"deploy"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"OPTIONAL "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"after_deploy"}]}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Branches"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:'branches:\n  except: [".."]\n  only: ["master"]\n'}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Environment vars"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:'env:\n  - "rack=master"\n  - "rack=1.3.4"\n'}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Custom test command"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"script: make test\nbefore_script: make pretest\nafter_script:  make clean\n\nbefore_script:\n  - make pretest1\n  - make pretest2\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Branches"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"branches:\n  except:\n    - legacy\n\n  only:\n    - gh-pages\n    - /^deploy/\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Apt packages"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"before_install:\n- sudo apt-get update -q\n- sudo apt-get install gcc-4.8 -y\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://docs.travis-ci.com/user/installing-dependencies/"},children:[{type:"text",value:"https://docs.travis-ci.com/user/installing-dependencies/"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Etc"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"gemfile:\n - gemfiles/Gemfile.rails-2.3.x\n - gemfiles/Gemfile.rails-3.0.x\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Notifications"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:'notifications:\n  email:\n   - dropbox+travis@ricostacruz.com\n\n  email:\n    recipients:\n     - dropbox+travis@ricostacruz.com\n    on_success: <always|never|change>  # default: change\n    on_failure: <always|never|change>  # default: always\n\n  irc: "chat.freenode.net#travis"\n'}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"References"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"http://about.travis-ci.org/docs/user/build-configuration/"},children:[{type:"text",value:"http://about.travis-ci.org/docs/user/build-configuration/"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"http://about.travis-ci.org/docs/user/languages/javascript-with-nodejs/"},children:[{type:"text",value:"http://about.travis-ci.org/docs/user/languages/javascript-with-nodejs/"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"http://about.travis-ci.org/docs/user/languages/ruby/"},children:[{type:"text",value:"http://about.travis-ci.org/docs/user/languages/ruby/"}]}]},{type:"text",value:"\n"}]}],data:{quirksMode:!1}},frontmatter:{title:"Travis.yml",category:null,intro:null}},relatedPages:{edges:[{node:{id:"SitePage /datetime",context:{nodePath:"/datetime",category:"Default",title:"Date & time formats"}}},{node:{id:"SitePage /strftime",context:{nodePath:"/strftime",category:"Default",title:"strftime format"}}},{node:{id:"SitePage /go",context:{nodePath:"/go",category:"Default",title:"Go"}}},{node:{id:"SitePage /homebrew",context:{nodePath:"/homebrew",category:"Default",title:"Homebrew"}}},{node:{id:"SitePage /semver",context:{nodePath:"/semver",category:"Default",title:"Semver"}}},{node:{id:"SitePage /bootstrap",context:{nodePath:"/bootstrap",category:"Default",title:"Bootstrap"}}}]},topPages:{edges:[{node:{id:"SitePage /elixir",context:{nodePath:"/elixir",category:"Elixir",title:"Elixir"}}},{node:{id:"SitePage /es6",context:{nodePath:"/es6",category:"JavaScript",title:"ES2015+"}}},{node:{id:"SitePage /react",context:{nodePath:"/react",category:"React",title:"React.js"}}},{node:{id:"SitePage /vim",context:{nodePath:"/vim",category:"Vim",title:"Vim"}}},{node:{id:"SitePage /vimscript",context:{nodePath:"/vimscript",category:"Vim",title:"Vim scripting"}}},{node:{id:"SitePage /capybara",context:{nodePath:"/capybara",category:"Ruby libraries",title:"Capybara"}}}]},allPages:{totalCount:364}},pathContext:{node_id:"/home/rsc/Dev/@devhints/cheatsheets-ng/sheets/travis.md absPath of file >>> MarkdownRemark",nodePath:"/travis",nodeType:"sheet",title:"Travis.yml",category:"Default",weight:0}}}});
//# sourceMappingURL=path---travis-4690361587869c88ab73.js.map