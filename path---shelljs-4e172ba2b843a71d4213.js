webpackJsonp([84191109692380],{994:function(e,t){e.exports={data:{markdownRemark:{htmlAst:{type:"root",children:[{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Example"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"var shell = require('shelljs')\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"if (!shell.which('git')) {\n  shell.echo('Sorry, this script requires git')\n  shell.exit(1)\n}\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"// Copy files to release dir\nshell.rm('-rf', 'out/Release')\nshell.cp('-R', 'stuff/', 'out/Release')\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"// Replace macros in each .js file\nshell.cd('lib')\nshell.ls('*.js').forEach(function (file) {\n  shell.sed('-i', 'BUILD_VERSION', 'v0.1.2', file)\n  shell.sed('-i', /^.*REMOVE_THIS_LINE.*$/, '', file)\n  shell.sed('-i', /.*REPLACE_LINE_WITH_MACRO.*\\n/, shell.cat('macro.js'), file)\n})\nshell.cd('..')\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"// Run external tool synchronously\nif (shell.exec('git commit -am \"Auto-commit\"').code !== 0) {\n  shell.echo('Error: Git commit failed')\n  shell.exit(1)\n}\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Taken from the "},{type:"element",tagName:"a",properties:{href:"https://github.com/shelljs/shelljs"},children:[{type:"text",value:"Readme"}]},{type:"text",value:"."}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Require"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"const sh = require('shelljs')\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Paths"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"sh.cd('dir')\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"sh.mkdir('dir')\nsh.mkdir('-p', 'dir')\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"File manipulation"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"sh.cp('src', 'dest')\nsh.cp('-rf', 'src', 'dest')\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"sh.rm('file')\nsh.rm('-rf', 'file')\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"sh.mv('src', 'dest')\nsh.mv(['src1','src2'], 'dest')\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"sh.chmod('644', 'file')\nsh.chmod(755, 'file')\nsh.chmod('u+x', 'file')\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Tests"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"sh.test('-b', 'path')  // block device\nsh.test('-d', 'path')  // dir\nsh.test('-e', 'path')  // exists\nsh.test('-f', 'path')  // file\nsh.test('-L', 'path')  // symlink\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Cat and output"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"src = sh.cat('file*.txt')\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"'hello'.to('output.txt')\n'hello'.toEnd('append.txt')\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"sh.cat('input.txt').to('output.txt')\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Utils"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"sh.which('x')\nsh.pwd()\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"sh.echo('hi')\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"sh.exec('node --version').code\nsh.exec('node --version').output\nsh.exec('node --version', { silent: true }).output\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"sh.exec('node --version', (code, output) => {\n  sh.echo(`exit code ${code}`)\n})\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"sh.tempdir()\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"sh.error()  // null if no error\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Also see"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://github.com/shelljs/shelljs"},children:[{type:"text",value:"https://github.com/shelljs/shelljs"}]}]},{type:"text",value:"\n"}]}],data:{quirksMode:!1}},frontmatter:{title:"Shell.js",category:"JavaScript libraries",intro:"[ShellJS](https://github.com/shelljs/shelljs) is a portable (Windows/Linux/OS X) implementation of Unix shell commands on top of the Node.js API. \n"}},relatedPages:{edges:[{node:{id:"SitePage /chai",context:{nodePath:"/chai",category:"JavaScript libraries",title:"Chai.js"}}},{node:{id:"SitePage /flow",context:{nodePath:"/flow",category:"JavaScript libraries",title:"Flow"}}},{node:{id:"SitePage /jest",context:{nodePath:"/jest",category:"JavaScript libraries",title:"Jest"}}},{node:{id:"SitePage /lodash",context:{nodePath:"/lodash",category:"JavaScript libraries",title:"Lodash"}}},{node:{id:"SitePage /pug",context:{nodePath:"/pug",category:"JavaScript libraries",title:"Pug"}}},{node:{id:"SitePage /yarn",context:{nodePath:"/yarn",category:"JavaScript libraries",title:"Yarn"}}}]},topPages:{edges:[{node:{id:"SitePage /elixir",context:{nodePath:"/elixir",category:"Elixir",title:"Elixir"}}},{node:{id:"SitePage /es6",context:{nodePath:"/es6",category:"JavaScript",title:"ES2015+"}}},{node:{id:"SitePage /react",context:{nodePath:"/react",category:"React",title:"React.js"}}},{node:{id:"SitePage /vim",context:{nodePath:"/vim",category:"Vim",title:"Vim"}}},{node:{id:"SitePage /vimscript",context:{nodePath:"/vimscript",category:"Vim",title:"Vim scripting"}}},{node:{id:"SitePage /capybara",context:{nodePath:"/capybara",category:"Ruby libraries",title:"Capybara"}}}]},allPages:{totalCount:364}},pathContext:{node_id:"/home/rsc/Dev/@devhints/cheatsheets-ng/sheets/shelljs.md absPath of file >>> MarkdownRemark",nodePath:"/shelljs",nodeType:"sheet",title:"Shell.js",category:"JavaScript libraries",weight:-1,updated:"2017-10-27T00:00:00.000Z"}}}});
//# sourceMappingURL=path---shelljs-4e172ba2b843a71d4213.js.map