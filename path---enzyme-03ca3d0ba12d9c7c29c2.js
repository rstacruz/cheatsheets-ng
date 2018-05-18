webpackJsonp([0x8f6c6082c05c],{789:function(e,t){e.exports={data:{markdownRemark:{htmlAst:{type:"element",tagName:"div",properties:{},children:[{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Getting started"}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Mounting"}]},{type:"comment",value:" {.-prime} "},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"import {shallow, mount} from 'enzyme'\n"}]}]},{type:"comment",value:" {.-setup} "},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"wrap = shallow(<MyComponent />)\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"wrap = mount(<MyComponent />)\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Shallow wrapping doesn't descend down to sub-components.\nA full mount also mounts sub-components."}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"See: "},{type:"element",tagName:"a",properties:{href:"http://airbnb.io/enzyme/docs/api/shallow.html"},children:[{type:"text",value:"Shallow rendering"}]},{type:"text",value:",\n"},{type:"element",tagName:"a",properties:{href:"http://airbnb.io/enzyme/docs/api/mount.html"},children:[{type:"text",value:"Full rendering"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Debugging"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"console.log(wrap.debug())\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Shows HTML for debugging purposes."}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"See: "},{type:"element",tagName:"a",properties:{href:"http://airbnb.io/enzyme/docs/api/ReactWrapper/debug.html"},children:[{type:"text",value:"debug()"}]}]},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Examples"}]},{type:"comment",value:" {.-three-column} "},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Basic example"}]},{type:"comment",value:" {.-prime} "},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"import { shallow } from 'enzyme'\nimport MyComponent from '../MyComponent'\n"}]}]},{type:"comment",value:" {.-setup} "},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"it('works', () => {\n  const wrap = shallow(\n    <MyComponent name='Groot' />\n  )\n\n  expect(wrap.text()).toEqual('I am Groot')\n})\n"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Props and state"}]},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Setting"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"wrap.setProps({ name: 'Moe' })\nwrap.setState({ show: true })\n"}]}]},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Asserting"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"expect(wrap.props('name')).toEqual('Moe')\nexpect(wrap.state('show')).toEqual(true)\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"expect('name' in wrap.props()).toEqual(true)\nexpect('show' in wrap.state()).toEqual(true)\n"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Matching elements"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"expect(\n  wrap.containsMatchingElement(\n    <span>I am groot</span>\n  )\n).toBeTruthy()\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"containsMatchingElement()"}]},{type:"text",value:" is probably the most useful assertion in Jest."}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Snapshots"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"expect(wrap).toMatchSnapshot()\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Be sure you've set up enzyme-to-json for snapshots (see "},{type:"element",tagName:"a",properties:{href:"#installing"},children:[{type:"text",value:"Installing"}]},{type:"text",value:" below)."}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Traversions"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"expect(\n  wrap.find('button').text()\n).toEqual('Submit')\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Use "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:".find()"}]},{type:"text",value:" to traverse down to nodes. It will return wrapper objects, too."}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Simulating events"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"wrap.find('input').simulate('click')\n"}]}]},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"With event object props"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"wrap.find('input').simulate('change', {\n  target: { value: 'hello' }\n})\n"}]}]},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Installing"}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Initial setup"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"npm install --save-dev enzyme \\\n  enzyme-adapter-react-16 \\\n  react-test-renderer\n"}]}]},{type:"comment",value:" {.-setup} "},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"test/setup.js"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"import Enzyme from 'enzyme'\nimport Adapter from 'enzyme-adapter-react-16'\n\nEnzyme.configure({ adapter: new Adapter() })\n"}]}]},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"package.json"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:'"jest": {\n  "setupFiles": [\n    "test/setup.js"\n  ]\n}\n'}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"This configures Enzyme for React v16, and Jest to automatically configure Enzyme for you. There are other adapters in Enzyme's installation instructions."}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"See: "},{type:"element",tagName:"a",properties:{href:"http://airbnb.io/enzyme/#installation"},children:[{type:"text",value:"Installation"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Jest snapshots"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"npm install --save-dev enzyme-to-json\n"}]}]},{type:"comment",value:" {.-setup} "},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"package.json"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:'"jest": {\n  "snapshotSerializers": [\n    "enzyme-to-json/serializer"\n  ]\n}\n'}]}]},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Test"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"it('works', () => {\n  wrap = mount(<MyComponent />)\n  expect(wrap).toMatchSnapshot()\n})\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Optional, but recommended: This allows you to use Enzyme wrappers with Jest snapshots."}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"See: "},{type:"element",tagName:"a",properties:{href:"https://www.npmjs.com/package/enzyme-to-json"},children:[{type:"text",value:"enzyme-to-json"}]}]},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"ReactWrapper"}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Traversing"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"wrap.find('button')   // → ReactWrapper\nwrap.filter('button') // → ReactWrapper\nwrap.not('span')      // → ReactWrapper (inverse of filter())\nwrap.children()       // → ReactWrapper\nwrap.parent()         // → ReactWrapper\nwrap.closest('div')   // → ReactWrapper\nwrap.childAt(0)       // → ReactWrapper\nwrap.at(0)            // → ReactWrapper\nwrap.first()          // → ReactWrapper\nwrap.last()           // → ReactWrapper\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"wrap.get(0)           // → ReactElement\nwrap.getNode()        // → ReactElement\nwrap.getNodes()       // → Array<ReactElement>\nwrap.getDOMNode()     // → DOMComponent\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"See: "},{type:"element",tagName:"a",properties:{href:"http://airbnb.io/enzyme/docs/api/mount.html"},children:[{type:"text",value:"Full rendering API"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Actions"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"wrap.simulate('click')\n"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"React components"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"wrap.setState({ ··· })\nwrap.setProps({ ··· })\nwrap.setContext({ ··· })\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"wrap.state()         // get full state\nwrap.props()         // get full props\nwrap.context()       // get full context\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"wrap.state('key')    // → any\nwrap.props('key')    // → any\nwrap.context('key')  // → any\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"wrap.instance()      // → ReactComponent\n"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Mount"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"wrap.mount()\nwrap.unmount()\nwrap.update()      // calls forceUpdate()\n"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Tests"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"wrap.debug()               // → string\nwrap.html()                // → string\nwrap.text()                // → string\nwrap.type()                // → string | function\nwrap.name()                // → string\nwrap.is('.classname')      // → boolean\nwrap.hasClass('class')     // → boolean\nwrap.exists()              // → boolean\nwrap.contains(<div />)     // → boolean\nwrap.contains([ <div /> ]) // → boolean\nwrap.some('.child')        // → boolean\n\nwrap.someWhere(n => n.hasClass('foo'))\n\nwrap.containsMatchingElement(<div />)         // → boolean\nwrap.containsAllMatchingElements([ <div /> ]) // → boolean\nwrap.containsAnyMatchingElements([ <div /> ]) // → boolean\n"}]}]},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"References"}]},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://airbnb.io/enzyme"},children:[{type:"text",value:"Enzyme website"}]},{type:"text",value:" "},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"(airbnb.io)"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"./enzyme@2"},children:[{type:"text",value:"Enzyme v2 cheatsheet"}]},{type:"text",value:" "},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"(devhints.io)"}]},{type:"text",value:" (old version)"}]},{type:"text",value:"\n"}]}]},frontmatter:{title:"Enzyme",category:"React",intro:"[Enzyme](http://airbnb.io/enzyme) lets you write unit tests for React components. This guide covers Enzyme 3.x.\n"}},relatedPages:{edges:[{node:{id:"SitePage /react",context:{nodePath:"/react",category:"React",title:"React.js"}}},{node:{id:"SitePage /redux",context:{nodePath:"/redux",category:"React",title:"Redux"}}},{node:{id:"SitePage /enzyme@2",context:{nodePath:"/enzyme@2",category:"React",title:"Enzyme v2"}}},{node:{id:"SitePage /awesome-redux",context:{nodePath:"/awesome-redux",category:"React",title:"Awesome Redux"}}},{node:{id:"SitePage /flux",context:{nodePath:"/flux",category:"React",title:"Flux architecture"}}},{node:{id:"SitePage /react-router",context:{nodePath:"/react-router",category:"React",title:"React-router"}}}]},topPages:{edges:[{node:{id:"SitePage /elixir",context:{nodePath:"/elixir",category:"Elixir",title:"Elixir"}}},{node:{id:"SitePage /es6",context:{nodePath:"/es6",category:"JavaScript",title:"ES2015+"}}},{node:{id:"SitePage /react",context:{nodePath:"/react",category:"React",title:"React.js"}}},{node:{id:"SitePage /vim",context:{nodePath:"/vim",category:"Vim",title:"Vim"}}},{node:{id:"SitePage /vimscript",context:{nodePath:"/vimscript",category:"Vim",title:"Vim scripting"}}},{node:{id:"SitePage /capybara",context:{nodePath:"/capybara",category:"Ruby libraries",title:"Capybara"}}}]},allPages:{totalCount:363}},pathContext:{node_id:"/home/rsc/Dev/@devhints/cheatsheets-ng/sheets/enzyme.md absPath of file >>> MarkdownRemark",nodePath:"/enzyme",nodeType:"sheet",title:"Enzyme",category:"React",weight:-1,updated:"2017-10-12T00:00:00.000Z"}}}});
//# sourceMappingURL=path---enzyme-03ca3d0ba12d9c7c29c2.js.map