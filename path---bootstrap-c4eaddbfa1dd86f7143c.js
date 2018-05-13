webpackJsonp([23786528321370],{730:function(e,t){e.exports={data:{markdownRemark:{htmlAst:{type:"root",children:[{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Screen sizes"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"         768          992                1200\n'     '     '     '     '     '     '     '     '\n<---------^------------^------------------^--------->\n     xs         sm              md             lg\n   (phone)   (tablet)        (laptop)       (desktop)\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Min:"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-scss"]},children:[{type:"text",value:"@media (min-width: @screen-sm-min) // >= 768px (small tablet)\n@media (min-width: @screen-md-min) // >= 992px (medium laptop)\n@media (min-width: @screen-lg-min) // >= 1200px (large desktop)\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Max:"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-scss"]},children:[{type:"text",value:"@media (max-width: @screen-xs-max) { // < 768px (xsmall phone)\n@media (max-width: @screen-sm-max) { // < 992px (small tablet)\n@media (max-width: @screen-md-max) { // < 1200px (medium laptop)\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Columns"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-scss"]},children:[{type:"text",value:".container\n.container-fluid\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-scss"]},children:[{type:"text",value:".col-xs-1\n.col-sm-1\n.col-md-1\n.col-lg-1\n.col-md-offset-1\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Mixins:"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-scss"]},children:[{type:"text",value:"@include make-xs-column(12);\n@include make-sm-column(6);\n@include make-md-column(3);\n@include make-lg-column(3);\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-scss"]},children:[{type:"text",value:"@include make-sm-column-offset(1);\n@include make-sm-column-push(1);\n@include make-sm-column-pull(1);\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Utilities"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-scss"]},children:[{type:"text",value:".pull-left\n.pull-right\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-scss"]},children:[{type:"text",value:".hidden-{xs,sm,md,lg}\n.visible-{xs,sm,md,lg}\n.visible-{xs,sm,md,lg,print}-{block,inline,inline-block}\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-scss"]},children:[{type:"text",value:".center-block  /* margin: auto */\n.clearfix\n.text-{center,left,right,justify,nowrap}\n.text-{lowercase,uppercase,capitalize}\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-scss"]},children:[{type:"text",value:".show\n.hidden\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Modal"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-html"]},children:[{type:"text",value:"<a data-toggle='modal' data-target='#new'>\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-haml"]},children:[{type:"text",value:"#new.modal.fade(role='dialog')\n  .modal-dialog // .modal-lg, .modal-sm\n    .modal-content\n      .modal-header\n        %h4.modal-title hello\n        %button.close{type: 'button', data: { dismiss: 'modal' }}\n          %span{'aria-hidden' => true}!= \"&times;\"\n          %span.sr-only Close\n      .modal-body\n        ...\n      .modal-footer\n        ...\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Modal via ajax (Rails)"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-haml"]},children:[{type:"text",value:"%button.btn{data: { |\n  toggle: 'modal', |\n  target: '#chooseTheme', |\n  remote: '/path/to/remote'}\n  Change Theme\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-haml"]},children:[{type:"text",value:".modal.fade#chooseTheme\n  .modal-dialog.modal-xl\n    .modal-content\n      .modal-header\n        %h4.modal-title Choose a theme\n\n      .modal-body\n        .spinner-panel.-lg\n          %i\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Tooltip"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-html"]},children:[{type:"text",value:"<span\n  data-toggle='tooltip'\n  title='tooltip'\n  data-placement='left|top|bottom|right'>\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"$(function () {\n  $('[data-toogle~=\"tooltip\"]').tooltip()\n})\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Input groups"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-haml"]},children:[{type:"text",value:".input-group\n    input.form-control(type='text')\n    .input-group-addon years\n"}]}]}],data:{quirksMode:!1}},frontmatter:{title:"Bootstrap",category:null,intro:null}},relatedPages:{edges:[{node:{id:"SitePage /datetime",context:{nodePath:"/datetime",category:"Default",title:"Date & time formats"}}},{node:{id:"SitePage /strftime",context:{nodePath:"/strftime",category:"Default",title:"strftime format"}}},{node:{id:"SitePage /go",context:{nodePath:"/go",category:"Default",title:"Go"}}},{node:{id:"SitePage /homebrew",context:{nodePath:"/homebrew",category:"Default",title:"Homebrew"}}},{node:{id:"SitePage /semver",context:{nodePath:"/semver",category:"Default",title:"Semver"}}},{node:{id:"SitePage /bulma",context:{nodePath:"/bulma",category:"Default",title:"Bulma"}}}]},topPages:{edges:[{node:{id:"SitePage /elixir",context:{nodePath:"/elixir",category:"Elixir",title:"Elixir"}}},{node:{id:"SitePage /es6",context:{nodePath:"/es6",category:"JavaScript",title:"ES2015+"}}},{node:{id:"SitePage /react",context:{nodePath:"/react",category:"React",title:"React.js"}}},{node:{id:"SitePage /vim",context:{nodePath:"/vim",category:"Vim",title:"Vim"}}},{node:{id:"SitePage /vimscript",context:{nodePath:"/vimscript",category:"Vim",title:"Vim scripting"}}},{node:{id:"SitePage /capybara",context:{nodePath:"/capybara",category:"Ruby libraries",title:"Capybara"}}}]},allPages:{totalCount:364}},pathContext:{node_id:"/home/rsc/Dev/@devhints/cheatsheets-ng/sheets/bootstrap.md absPath of file >>> MarkdownRemark",nodePath:"/bootstrap",nodeType:"sheet",title:"Bootstrap",category:"Default",weight:-1}}}});
//# sourceMappingURL=path---bootstrap-c4eaddbfa1dd86f7143c.js.map