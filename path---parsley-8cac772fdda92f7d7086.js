webpackJsonp([29179037061170],{930:function(e,t){e.exports={data:{markdownRemark:{htmlAst:{type:"element",tagName:"div",properties:{},children:[{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Parsley"}]},{type:"comment",value:" {.-three-column} "},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Installing via NPM"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"npm install --save parsleyjs\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://www.npmjs.com/package/parsleyjs"},children:[{type:"text",value:"parsleyjs"}]},{type:"text",value:" is the Parsley form validator. ('parsley' is a different package)"}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Enabling"}]},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"via HTML"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-html"]},children:[{type:"text",value:"<form data-parsley-validate>\n<!-- ✗ not preferred -->\n"}]}]},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"via JavaScript"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"$('#form').parsley(/* options */)\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"It's preferable to explicitly call "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"$.fn.parsley()"}]},{type:"text",value:"."}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"API"}]},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Form"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"$('#myform').parsley()\n  .isValid()  // → true | null\n  .validate()\n  .reset()\n  .destroy()\n"}]}]},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Input"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"$('#myform input').parsley()\n  .isValid()\n  .validate() // returns errors\n"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Validators"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-html"]},children:[{type:"text",value:"<input ...>\n"}]}]},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Required"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-html"]},children:[{type:"text",value:"  required\n"}]}]},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Types"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-html"]},children:[{type:"text",value:"  type='email'\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-html"]},children:[{type:"text",value:"  type='url'\n  data-parsley-type='url'\n"}]}]},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Length"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-html"]},children:[{type:"text",value:"  maxlength='6'\n  data-parsley-maxlength='6'\n  minlength='10'\n  data-parsley-minlength='10'\n"}]}]},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Numeric"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-html"]},children:[{type:"text",value:"  pattern='\\d+'\n  data-parsley-pattern='\\d+'\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-html"]},children:[{type:"text",value:"  type='number'\n  data-parsley-type='number'\n  data-parsley-type='integer'\n  data-parsley-type='digits'\n  data-parsley-type='alphanum'\n"}]}]},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Range"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-html"]},children:[{type:"text",value:"  type='range'\n  data-parsley=range='[6, 10]'\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-html"]},children:[{type:"text",value:"  max='10'\n  data-parsley-max='10'\n  min='6'\n  data-parsley-min='6'\n"}]}]},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Checkboxes"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-html"]},children:[{type:"text",value:"  data-parsley-mincheck='1'\n  data-parsley-maxcheck='3'\n  data-parsley-check='[1, 3]'\n"}]}]},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Confirmation"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-html"]},children:[{type:"text",value:"  data-parsley-equalto='#confirm'\n"}]}]},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Options"}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Form options"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"// Supported & excluded inputs by default\n  inputs: 'input, textarea, select'\n  excluded: 'input[type=button], input[type=submit], input[type=reset], input[type=hidden]'\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"// Stop validating field on highest priority failing constraint\n  priorityEnabled: true\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"See: "},{type:"element",tagName:"a",properties:{href:"http://parsleyjs.org/doc/annotated-source/defaults.html"},children:[{type:"text",value:"Options"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Field options"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"// identifier used to group together inputs\n// (e.g. radio buttons…)\n  multiple: null\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"// identifier (or array of identifiers) used to\n// validate only a select group of inputs\n  group: null\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"These options are only available for fields."}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"UI Options"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"// Enable/disable error messages\n  uiEnabled: true\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"// Key events threshold before validation\n  validationThreshold: 3\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"// Focused field on form validation error. ‘first’|’last’|’none’\n  focus: 'first'\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"// $.Event() that will trigger validation. eg: keyup, change…\n  trigger: false\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"// Class that would be added on every failing validation\n// Parsley field\n  errorClass: 'parsley-error'\n  successClass: 'parsley-success'\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"// Return the $element that will receive these above\n// success or error classes. Could also be (and given\n// directly from DOM) a valid selector like '#div'\n  classHandler: function (ParsleyField) {}\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"// Return the $element where errors will be appended.\n// Could also be (and given directly from DOM) a valid\n// selector like '#div'\n  errorsContainer: function (ParsleyField) {}\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"// ul elem that would receive errors’ list\n  errorsWrapper: '<ul class=\"parsley-errors-list\"></ul>'\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"// li elem that would receive error message\n  errorTemplate: '<li></li>'\n"}]}]},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Examples"}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Custom container"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"$('[data-parsley]').parsley({\n  errorsContainer (field) {\n    return field.$element.closest('.block, .control')\n  }\n})\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Appends the error to the closest "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:".block"}]},{type:"text",value:" or "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:".control"}]},{type:"text",value:"."}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Custom markup"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"$('[data-parsley]').parsley({\n  errorClass: '-error',\n  successClass: '-success',\n\n  errorsWrapper: '<ul class=\"parsley-error-list\"></ul>',\n  errorTemplate: '<li class=\"parsley-error\"></li>'\n})\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Uses custom markup."}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Custom fields"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"$('[data-parsley]').parsley({\n  classHandler (field) {\n    const $parent = field.$element.closest('.input-group')\n    if ($parent.length) return $parent\n\n    return field.$element\n  }\n})\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Applies the "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"errorClass"}]},{type:"text",value:" and "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"successClass"}]},{type:"text",value:" to the closest "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:".input-group"}]},{type:"text",value:", if available."}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Custom validator"}]},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"HTML"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-html"]},children:[{type:"text",value:"<input type='text' data-parsley-multiple-of='3' />\n"}]}]},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"JavaScript"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"window.Parsley\n  .addValidator('multipleOf', {\n    // string | number | integer | date | regexp | boolean\n    requirementType: 'integer',\n\n    // validateString | validateDate | validateMultiple\n    validateNumber (value, requirement) {\n      return 0 === value % requirement\n    },\n\n    messages: {\n      en: 'This value should be a multiple of %s'\n    }\n  })\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"See: "},{type:"element",tagName:"a",properties:{href:"http://parsleyjs.org/doc/index.html#custom"},children:[{type:"text",value:"Custom validators"}]}]},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Also see"}]},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"http://parsleyjs.org/doc/"},children:[{type:"text",value:"Parsley documentation"}]},{type:"text",value:" "},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"(parsleyjs.org)"}]}]},{type:"text",value:"\n"}]}]},frontmatter:{title:"Parsley.js",category:null,intro:"[Parsley](http://parsleyjs.org/doc/) provides frontend form validation.\n"}},relatedPages:{edges:[{node:{id:"SitePage /datetime",context:{nodePath:"/datetime",category:"",title:"Date & time formats"}}},{node:{id:"SitePage /strftime",context:{nodePath:"/strftime",category:"",title:"strftime format"}}},{node:{id:"SitePage /go",context:{nodePath:"/go",category:"",title:"Go"}}},{node:{id:"SitePage /homebrew",context:{nodePath:"/homebrew",category:"",title:"Homebrew"}}},{node:{id:"SitePage /semver",context:{nodePath:"/semver",category:"",title:"Semver"}}},{node:{id:"SitePage /bootstrap",context:{nodePath:"/bootstrap",category:"",title:"Bootstrap"}}}]},topPages:{edges:[{node:{id:"SitePage /elixir",context:{nodePath:"/elixir",category:"Elixir",title:"Elixir"}}},{node:{id:"SitePage /es6",context:{nodePath:"/es6",category:"JavaScript",title:"ES2015+"}}},{node:{id:"SitePage /react",context:{nodePath:"/react",category:"React",title:"React.js"}}},{node:{id:"SitePage /vim",context:{nodePath:"/vim",category:"Vim",title:"Vim"}}},{node:{id:"SitePage /vimscript",context:{nodePath:"/vimscript",category:"Vim",title:"Vim scripting"}}},{node:{id:"SitePage /capybara",context:{nodePath:"/capybara",category:"Ruby libraries",title:"Capybara"}}}]},allPages:{totalCount:363}},pathContext:{node_id:"/home/rsc/Dev/@devhints/cheatsheets-ng/sheets/parsley.md absPath of file >>> MarkdownRemark",nodePath:"/parsley",nodeType:"sheet",title:"Parsley.js",category:"",weight:-1,updated:"2017-10-19T00:00:00.000Z"}}}});
//# sourceMappingURL=path---parsley-8cac772fdda92f7d7086.js.map