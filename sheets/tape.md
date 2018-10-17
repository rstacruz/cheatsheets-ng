---
title: Tape
category: JavaScript libraries
---

### Basic example

```js
test('things', t => {
  t.equal('actual', 'expected')
})
```

### Testing equality

```js
t.equal('actual', 'expected')
t.equal('actual', 'expected', 'should be equal') // messages are optional
```

### Basic assertions

```js
t.ok(value, 'is truthy')
t.notOk(value, 'is falsy')
t.error(err, 'is falsy (print err.message)')
```

### Others

```js
t.end(err)
t.fail('msg')
t.pass('msg')
t.timeoutAfter(2000)
t.skip('msg')
```

### Basic assertions

```js
t.ok(value, 'is truthy')
t.notOk(value, 'is falsy')
t.error(err, 'is falsy (print err.message)')
```

### Testing equality, continued

```js
t.equal(actual, expected, 'is equal')
t.notEqual(/* ... */)
```

```js
t.deepEqual(actual, expected, "is equal (use node's deepEqual)")
t.notDeepEqual(/* ... */)
```

```js
t.looseEqual(actual, expected, "is equal (use node's deepEqual with ==)")
t.notLooseEqual(/* ... */)
```

```js
t.throws(fn, /FooError/)
t.throws(fn, FooError /* class */)
t.doesNotThrow(/* ... */)
```

### Comments

```js
t.comment('message')
```

### Asserting number of tests

```js
t.plan(1)
```

### Isolating tests

```js
test.only((t) => { ... })
```
