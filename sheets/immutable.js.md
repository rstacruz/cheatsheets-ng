---
title: Immutable.js
category: JavaScript libraries
---

### Maps

```js
var map = Immutable.Map({ a: 1, b: 2, c: 3 })
```

```js
map.set('b', 50)
map.get('b') // => 50
```

### Lists

```js
var list = Immutable.List.of(1, 2)
```

```js
list.push(3, 4, 5)
list.unshift(0)
list.concat(list2, list3)
list.get(0).size
```

### Nested maps

```js
var nested = Immutable.fromJS({ user: { profile: { name: 'John' } } })

nested
  // Update
  .mergeDeep({ user: { profile: { age: 90 } } })
  .setIn(['user', 'profile', 'name'], 'Jack')
  .updateIn(['user', 'profile', 'name'], s => s.toUpperCase())

  // Get
  .getIn(['user', 'profile', 'name']) // 'JACK'
```
