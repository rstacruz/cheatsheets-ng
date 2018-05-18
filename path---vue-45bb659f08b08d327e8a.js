webpackJsonp([0xa8eeed4a8782],{1047:function(e,t){e.exports={data:{markdownRemark:{htmlAst:{type:"root",children:[{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Lists"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-html"]},children:[{type:"text",value:'<li v-for="todo in todos">\n  {{ todo.text }}\n  {{ $index }}\n</li>\n'}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Events"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-html"]},children:[{type:"text",value:"<button v-on:click='submit'>Go</button>\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Components"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"new Vue({\n  components: { app: App }\n})\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"API"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"Vue.extend({ ... })        // creating components\nVue.nextTick(() => {...})\n\nVue.set(object, key, val)  // reactive\nVue.delete(object, key)\n\nVue.directive('my-dir', { bind, update, unbind })\n// <div v-my-dir='...'></div>\n\nVue.elementDirective('my-dir', { bind, update, unbind })\n// <my-dir>...</my-dir>\n\nVue.component('my-component', Vue.extend({ .. }))\n\nVue.partial('my-partial', '<div>hi {{msg}}</div>')\n// <partial name='my-partial'></partial>\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"new Vue({\n  data: { ... }\n  props: ['size'],\n  props: { size: Number },\n  computed: { fullname() { return this.name + ' ' + this.lastName } },\n  methods: { go() { ... } },\n  watch: { a (val, oldVal) { ... } },\n  el: '#foo',\n  template: '...',\n  replace: true, // replace element (default true)\n\n  // lifecycle\n  created () {},\n  beforeCompile () {},\n  compiled () {},\n  ready () {}, // $el is inserted for the first time\n  attached () {},\n  detached () {},\n  beforeDestroy () {},\n  destroyed () {},\n\n  // options\n  directives: {},\n  elementDirectives: {},\n  filters: {},\n  components: {},\n  transitions: {},\n  partials: {}\n})\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Vue templates"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Via "},{type:"element",tagName:"a",properties:{href:"https://www.npmjs.com/package/vueify"},children:[{type:"text",value:"vueify"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"// app.vue\n<template>\n  <h1 class=\"red\">{{msg}}</h1>\n</template>\n \n<script>\n  module.exports = {\n    data () {\n      return {\n        msg: 'Hello world!'\n      }\n    }\n  }\n</script> \n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Also"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-html"]},children:[{type:"text",value:"<template lang='jade'>\nh1(class='red') {{msg}}\n</template>\n"}]}]}],data:{quirksMode:!1}},frontmatter:{title:"Vue",category:"JavaScript libraries",intro:null}},relatedPages:{edges:[{node:{id:"SitePage /chai",context:{nodePath:"/chai",category:"JavaScript libraries",title:"Chai.js"}}},{node:{id:"SitePage /flow",context:{nodePath:"/flow",category:"JavaScript libraries",title:"Flow"}}},{node:{id:"SitePage /jest",context:{nodePath:"/jest",category:"JavaScript libraries",title:"Jest"}}},{node:{id:"SitePage /lodash",context:{nodePath:"/lodash",category:"JavaScript libraries",title:"Lodash"}}},{node:{id:"SitePage /pug",context:{nodePath:"/pug",category:"JavaScript libraries",title:"Pug"}}},{node:{id:"SitePage /yarn",context:{nodePath:"/yarn",category:"JavaScript libraries",title:"Yarn"}}}]},topPages:{edges:[{node:{id:"SitePage /elixir",context:{nodePath:"/elixir",category:"Elixir",title:"Elixir"}}},{node:{id:"SitePage /es6",context:{nodePath:"/es6",category:"JavaScript",title:"ES2015+"}}},{node:{id:"SitePage /react",context:{nodePath:"/react",category:"React",title:"React.js"}}},{node:{id:"SitePage /vim",context:{nodePath:"/vim",category:"Vim",title:"Vim"}}},{node:{id:"SitePage /vimscript",context:{nodePath:"/vimscript",category:"Vim",title:"Vim scripting"}}},{node:{id:"SitePage /capybara",context:{nodePath:"/capybara",category:"Ruby libraries",title:"Capybara"}}}]},allPages:{totalCount:363}},pathContext:{node_id:"/home/rsc/Dev/@devhints/cheatsheets-ng/sheets/vue.md absPath of file >>> MarkdownRemark",nodePath:"/vue",nodeType:"sheet",title:"Vue",category:"JavaScript libraries",weight:0,updated:null}}}});
//# sourceMappingURL=path---vue-45bb659f08b08d327e8a.js.map