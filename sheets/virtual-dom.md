---
title: Virtual-dom
category: JavaScript libraries
---

### Importing

```js
var h = require('virtual-dom/h')
var diff = require('virtual-dom/diff')
var patch = require('virtual-dom/patch')
var createElement = require('virtual-dom/create-element')
```

### Rendering

```js
const tree = h('div', { style: { color: 'blue' } }, ['hello'])
let el = createElement(tree)
document.body.appendChild(el)
```

Use `createElement()` to create the root DOM node.

### Updating

```js
const tree2 = h('div', { style: { color: 'blue' } }, ['hello world'])
const delta = diff(tree, tree2)

// Update `el` that was made by `createElement()`
el = patch(el, delta)
```

Use `patch()` to update the DOM.

### References

* [virtual-dom](https://www.npmjs.com/package/virtual-dom) _(npmjs.com)_
