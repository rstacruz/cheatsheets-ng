webpackJsonp([47760306451101],{740:function(e,t){e.exports={data:{markdownRemark:{htmlAst:{type:"root",children:[{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Loading"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:"image = ChunkyPNG::Image.from_file('file.png')\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Alternate ways"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:"image = ChunkyPNG::Image.from_blob(File.read('file.png'))\nimage = ChunkyPNG::Image.from_io(io) \n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Loads from "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"file.png"}]},{type:"text",value:"."}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Saving"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:"image.save('filename.png')\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Alternate ways"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:"File.open('newfile.png', 'wb') { |io| image.write(io) }\nbinary_string = image.to_blob\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Writes an image to "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"newfile.png"}]},{type:"text",value:"."}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Drawing"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:"image[0, 0] = ChunkyPNG::Color.rgba(255, 0,0, 128)\nimage.line(1, 1, 10, 1, ChunkyPNG::Color.from_hex('#aa007f'))\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Canvas"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:"crop(x, y, w, h)\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Transforms"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-ruby"]},children:[{type:"text",value:"new_image = image.flip_horizontally.rotate_right\n"}]}]}],data:{quirksMode:!1}},frontmatter:{title:"Chunky PNG",category:"Ruby libraries",intro:null}},relatedPages:{edges:[{node:{id:"SitePage /capybara",context:{nodePath:"/capybara",category:"Ruby libraries",title:"Capybara"}}},{node:{id:"SitePage /factory_bot",context:{nodePath:"/factory_bot",category:"Ruby libraries",title:"Factory Bot"}}},{node:{id:"SitePage /meta-tags",context:{nodePath:"/meta-tags",category:"Ruby libraries",title:"Meta-tags gem"}}},{node:{id:"SitePage /ronn",context:{nodePath:"/ronn",category:"Ruby libraries",title:"Ronn"}}},{node:{id:"SitePage /slim",context:{nodePath:"/slim",category:"Ruby libraries",title:"Slim"}}},{node:{id:"SitePage /do",context:{nodePath:"/do",category:"Ruby libraries",title:"Do gem"}}}]},topPages:{edges:[{node:{id:"SitePage /elixir",context:{nodePath:"/elixir",category:"Elixir",title:"Elixir"}}},{node:{id:"SitePage /es6",context:{nodePath:"/es6",category:"JavaScript",title:"ES2015+"}}},{node:{id:"SitePage /react",context:{nodePath:"/react",category:"React",title:"React.js"}}},{node:{id:"SitePage /vim",context:{nodePath:"/vim",category:"Vim",title:"Vim"}}},{node:{id:"SitePage /vimscript",context:{nodePath:"/vimscript",category:"Vim",title:"Vim scripting"}}},{node:{id:"SitePage /capybara",context:{nodePath:"/capybara",category:"Ruby libraries",title:"Capybara"}}}]},allPages:{totalCount:364}},pathContext:{node_id:"/home/rsc/Dev/@devhints/cheatsheets-ng/sheets/chunky_png.md absPath of file >>> MarkdownRemark",nodePath:"/chunky_png",nodeType:"sheet",title:"Chunky PNG",category:"Ruby libraries",weight:0,updated:null}}}});
//# sourceMappingURL=path---chunky-png-ec2bff50dcf61ac061eb.js.map