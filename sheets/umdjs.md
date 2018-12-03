---
title: Universal JS module loader
intro: |
  Templates for the Universal JS module loader (UMDJS).
---

### With dependency

```js
;(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory)
  } else if (typeof exports === 'object') {
    module.exports = factory(require('jquery'))
  } else {
    root.YourModule = factory(root.jQuery)
  }
})(this, function(jquery) {
  return {}
})
```

Replace `jquery` with your dependency. See: [amdWebGlobal.js](https://github.com/umdjs/umd/blob/master/amdWebGlobal.js)

### No dependencies

```js
;(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(factory)
  } else if (typeof exports === 'object') {
    module.exports = factory()
  } else {
    root.YourModule = factory()
  }
})(this, function() {
  return {}
})
```

### Supports circular references

```js
;(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['exports', 'jquery'], factory)
  } else if (typeof exports === 'object') {
    factory(exports, require('jquery'))
  } else {
    factory((root.YourModule = {}), root.jQuery)
  }
})(this, function(exports, jQuery) {
  exports.action = function() {}
})
```

See: [commonjsStrict.js](https://github.com/umdjs/umd/blob/master/commonjsStrict.js)

### Reference

* [umdjs/umd](https://github.com/umdjs/umd) _(github.com)_
