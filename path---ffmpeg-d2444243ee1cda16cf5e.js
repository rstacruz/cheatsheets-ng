webpackJsonp([0xb2fb359e8c37],{801:function(e,t){e.exports={data:{markdownRemark:{htmlAst:{type:"root",children:[{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Common switches"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:"-codecs          # list codecs\n-c:v             # video codec (-vcodec) - 'copy' to copy stream\n-c:a             # audio codec (-acodec)\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:"-fs SIZE         # limit file size (bytes)\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Bitrate"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:"-b:v 1M          # video bitrate (1M = 1Mbit/s)\n-b:a 1M          # audio bitrate\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Video"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:"-aspect RATIO    # aspect ratio (4:3, 16:9, or 1.25)\n-r RATE          # frame rate per sec\n-s WIDTHxHEIGHT  # frame size\n-vn              # no video\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Audio"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:"-aq QUALITY      # audio quality (codec-specific)\n-ar 44100        # audio sample rate (hz)\n-ac 1            # audio channels (1=mono, 2=stereo)\n-an              # no audio\n-vol N           # volume (256=normal)\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Example"}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Ringtone conversion using ffmpeg"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:"ffmpeg -i foo.mp3 -ac 1 -ab 128000 -f mp4 -acodec libfaac -y target.m4r\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"To web"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:"# no audio\nffmpeg -i input.mov -vcodec h264   -an -strict -2 output.mp4\nffmpeg -i input.mov -vcodec libvpx -an output.webm\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:"ffmpeg -i input.mov -vcodec h264 -acodec aac -strict -2 output.mp4\nffmpeg -i input.mov -vcodec libvpx -acodec libvorbis output.webm\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-html"]},children:[{type:"text",value:'<video width="320" height="240" controls>\n  <source src="movie.mp4" type=\'video/mp4\'></source>\n  <source src="movie.webm" type=\'video/ogg\'></source>\n</video>\n'}]}]}],data:{quirksMode:!1}},frontmatter:{title:"ffmpeg",category:"CLI",intro:null}},relatedPages:{edges:[{node:{id:"SitePage /cron",context:{nodePath:"/cron",category:"CLI",title:"Cron"}}},{node:{id:"SitePage /httpie",context:{nodePath:"/httpie",category:"CLI",title:"httpie"}}},{node:{id:"SitePage /adb",context:{nodePath:"/adb",category:"CLI",title:"adb (Android Debug Bridge)"}}},{node:{id:"SitePage /composer",context:{nodePath:"/composer",category:"CLI",title:"composer"}}},{node:{id:"SitePage /fish-shell",context:{nodePath:"/fish-shell",category:"CLI",title:"Fish shell"}}},{node:{id:"SitePage /rsync",context:{nodePath:"/rsync",category:"CLI",title:"Rsync"}}}]},topPages:{edges:[{node:{id:"SitePage /elixir",context:{nodePath:"/elixir",category:"Elixir",title:"Elixir"}}},{node:{id:"SitePage /es6",context:{nodePath:"/es6",category:"JavaScript",title:"ES2015+"}}},{node:{id:"SitePage /react",context:{nodePath:"/react",category:"React",title:"React.js"}}},{node:{id:"SitePage /vim",context:{nodePath:"/vim",category:"Vim",title:"Vim"}}},{node:{id:"SitePage /vimscript",context:{nodePath:"/vimscript",category:"Vim",title:"Vim scripting"}}},{node:{id:"SitePage /capybara",context:{nodePath:"/capybara",category:"Ruby libraries",title:"Capybara"}}}]},allPages:{totalCount:364}},pathContext:{node_id:"/home/rsc/Dev/@devhints/cheatsheets-ng/sheets/ffmpeg.md absPath of file >>> MarkdownRemark",nodePath:"/ffmpeg",nodeType:"sheet",title:"ffmpeg",category:"CLI",weight:0}}}});
//# sourceMappingURL=path---ffmpeg-d2444243ee1cda16cf5e.js.map