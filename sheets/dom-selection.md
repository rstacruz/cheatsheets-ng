---
title: DOM Selection
category: JavaScript
---

### Selection

```js
var sel = document.getSelection()
```

See: <http://devdocs.io/dom/selection>

### Selection methods

```js
sel.removeAllRanges() //  deselects
sel.addRange(range) //    sets a selection
sel.removeRange(range) // remove a range
```

```js
sel.rangeCount //        ranges
sel.getRangeAt(0) //     get the 0th range
```

### Collapsing

```js
sel.collapse(parent, offset)
sel.collapseToEnd()
sel.collapseToStart()
sel.isCollapsed
```

```js
sel.containsNode(node)
```

### Deleting

```js
sel.deleteFromDocument()
```

### Events

```js
document.addEventListener('selectionchange', () => {
  /* ... */
})
```
