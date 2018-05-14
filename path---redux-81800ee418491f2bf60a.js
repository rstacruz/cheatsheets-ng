webpackJsonp([0xfdc10d0728bd],{969:function(e,t){e.exports={data:{markdownRemark:{htmlAst:{type:"element",tagName:"div",properties:{},children:[{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Creating a store"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"import { createStore } from 'redux'\n"}]}]},{type:"comment",value:" {.-setup} "},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"// Reducer\nfunction counter (state = { value: 0 }, action) {\n  switch (action.type) {\n  case 'INCREMENT':\n    return { value: state.value + 1 }\n  case 'DECREMENT':\n    return { value: state.value - 1 }\n  default:\n    return state\n  }\n}\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"let store = createStore(counter)\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"// Optional - you can pass `initialState` as a second arg\nlet store = createStore(counter, { value: 0 })\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"A store is made from a reducer function, which takes the current "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"state"}]},{type:"text",value:", and\nreturns a new "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"state"}]},{type:"text",value:" depending on the "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"action"}]},{type:"text",value:" it was given."}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Using a store"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"let store = createStore(counter)\n"}]}]},{type:"comment",value:" {.-setup} "},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"// Dispatches an action; this changes the state\nstore.dispatch({ type: 'INCREMENT' })\nstore.dispatch({ type: 'DECREMENT' })\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"// Gets the current state\nstore.getState()\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"// Listens for changes\nstore.subscribe(() => { ... })\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Dispatch actions to change the store's state."}]},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"React Redux"}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Provider"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"import { Provider } from 'react-redux'\n"}]}]},{type:"comment",value:" {.-setup} "},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"React.render(\n  <Provider store={store}>\n    <App />\n  </Provider>, mountNode)\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"The "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"<Provider>"}]},{type:"text",value:" component makes the store available in your React components. You need this so you can use "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"connect()"}]},{type:"text",value:"."}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Mapping state"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"import { connect } from 'react-redux'\n"}]}]},{type:"comment",value:" {.-setup} "},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"// A functional React component\nfunction App ({ message, onMessageClick }) {\n  return (\n    <div onClick={() => onMessageClick('hello')}>\n      {message}\n    </div>\n  )\n}\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"// Maps `state` to `props`:\n// These will be added as props to the component.\nfunction mapState (state) {\n  return { message: state.message }\n}\n\n// Maps `dispatch` to `props`:\nfunction mapDispatch (dispatch) {\n  return {\n    onMessageClick (message) {\n      dispatch({ type: 'click', message })\n    }\n  }\n}\n\n// Connect them:\nexport default connect(mapState, mapDispatch)(App)\n"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Shorthand"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"export default connect(\n  (state) => ({\n    message: state.message\n  }),\n  (dispatch) => ({\n    onMessageClick: (message) => {\n      dispatch({ type: 'click', message })\n    }\n  })\n)(App)\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Same as above, but shorter."}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Combining reducers"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"const reducer = combineReducers({\n  counter, user, store\n})\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Combines multiple reducers into one reducer function. See: "},{type:"element",tagName:"a",properties:{href:"https://redux.js.org/docs/api/combineReducers.html"},children:[{type:"text",value:"combineReducers"}]},{type:"text",value:" "},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"(redux.js.org)"}]}]},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Middleware"}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Signature"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"// noop middleware\nconst logger = store => dispatch => action { dispatch(action) }\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"const logger = store => {\n  // This function runs on createStore().\n  // It returns a decorator for dispatch().\n\n  return dispatch => {\n    // Runs on createStore(), too.\n    // It returns a new dispatch() function\n\n    return action => {\n      // Runs on every dispatch()\n    }\n  }\n}\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Middlewares are simply decorators for "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"dispatch()"}]},{type:"text",value:" to allow you to take\ndifferent kinds of actions, and to perform different tasks when receiving\nactions."}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Applying middleware"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"const enhancer = applyMiddleware(logger, thunk, ...)\n"}]}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"const store = createStore(reducer, {}, enhancer)\n"}]}]},{type:"comment",value:' {data-line="1"} '},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"References"}]},{type:"comment",value:" {.-one-column} "},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://www.npmjs.com/package/redux"},children:[{type:"text",value:"Redux"}]},{type:"text",value:" "},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"(npmjs.com)"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://www.npmjs.com/package/react-redux"},children:[{type:"text",value:"React-redux"}]},{type:"text",value:" "},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"(npmjs.com)"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{},children:[{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"a",properties:{href:"http://redux.js.org/docs/basics/UsageWithReact.html"},children:[{type:"text",value:"Usage with React"}]},{type:"text",value:" "},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"(redux.js.org)"}]}]},{type:"comment",value:" {.-also-see} "}]},{type:"text",value:"\n"}]}]},frontmatter:{title:"Redux",category:"React",intro:null}},relatedPages:{edges:[{node:{id:"SitePage /react",context:{nodePath:"/react",category:"React",title:"React.js"}}},{node:{id:"SitePage /enzyme@2",context:{nodePath:"/enzyme@2",category:"React",title:"Enzyme v2"}}},{node:{id:"SitePage /enzyme",context:{nodePath:"/enzyme",category:"React",title:"Enzyme"}}},{node:{id:"SitePage /awesome-redux",context:{nodePath:"/awesome-redux",category:"React",title:"Awesome Redux"}}},{node:{id:"SitePage /flux",context:{nodePath:"/flux",category:"React",title:"Flux architecture"}}},{node:{id:"SitePage /react-router",context:{nodePath:"/react-router",category:"React",title:"React-router"}}}]},topPages:{edges:[{node:{id:"SitePage /elixir",context:{nodePath:"/elixir",category:"Elixir",title:"Elixir"}}},{node:{id:"SitePage /es6",context:{nodePath:"/es6",category:"JavaScript",title:"ES2015+"}}},{node:{id:"SitePage /react",context:{nodePath:"/react",category:"React",title:"React.js"}}},{node:{id:"SitePage /vim",context:{nodePath:"/vim",category:"Vim",title:"Vim"}}},{node:{id:"SitePage /vimscript",context:{nodePath:"/vimscript",category:"Vim",title:"Vim scripting"}}},{node:{id:"SitePage /capybara",context:{nodePath:"/capybara",category:"Ruby libraries",title:"Capybara"}}}]},allPages:{totalCount:364}},pathContext:{node_id:"/home/rsc/Dev/@devhints/cheatsheets-ng/sheets/redux.md absPath of file >>> MarkdownRemark",nodePath:"/redux",nodeType:"sheet",title:"Redux",category:"React",weight:-3,updated:"2018-01-17T00:00:00.000Z"}}}});
//# sourceMappingURL=path---redux-81800ee418491f2bf60a.js.map