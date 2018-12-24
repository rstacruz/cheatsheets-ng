---
title: Mocha.js TDD interface
category: JavaScript libraries
updated: 2018-12-24
---

### TDD

```js
mocha.setup('tdd')

suite('something', () => {
  setup(() => {
    /* ... */
  })

  test('should work', () => {
    /* ... */
  })

  teardown(() => {
    /* ... */
  })
})
```

### Async

#### Using callbacks

```js
test('should save', done => {
  var user = new User()
  user.save(err => {
    if (err) throw err
    done()
  })
})
```

#### Using callbacks

```js
test('should save', () => {
  return new Promise((resolve, reject) => {
    /* ... */
  })
})
```

### Chai: Expect

```js
const expect = chai.expect
```

```js
expect(foo).to.be.a('string')
expect(foo).to.equal('bar')
expect(foo).to.have.length(3)
```

```js
expect(tea)
  .to.have.property('flavors')
  .with.length(3)
```

Also see the [Chai](./chai) cheatsheet.

### See also

- [Mocha BDD](./mocha)
- [Mocha HTML](./mocha-html)
- [Chai](./chai)
- [Sinon](./sinon)
- [Sinon Chai](./sinon-chai)
