---
title: Mocha.js
category: JavaScript libraries
---

### BDD

```js
mocha.setup('bdd')

describe('something', function() {
  beforeEach(function() {
    /* ... */
  })

  it('should work', function() {
    /* ... */
  })
})
```

### Async via callbacks

```js
it('should save', function(done) {
  const user = new User()
  user.save(function(err) {
    if (err) throw err
    done()
  })
})
```

You can also return a `Promise`.

### Chai: Shoulds

```js
chai.should()
```

```js
foo.should.be.a('string')
foo.should.equal('bar')
foo.should.have.length(3)
tea.should.have.property('flavors').with.length(3)
```

### See also

* [Mocha TDD](mocha-tdd.html)
* [Mocha HTML](mocha-html.html)
* [Chai](chai.html)
* [Sinon](sinon.html)
* [Sinon Chai](sinon-chai.html)
