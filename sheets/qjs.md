---
title: Q.js
category: JavaScript libraries
---

### Creating promises (Q.promise)

```js
Q.promise((resolve, reject) => {
  asyncFunction(() => {
    if (error) {
      reject(new Error('Failure'))
    } else {
      resolve(data)
    }
  })
})
```

Similar to ES2015's `new Promise()`.

### For arrays

```js
const promises = [saveDisk(), saveCloud()]
```

#### Q.all

```js
// When all succeeds, or *at least one* error
Q.all(promises).done(() => {
  console.log('Saved!')
})
```

#### Q.all.spread

```js
// Same, but get the values
Q.all(promises).spread((a, b) => {
  console.log('Result A: ' + a)
  console.log('Result B: ' + b)
})
```

#### Q.allSettled

```js
// When all either succeeds or errors
Q.allSettled(promises).done(() => {
  /* ... */
})
```

### Creating promises from Node

#### Q.nfcall

```js
// Works like `.call()`
Q.nfcall(FS.readFile, 'foo.txt', 'utf-8').then(() => {
  /* ... */
})
```

#### Q.nfapply

```js
// Works like `.apply()`
Q.nfapply(FS.readFile, ['foo.txt', 'utf-8']).then(() => {
  /* ... */
})
```

#### Q.npost

```js
Q.npost(FS, 'readFile', ['foo.txt, 'utf-8'])
  .then(() => { /* ... */ })
```

```js
Q.npost(FS, 'readFile', 'foo.txt, 'utf-8')
  .then(() => { /* ... */ })
```

#### Q.denodeify

```js
readFile = Q.denodeify(FS.readFile)
readFile('foo.txt').then(() => {
  /* ... */
})
```

### Promises to Node async

#### Promise.nodeify

```js
const createUser = next => {
  return promiseMaker().nodeify(next)
}
```

### Promise sugars

```js
// Shortcut for .then(ok, fail, progress)
promise
  .then(data => {
    /* ... */
  })
  .catch(error => {
    /* ... */
  })
  .progress(percent => {
    /* ... */
  })
```

### Try

```js
Q.try(() => {
  promise()
}).catch(error => {
  console.error('Oh well', error)
})
```

### Reference

* [API reference](https://github.com/kriskowal/q/wiki/API-Reference) _(github.com)_
