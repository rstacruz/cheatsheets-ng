webpackJsonp([0x686b0e6a3517],{1004:function(e,t){e.exports={data:{markdownRemark:{htmlAst:{type:"root",children:[{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Basic config"}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"rollup.config.js"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"export default {\n  input: 'src/main.js',\n  output: {\n    file: 'bundle.js',\n    format: 'cjs'\n  }\n}\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Terminal"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:"npm install -D rollup\n"}]}]},{type:"text",value:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"},{type:"element",tagName:"table",properties:{},children:[{type:"element",tagName:"thead",properties:{},children:[{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"th",properties:{},children:[{type:"text",value:"Command"}]},{type:"element",tagName:"th",properties:{},children:[{type:"text",value:"Description"}]}]}]},{type:"element",tagName:"tbody",properties:{},children:[{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"rollup -c -o bundle.js"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"bundle using config"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"rollup main.js --o bundle.js --f cjs"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"bundle"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"rollup --watch"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"bundle continuously"}]}]}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"You may need to use "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"./node_modules/.bin/rollup"}]},{type:"text",value:" as a command if you did not install rollup globally."}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Multiple outputs"}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"rollup.config.js"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"export default [\n  {\n    input: 'src/main.js',\n    output: {\n      file: __dirname + '/public/main.js',\n      format: 'cjs',\n      name: 'main'\n    }\n  },\n  {\n    input: 'src/vendor.js',\n    output: {\n      file: __dirname + 'public/vendor.js',\n      format: 'cjs',\n      name: 'vendor'\n    }\n  }\n]\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"This creates "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"main.js"}]},{type:"text",value:" and "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"vendor.js"}]},{type:"text",value:"."}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Using plugins"}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Plugins"}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Terminal"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:"npm install -D rollup-plugin-json\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"rollup.config.js"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"import json from 'rollup-plugin-json'\n\nexport default {\n  input: 'src/main.js',\n  output: {\n    file: 'bundle.js',\n    format: 'cjs'\n  },\n  plugins [ json() ]\n}\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"npm packages"}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Terminal"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:"npm install --save-dev rollup-plugin-node-resolve\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"rollup.config.js"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"import resolve from 'rollup-plugin-node-resolve'\n\nexport default {\n  input: 'src/main.js',\n  output: {\n    file: 'bundle.js',\n    format: 'cjs'\n  },\n  plugins: [ resolve() ]\n}\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"When you run a npm run build, no warning is emitted and contains the imported modules."}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Peer dependencies"}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Terminal"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:"npm install -D rollup-plugin-node-resolve\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"rollup.config.js"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"import resolve from 'rollup-plugin-node-resolve'\n\nexport default {\n  input: 'src/main.js',\n  output: {\n    file: 'bundle.js',\n    format: 'cjs'\n  },\n  plugins: [resolve({\n    // pass custom options to the resolve plugin\n    customResolveOptions: {\n      moduleDirectory: 'node_modules'\n    }\n  })],\n  // indicate which modules should be treated as external\n  external: ['lodash']\n}\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Babel"}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Terminal"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:"npm install -D rollup-plugin-babel\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"rollup.config.js"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"import resolve from 'rollup-plugin-node-resolve'\nimport babel from 'rollup-plugin-babel'\n\nexport default {\n  input: 'src/main.js',\n  output: {\n    file: 'bundle.js',\n    format: 'cjs'\n  },\n  plugins: [\n    resolve(),\n    babel({\n      exclude: 'node_modules/**' // only transpile our source code\n    })\n  ]\n}\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"src/.babelrc"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:'{\n  "presets": [\n    ["latest", {\n      "es2015": {\n        "modules": false\n      }\n    }]\n  ],\n  "plugins": ["external-helpers"]\n}\n'}]}]}],data:{quirksMode:!1}},frontmatter:{title:"Rollup.js",category:"JavaScript libraries",intro:"[Rollup](https://rollupjs.org/) is a module bundler for JavaScript which compiles small pieces of code into something larger and more complex, such as a library or application.\n"}},relatedPages:{edges:[{node:{id:"SitePage /chai",context:{nodePath:"/chai",category:"JavaScript libraries",title:"Chai.js"}}},{node:{id:"SitePage /flow",context:{nodePath:"/flow",category:"JavaScript libraries",title:"Flow"}}},{node:{id:"SitePage /jest",context:{nodePath:"/jest",category:"JavaScript libraries",title:"Jest"}}},{node:{id:"SitePage /lodash",context:{nodePath:"/lodash",category:"JavaScript libraries",title:"Lodash"}}},{node:{id:"SitePage /pug",context:{nodePath:"/pug",category:"JavaScript libraries",title:"Pug"}}},{node:{id:"SitePage /yarn",context:{nodePath:"/yarn",category:"JavaScript libraries",title:"Yarn"}}}]},topPages:{edges:[{node:{id:"SitePage /elixir",context:{nodePath:"/elixir",category:"Elixir",title:"Elixir"}}},{node:{id:"SitePage /es6",context:{nodePath:"/es6",category:"JavaScript",title:"ES2015+"}}},{node:{id:"SitePage /react",context:{nodePath:"/react",category:"React",title:"React.js"}}},{node:{id:"SitePage /vim",context:{nodePath:"/vim",category:"Vim",title:"Vim"}}},{node:{id:"SitePage /vimscript",context:{nodePath:"/vimscript",category:"Vim",title:"Vim scripting"}}},{node:{id:"SitePage /capybara",context:{nodePath:"/capybara",category:"Ruby libraries",title:"Capybara"}}}]},allPages:{totalCount:366}},pathContext:{node_id:"/home/rsc/Dev/@devhints/cheatsheets-ng/sheets/rollup.md absPath of file >>> MarkdownRemark",nodePath:"/rollup",nodeType:"sheet",title:"Rollup.js",category:"JavaScript libraries",weight:0,updated:"2017-11-01T00:00:00.000Z"}}}});
//# sourceMappingURL=path---rollup-44397314d3865054db57.js.map