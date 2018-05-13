webpackJsonp([0xebe1fb6795f8],{991:function(e,t){e.exports={data:{markdownRemark:{htmlAst:{type:"element",tagName:"div",properties:{},children:[{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Basics"}]},{type:"comment",value:" {.-three-column} "},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Variables"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-scss"]},children:[{type:"text",value:"$red: #833;\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-scss"]},children:[{type:"text",value:"body {\n  color: $red;\n}\n"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Nesting"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-scss"]},children:[{type:"text",value:".markdown-body {\n  p {\n    color: blue;\n  }\n\n  &:hover {\n    color: red;\n  }\n}\n"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Comments"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-scss"]},children:[{type:"text",value:"/* Block comments */\n// Line comments\n"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Mixins"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-scss"]},children:[{type:"text",value:"@mixin heading-font {\n  font-family: sans-serif;\n  font-weight: bold;\n}\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-scss"]},children:[{type:"text",value:"h1 {\n  @include heading-font;\n}\n"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Mixin properties"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-scss"]},children:[{type:"text",value:"@mixin font-size($n) {\n  font-size: $n * 1.2em;\n}\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-scss"]},children:[{type:"text",value:"body {\n  @include font-size(2);\n}\n"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Extend"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-scss"]},children:[{type:"text",value:".button {\n  ···\n}\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-scss"]},children:[{type:"text",value:".push-button {\n  @extend .button;\n}\n"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Composing"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-scss"]},children:[{type:"text",value:"@import './other_sass_file`;\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"The "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:".scss"}]},{type:"text",value:" or "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:".sass"}]},{type:"text",value:" extension is optional."}]},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Color functions"}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"rgba"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-scss"]},children:[{type:"text",value:"rgb(100, 120, 140)\nrgba(100, 120, 140, .5)\nrgba($color, .5)\n"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Mixing"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-scss"]},children:[{type:"text",value:"mix($a, $b, 10%)   // 10% a, 90% b\n"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Modifying HSLA"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-scss"]},children:[{type:"text",value:"darken($color, 5%)\nlighten($color, 5%)\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-scss"]},children:[{type:"text",value:"saturate($color, 5%)\ndesaturate($color, 5%)\ngrayscale($color)\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-scss"]},children:[{type:"text",value:"adjust-hue($color, 15deg)\ncompliment($color)    // like adjust-hue(_, 180deg)\ninvert($color)\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-scss"]},children:[{type:"text",value:"fade-in($color, .5)   // aka opacify()\nfade-out($color, .5)  // aka transparentize() - halves the opacity\nrgba($color, .5)      // sets alpha to .5\n"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Getting individual values"}]},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"HSLA"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-scss"]},children:[{type:"text",value:"hue($color)         // → 0deg..360deg\nsaturation($color)  // → 0%..100%\nlightness($color)   // → 0%..100%\nalpha($color)       // → 0..1 (aka opacity())\n"}]}]},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"RGB"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"red($color)         // → 0..255\ngreen($color)\nblue($color)\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"See: "},{type:"element",tagName:"a",properties:{href:"http://sass-lang.com/documentation/Sass/Script/Functions.html#hue-instance_method"},children:[{type:"text",value:"hue()"}]},{type:"text",value:", "},{type:"element",tagName:"a",properties:{href:"http://sass-lang.com/documentation/Sass/Script/Functions.html#red-instance_method"},children:[{type:"text",value:"red()"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Adjustments"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-scss"]},children:[{type:"text",value:"// Changes by fixed amounts\nadjust-color($color, $blue: 5)\nadjust-color($color, $lightness: -30%)   // like darken(_, 30%)\nadjust-color($color, $alpha: -0.4)       // like fade-out(_, .4)\nadjust-color($color, $hue: 30deg)        // like adjust-hue(_, 15deg)\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-scss"]},children:[{type:"text",value:"// Changes via percentage\nscale-color($color, $lightness: 50%)\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-scss"]},children:[{type:"text",value:"// Changes one property completely\nchange-color($color, $hue: 180deg)\nchange-color($color, $blue: 250)\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Supported: "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"$red"}]},{type:"text",value:" "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"$green"}]},{type:"text",value:" "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"$blue"}]},{type:"text",value:" "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"$hue"}]},{type:"text",value:" "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"$saturation"}]},{type:"text",value:" "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"$lightness"}]},{type:"text",value:" "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"$alpha"}]}]},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Other functions"}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Strings"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-scss"]},children:[{type:"text",value:"unquote('hello')\nquote(hello)\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-scss"]},children:[{type:"text",value:"to-upper-case(hello)\nto-lower-case(hello)\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-scss"]},children:[{type:"text",value:'str-length(hello world)\nstr-slice(hello, 2, 5)      // "ello" - it\'s 1-based, not 0-based\nstr-insert("abcd", "X", 1)  // "Xabcd"\n'}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Units"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-scss"]},children:[{type:"text",value:"unit(3em)        // 'em'\nunitless(100px)  // false\n"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Numbers"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-scss"]},children:[{type:"text",value:"floor(3.5)\nceil(3.5)\nround(3.5)\nabs(3.5)\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-scss"]},children:[{type:"text",value:"min(1, 2, 3)\nmax(1, 2, 3)\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-scss"]},children:[{type:"text",value:"percentage(.5)   // 50%\nrandom(3)        // 0..3\n"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Misc"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-scss"]},children:[{type:"text",value:"variable-exists(red)    // checks for $red\nmixin-exists(red-text)  // checks for @mixin red-text\nfunction-exists(redify)\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-scss"]},children:[{type:"text",value:"global-variable-exists(red)\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-scss"]},children:[{type:"text",value:"selector-append('.menu', 'li', 'a')   // .menu li a\nselector-nest('.menu', '&:hover li')  // .menu:hover li\nselector-extend(...)\nselector-parse(...)\nselector-replace(...)\nselector-unify(...)\n"}]}]},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Feature checks"}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Feature check"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-scss"]},children:[{type:"text",value:"feature-exists(global-variable-shadowing)\n"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Features"}]},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"global-variable-shadowing"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"extend-selector-pseudoclass"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"units-level-3"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"at-error"}]},{type:"text",value:"\n"}]},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Loops"}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"For loops"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-scss"]},children:[{type:"text",value:"@for $i from 1 through 4 {\n  .item-#{$i} { left: 20px * $i; }\n}\n"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Each loops (simple)"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-scss"]},children:[{type:"text",value:"$menu-items: home about services contact;\n\n@each $item in $menu-items {\n  .photo-#{$item} {\n    background: url('images/#{$item}.jpg');\n  }\n}\n"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Each loops (nested)"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-scss"]},children:[{type:"text",value:"$backgrounds: (home, 'home.jpg'), (about, 'about.jpg');\n\n@each $id, $image in $backgrounds {\n  .photo-#{$id} {\n    background: url($image);\n  }\n}\n"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"While loops"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-scss"]},children:[{type:"text",value:"$i: 6;\n@while $i > 0 {\n  .item-#{$i} { width: 2em * $i; }\n  $i: $i - 2;\n}\n"}]}]},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Other features"}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Conditionals"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-scss"]},children:[{type:"text",value:"@if $position == 'left' {\n   position: absolute;\n   left: 0;\n}\n@else {\n   position: static;\n}\n"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Interpolation"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-scss"]},children:[{type:"text",value:'.#{$klass} { ... }      // Class\ncall($function-name)    // Functions\n\n@media #{$tablet}\nfont: #{$size}/#{$line-height}\nurl("#{$background}.jpg")\n'}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Lists"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-scss"]},children:[{type:"text",value:"$list: (a b c);\n\nnth($list, 1)  // starts with 1\nlength($list)\n\n@each $item in $list { ... }\n"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Maps"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-scss"]},children:[{type:"text",value:"$map: (key1: value1, key2: value2, key3: value3);\n\nmap-get($map, key1)\n"}]}]},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"See also"}]},{type:"comment",value:" {.-one-column} "},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"http://sass-lang.com/documentation/Sass/Script/Functions.html"},children:[{type:"text",value:"http://sass-lang.com/documentation/Sass/Script/Functions.html"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"http://sass-lang.com/documentation/file.SASS_REFERENCE.html#sassscript"},children:[{type:"text",value:"http://sass-lang.com/documentation/file.SASS_REFERENCE.html#sassscript"}]}]},{type:"text",value:"\n"}]}]},frontmatter:{title:"Sass",category:"CSS",intro:null}},relatedPages:{edges:[{node:{id:"SitePage /css-flexbox",context:{nodePath:"/css-flexbox",category:"CSS",title:"CSS flexbox"}}},{node:{id:"SitePage /css-system-font-stack",context:{nodePath:"/css-system-font-stack",category:"CSS",title:"CSS system fonts"}}},{node:{id:"SitePage /cssnext",context:{nodePath:"/cssnext",category:"CSS",title:"cssnext"}}},{node:{id:"SitePage /stylus",context:{nodePath:"/stylus",category:"CSS",title:"Stylus"}}},{node:{id:"SitePage /css",context:{nodePath:"/css",category:"CSS",title:"CSS"}}},{node:{id:"SitePage /css-antialias",context:{nodePath:"/css-antialias",category:"CSS",title:"CSS antialiasing"}}}]},topPages:{edges:[{node:{id:"SitePage /elixir",context:{nodePath:"/elixir",category:"Elixir",title:"Elixir"}}},{node:{id:"SitePage /es6",context:{nodePath:"/es6",category:"JavaScript",title:"ES2015+"}}},{node:{id:"SitePage /react",context:{nodePath:"/react",category:"React",title:"React.js"}}},{node:{id:"SitePage /vim",context:{nodePath:"/vim",category:"Vim",title:"Vim"}}},{node:{id:"SitePage /vimscript",context:{nodePath:"/vimscript",category:"Vim",title:"Vim scripting"}}},{node:{id:"SitePage /capybara",context:{nodePath:"/capybara",category:"Ruby libraries",title:"Capybara"}}}]},allPages:{totalCount:364}},pathContext:{node_id:"/home/rsc/Dev/@devhints/cheatsheets-ng/sheets/sass.md absPath of file >>> MarkdownRemark",nodePath:"/sass",nodeType:"sheet",title:"Sass",category:"CSS",weight:-5}}}});
//# sourceMappingURL=path---sass-939ab442403dfc7d9893.js.map