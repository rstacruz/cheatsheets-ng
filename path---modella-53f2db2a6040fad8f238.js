webpackJsonp([26793162083557],{906:function(e,t){e.exports={data:{markdownRemark:{htmlAst:{type:"root",children:[{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Defining models"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-coffeescript"]},children:[{type:"text",value:"User = Modella('User')\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-coffeescript"]},children:[{type:"text",value:"  .attr('name')\n  .attr('email', { required: true })\n  .use(require('modella-validators'))\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-coffeescript"]},children:[{type:"text",value:"  .validator (u) ->\n    u.error('username', 'is required')  unless u.has('username')\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Instances"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-coffeescript"]},children:[{type:"text",value:"user\n  .name()\n  .name('John')\n  .set(name: 'John')\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-coffeescript"]},children:[{type:"text",value:"  .has('name')   # → true\n  .isNew()\n  .isValid()\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-coffeescript"]},children:[{type:"text",value:"  .save (err) ->\n  .remove (err) ->\n  .removed\n  .model         # === User\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Events"}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Emitting"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-coffeescript"]},children:[{type:"text",value:"Model.emit('event', [data...])\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-coffeescript"]},children:[{type:"text",value:"record.emit('event', [data...])\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"List of events"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-coffeescript"]},children:[{type:"text",value:"user\n  .on 'save', ->\n  .on 'create', ->\n  .on 'saving', (data, done) -> done()\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-coffeescript"]},children:[{type:"text",value:"  .on 'remove', ->\n  .on 'removing', (data, done) -> done()\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-coffeescript"]},children:[{type:"text",value:"  .on 'valid', ->\n  .on 'invalid', ->\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-coffeescript"]},children:[{type:"text",value:"  .on 'change', ->\n  .on 'change email', ->\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-coffeescript"]},children:[{type:"text",value:"  .on 'initializing', (instance, attrs) ->\n  .on 'initialize', ->\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-coffeescript"]},children:[{type:"text",value:"  .on 'error', -> failed to save model\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-coffeescript"]},children:[{type:"text",value:"  .on 'setting', (instance, attrs) ->  # on Model#set()\n  .on 'attr', -> # new attr via Model.attr()\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Misc"}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Plugins"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-coffeescript"]},children:[{type:"text",value:"MyPlugin = ->\n  return (Model) ->\n\n    Model.method = ...\n    Model.prototype.method = ...\n    Model.attr(...)\n\n    Model\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"A plugin is a function that returns a model decorator (ie, a function that takes in a model and returns a model)."}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Memory"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-coffeescript"]},children:[{type:"text",value:"User\n  .all (err, users) ->\n  .find id, (err, user) ->\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-coffeescript"]},children:[{type:"text",value:"  .remove ->\n  .save ->\n  .update ->\n"}]}]}],data:{quirksMode:!1}},frontmatter:{title:"Modella",category:"JavaScript libraries",intro:"[Modella](https://www.npmjs.com/package/modella) allows you to create simple models in JavaScript. This is a guide on basic usage of Modella in CoffeeScript.\n"}},relatedPages:{edges:[{node:{id:"SitePage /chai",context:{nodePath:"/chai",category:"JavaScript libraries",title:"Chai.js"}}},{node:{id:"SitePage /flow",context:{nodePath:"/flow",category:"JavaScript libraries",title:"Flow"}}},{node:{id:"SitePage /jest",context:{nodePath:"/jest",category:"JavaScript libraries",title:"Jest"}}},{node:{id:"SitePage /lodash",context:{nodePath:"/lodash",category:"JavaScript libraries",title:"Lodash"}}},{node:{id:"SitePage /yarn",context:{nodePath:"/yarn",category:"JavaScript libraries",title:"Yarn"}}},{node:{id:"SitePage /pug",context:{nodePath:"/pug",category:"JavaScript libraries",title:"Pug"}}}]},topPages:{edges:[{node:{id:"SitePage /elixir",context:{nodePath:"/elixir",category:"Elixir",title:"Elixir"}}},{node:{id:"SitePage /es6",context:{nodePath:"/es6",category:"JavaScript",title:"ES2015+"}}},{node:{id:"SitePage /react",context:{nodePath:"/react",category:"React",title:"React.js"}}},{node:{id:"SitePage /vim",context:{nodePath:"/vim",category:"Vim",title:"Vim"}}},{node:{id:"SitePage /vimscript",context:{nodePath:"/vimscript",category:"Vim",title:"Vim scripting"}}},{node:{id:"SitePage /capybara",context:{nodePath:"/capybara",category:"Ruby libraries",title:"Capybara"}}}]},allPages:{totalCount:364}},pathContext:{node_id:"/home/rsc/Dev/@devhints/cheatsheets-ng/sheets/modella.md absPath of file >>> MarkdownRemark",nodePath:"/modella",nodeType:"sheet",title:"Modella",category:"JavaScript libraries",weight:0}}}});
//# sourceMappingURL=path---modella-53f2db2a6040fad8f238.js.map