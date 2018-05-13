webpackJsonp([0x735db24a6d96],{922:function(e,t){e.exports={data:{markdownRemark:{htmlAst:{type:"root",children:[{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Locations of startup items"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"~/Library/LaunchAgents\n/System/Library/LaunchAgents/\n/System/Library/LaunchDaemons/\n/Library/LaunchAgents/\n/Library/LaunchDaemons/\n\n__Running `launchctl list` show you what launch scripts are currently loaded.__\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Hide desktop icons"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"defaults write com.apple.finder CreateDesktop -bool false\nkillall Finder\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Auto-hide other windows on dock switch"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"defaults write com.apple.dock single-app -bool TRUE\nkillall Dock\n\ndefaults delete com.apple.dock single-app\nkillall Dock\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Flush DNS"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"killall -HUP mDNSResponder   # 10.8+\ndscacheutil -flushcache      # 10.7 below\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Turn off spotlight"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"sudo vim /etc/hostconfig  # change SPOTLIGHT=-YES- to SPOTLIGHT=-NO-\nmdutil -i off /\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Turn on/off proxy"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"sudo networksetup -setsocksfirewallproxystate Wi-Fi off\nsudo networksetup -setsocksfirewallproxystate Ethernet off\nsudo networksetup -setsocksfirewallproxy Wi-Fi 127.0.0.1 9999\nsudo networksetup -setsocksfirewallproxy Ethernet 127.0.0.1 9999\nsudo networksetup -setsocksfirewallproxystate Wi-Fi on\nsudo networksetup -setsocksfirewallproxystate Ethernet on\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"System utils"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"networksetup"}]},{type:"text",value:" - Configure network (ip, dns, proxy, etc)"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"tmutils"}]},{type:"text",value:" - Configure Time Machine (enable/disable, exclude path, delete snapshots, etc)"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"mdutils"}]},{type:"text",value:" - Manage Spotlight (enable/disable, exclude, etc)"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"diskutil"}]},{type:"text",value:" - Controll disk (format, eject, unmount, etc)"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"launchctl"}]},{type:"text",value:' - Controll running "agents"'}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Useful utils"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"open"}]},{type:"text",value:" - open files and directories ("},{type:"element",tagName:"a",properties:{href:"https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man1/open.1.html"},children:[{type:"text",value:"man"}]},{type:"text",value:")"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"textutil"}]},{type:"text",value:" - manipulate text files of various formats ("},{type:"element",tagName:"a",properties:{href:"https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man1/textutil.1.html"},children:[{type:"text",value:"man"}]},{type:"text",value:")"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"pbcopy"}]},{type:"text",value:" / "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"pbpaste"}]},{type:"text",value:" - provide copying and pasting to the pasteboard ("},{type:"element",tagName:"a",properties:{href:"https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man1/pbcopy.1.html"},children:[{type:"text",value:"man"}]},{type:"text",value:")"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"sips"}]},{type:"text",value:" - scriptable image processing system ("},{type:"element",tagName:"a",properties:{href:"https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man1/sips.1.html"},children:[{type:"text",value:"man"}]},{type:"text",value:")"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"mdfind"}]},{type:"text",value:" - finds files matching a given query ("},{type:"element",tagName:"a",properties:{href:"https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man1/mdfind.1.html"},children:[{type:"text",value:"man"}]},{type:"text",value:")"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"screencapture"}]},{type:"text",value:" - capture images from the screen ("},{type:"element",tagName:"a",properties:{href:"https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man1/screencapture.1.html"},children:[{type:"text",value:"man"}]},{type:"text",value:")"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"defaults"}]},{type:"text",value:" - access the Mac OS X user defaults system ("},{type:"element",tagName:"a",properties:{href:"https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man1/defaults.1.html"},children:[{type:"text",value:"man"}]},{type:"text",value:")"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"/usr/libexec/airportd"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"scutil"}]}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:" "},{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"INFO: "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"brew"}]},{type:"text",value:" ("},{type:"element",tagName:"a",properties:{href:"https://brew.sh"},children:[{type:"text",value:"link"}]},{type:"text",value:") is highly recomended utility"}]}]}],data:{quirksMode:!1}},frontmatter:{title:"OS X",category:null,intro:null}},relatedPages:{edges:[{node:{id:"SitePage /datetime",context:{nodePath:"/datetime",category:"Default",title:"Date & time formats"}}},{node:{id:"SitePage /strftime",context:{nodePath:"/strftime",category:"Default",title:"strftime format"}}},{node:{id:"SitePage /go",context:{nodePath:"/go",category:"Default",title:"Go"}}},{node:{id:"SitePage /homebrew",context:{nodePath:"/homebrew",category:"Default",title:"Homebrew"}}},{node:{id:"SitePage /semver",context:{nodePath:"/semver",category:"Default",title:"Semver"}}},{node:{id:"SitePage /bootstrap",context:{nodePath:"/bootstrap",category:"Default",title:"Bootstrap"}}}]},topPages:{edges:[{node:{id:"SitePage /elixir",context:{nodePath:"/elixir",category:"Elixir",title:"Elixir"}}},{node:{id:"SitePage /es6",context:{nodePath:"/es6",category:"JavaScript",title:"ES2015+"}}},{node:{id:"SitePage /react",context:{nodePath:"/react",category:"React",title:"React.js"}}},{node:{id:"SitePage /vim",context:{nodePath:"/vim",category:"Vim",title:"Vim"}}},{node:{id:"SitePage /vimscript",context:{nodePath:"/vimscript",category:"Vim",title:"Vim scripting"}}},{node:{id:"SitePage /capybara",context:{nodePath:"/capybara",category:"Ruby libraries",title:"Capybara"}}}]},allPages:{totalCount:364}},pathContext:{node_id:"/home/rsc/Dev/@devhints/cheatsheets-ng/sheets/osx.md absPath of file >>> MarkdownRemark",nodePath:"/osx",nodeType:"sheet",title:"OS X",category:"Default",weight:0}}}});
//# sourceMappingURL=path---osx-d58e9ccf571755767203.js.map