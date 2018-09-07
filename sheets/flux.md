---
title: Flux architecture
category: React
---

### Architecture

* **Dispatchers** receive _actions_ that get dispatched to its listeners.

* **Stores** are objects that store data, usually changed from a dispatcher listener.

* **Views** are React components that listen to Store changes, or emit _actions_ to the dispatcher.

## Dispatcher

### Pub-sub

[A dispatcher][dispatcher] emits events (`.dispatch()`) to its listeners (`.register(fn)`).

```js
var Dispatcher = require('flux').Dispatcher

d = new Dispatcher()

// send
d.dispatch({ action: 'edit' /*...*/ })

// receive
token = d.register(payload => {
  // payload.action === 'edit'
})
```

### Ensuring proper order

With multiple listeners, you can ensure one is fired after another using `.waitFor()`.

```js
token1 = d.register(/*...*/)
```

```js
token2 = d.register(payload => {
  // ensure receiver 1 is fired before this
  d.waitFor([token1])

  // process here
})
```

### Subclassing

[Object.assign](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign) is the preferred way to subclass Dispatcher (think `$.extend`).<br>
You can also make _action creators_, which are shortcuts for `dispatch()`.

```js
var Dispatcher = require('flux').Dispatcher
var assign = require('object-assign')

var AppDispatcher = assign({}, Dispatcher.prototype, {
  // action creator
  handleViewAction(action) {
    this.dispatch({
      source: 'VIEW_ACTION',
      action: action
    })
  }
})
```

---

## Stores

### Plain objects

Stores are just like objects.

```js
var TodoStore = { list: [] }
```

### Events

Sometimes they're eventemitters, too. Usually it's used to emit `change` events for views to pick up.

```js
var TodoStore = assign({}, EventEmitter.prototype, {
  /*...*/
});

TodoStore.emit('change');
TodoStore.on('change', function () { ... });
```

### Model logic

Logic can sometimes belong in stores.

```js
{
  isAllActive() {
    return this.list.every(item => item.active);
  }
}
```

## Stores and dispatchers

### Instantiate

Make a Dispatcher and Stores.

```js
const d = new Dispatcher()
const TabStore = { tab: 'home' }
```

### Updating data

Dispatch events to alter the store.

```js
d.dispatch({ action: 'tab.change', tab: 'timeline' })

d.register(function(data) {
  if (data.action === 'tab.change') {
    TabStore.tab = data.tab
  }
})
```

## With Views

### Listen to dispatchers

```js
class TodoApp extends React.Component {
  componentDidMount() {
    this.token = AppDispatcher.register(payload => {
      switch (payload.action) {
        case 'tab.change':
          this.render()
        // ...
      }
    })
  },

  componentDidUnmount() {
    AppDispatcher.unregister(this.token)
  }
})
```

Views (React Components) can listen to Dispatchers.

### Listen to Stores

```js
class MyComponent extends ReactComponent {
  componentDidMount() {
    TodoStore.on('change', this.onChange)
  }

  componentDidUnmount() {
    TodoState.removeListener('change', this.onChange)
  }

  onChange(data) {
    // ...
  }
}
```

...or to Stores's `change` events.

## References

### Also see

* [Dispatcher API][dispatcher]
* [React cheatsheet](react.html)
* [Dispatcher.js source](https://github.com/facebook/flux/blob/master/src/Dispatcher.js)
* [Flux-todomvc explanation](https://github.com/facebook/flux/tree/master/examples/flux-todomvc)

[dispatcher]: http://facebook.github.io/flux/docs/dispatcher.html
