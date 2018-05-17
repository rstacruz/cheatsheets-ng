---
title: Zombie
category: JavaScript libraries
intro: |
  [Zombie](https://github.com/assaf/zombie) is a tool for headless browser testing in Node.js.
---

### Simple exmaple

```js
browser
  .visit('http://.../', () => {
    /* ... */
  })
  .fill('email', 'zombie@underworld.dead')
  .fill('password', 'eat-the-living')
  .select('Born', '1985')
  .uncheck('Send newsletter')
  .clickLink('Link name')
  .pressButton('Sign', () => {
    /* ... */
  })
```

### Expectations

```js
expect(browser.query('#brains'))
```

```js
expect(browser.body.queryAll('.hand')).length(2)
```

```js
console.log(browser.html())
console.log(browser.html('table.parts'))
```

```js
expect(Browser.text('.card-nopad small'), 'A better way to get around!')
```
