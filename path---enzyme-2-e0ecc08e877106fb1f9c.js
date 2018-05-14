webpackJsonp([32828126340215],{780:function(e,t){e.exports={data:{markdownRemark:{htmlAst:{type:"element",tagName:"div",properties:{},children:[{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Getting started"}]},{type:"comment",value:" {.-three-column} "},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Mounting"}]},{type:"comment",value:" {.-prime} "},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"import {shallow, mount} from 'enzyme'\n"}]}]},{type:"comment",value:" {.-setup} "},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"wrap = shallow(<MyComponent />)\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"wrap = mount(<MyComponent />)\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Shallow wrapping doesn't descend down to sub-components.\nA full mount also mounts sub-components.\nSee: "},{type:"element",tagName:"a",properties:{href:"http://airbnb.io/enzyme/docs/api/shallow.html"},children:[{type:"text",value:"Shallow rendering"}]},{type:"text",value:",\n"},{type:"element",tagName:"a",properties:{href:"http://airbnb.io/enzyme/docs/api/mount.html"},children:[{type:"text",value:"Full rendering"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Jest"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"import toJson from 'enzyme-to-json'\n"}]}]},{type:"comment",value:" {.-setup} "},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"it('works', () => {\n  wrap = mount(<MyComponent />)\n  expect(toJson(wrap)).toMatchSnapshot()\n})\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Converts an Enzyme wrapper to a format compatible with Jest snapshots. See: "},{type:"element",tagName:"a",properties:{href:"https://www.npmjs.com/package/enzyme-to-json"},children:[{type:"text",value:"enzyme-to-json"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Debugging"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"console.log(wrap.debug())\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Shows HTML for debugging purposes. See: "},{type:"element",tagName:"a",properties:{href:"http://airbnb.io/enzyme/docs/api/ReactWrapper/debug.html"},children:[{type:"text",value:"debug()"}]}]},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"ReactWrapper"}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Traversing"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"wrap.find('button')   // => ReactWrapper\nwrap.filter('button') // => ReactWrapper\nwrap.not('span')      // => ReactWrapper (inverse of filter())\nwrap.children()       // => ReactWrapper\nwrap.parent()         // => ReactWrapper\nwrap.closest('div')   // => ReactWrapper\nwrap.childAt(0)       // => ReactWrapper\nwrap.at(0)            // => ReactWrapper\nwrap.first()          // => ReactWrapper\nwrap.last()           // => ReactWrapper\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"wrap.get(0)           // => ReactElement\nwrap.getNode()        // => ReactElement\nwrap.getNodes()       // => Array<ReactElement>\nwrap.getDOMNode()     // => DOMComponent\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"See: "},{type:"element",tagName:"a",properties:{href:"http://airbnb.io/enzyme/docs/api/mount.html"},children:[{type:"text",value:"Full rendering API"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Actions"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"wrap.simulate('click')\n"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"React components"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"wrap.setState({ ... })\nwrap.setProps({ ... })\nwrap.setContext({ ... })\n\nwrap.state()            // => Any (get state)\nwrap.props()            // => object (get props)\nwrap.context()          // => Any (get context)\n\nwrap.instance()         // => ReactComponent\n"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Mount"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"wrap.mount()\nwrap.unmount()\nwrap.update()      // calls forceUpdate()\n"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Tests"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"wrap.debug()               // => string\nwrap.html()                // => string\nwrap.text()                // => string\nwrap.type()                // => string | function\nwrap.name()                // => string\nwrap.is('.classname')      // => boolean\nwrap.hasClass('class')     // => boolean\nwrap.exists()              // => boolean\nwrap.contains(<div />)     // => boolean\nwrap.contains([ <div /> ]) // => boolean\n\nwrap.containsMatchingElement(<div />)         // => boolean\nwrap.containsAllMatchingElements([ <div /> ]) // => boolean\nwrap.containsAnyMatchingElements([ <div /> ]) // => boolean\n"}]}]},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"References"}]},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://airbnb.io/enzyme"},children:[{type:"text",value:"https://airbnb.io/enzyme"}]}]},{type:"text",value:"\n"}]}]},frontmatter:{title:"Enzyme v2",category:"React",intro:"[Enzyme](http://airbnb.io/enzyme) lets you write unit tests for React components. This guide covers Enzyme 2.x.\n"}},relatedPages:{edges:[{node:{id:"SitePage /react",context:{nodePath:"/react",category:"React",title:"React.js"}}},{node:{id:"SitePage /redux",context:{nodePath:"/redux",category:"React",title:"Redux"}}},{node:{id:"SitePage /enzyme",context:{nodePath:"/enzyme",category:"React",title:"Enzyme"}}},{node:{id:"SitePage /awesome-redux",context:{nodePath:"/awesome-redux",category:"React",title:"Awesome Redux"}}},{node:{id:"SitePage /flux",context:{nodePath:"/flux",category:"React",title:"Flux architecture"}}},{node:{id:"SitePage /react-router",context:{nodePath:"/react-router",category:"React",title:"React-router"}}}]},topPages:{edges:[{node:{id:"SitePage /elixir",context:{nodePath:"/elixir",category:"Elixir",title:"Elixir"}}},{node:{id:"SitePage /es6",context:{nodePath:"/es6",category:"JavaScript",title:"ES2015+"}}},{node:{id:"SitePage /react",context:{nodePath:"/react",category:"React",title:"React.js"}}},{node:{id:"SitePage /vim",context:{nodePath:"/vim",category:"Vim",title:"Vim"}}},{node:{id:"SitePage /vimscript",context:{nodePath:"/vimscript",category:"Vim",title:"Vim scripting"}}},{node:{id:"SitePage /capybara",context:{nodePath:"/capybara",category:"Ruby libraries",title:"Capybara"}}}]},allPages:{totalCount:364}},pathContext:{node_id:"/home/rsc/Dev/@devhints/cheatsheets-ng/sheets/enzyme@2.md absPath of file >>> MarkdownRemark",nodePath:"/enzyme@2",nodeType:"sheet",title:"Enzyme v2",category:"React",weight:-1,updated:"2017-09-14T00:00:00.000Z"}}}});
//# sourceMappingURL=path---enzyme-2-e0ecc08e877106fb1f9c.js.map