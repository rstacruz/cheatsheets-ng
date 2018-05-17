---
title: Browserify
category: JavaScript libraries
---

### Options

```bash
browserify input.js
  -o output.js
  -t coffeeify
  -t [ coffeeify --extension coffee ]
  --debug
```

```bash
  -u react  # --exclude: omit a file
  -x react  # --external: reference in another bundle
  -i react  # --ignore: stub a file
  -s Myapp  # --standalone: generate a UMD bundle
```

### Programmatic usage

```js
browserify = require('browserify')
browserify()
  .add('main.js')
  .bundle()
  .transform(coffeeify)
  .transform({ extensions: '.coffee' }, coffeeify)
  .pipe(process.stdout)

browserify({})
```

### Tools

* watchify _(recompiles on demand)_
* beefy _(http server)_
* debowerify
* es6ify _(es6 to es5)_

### Transforms

* coffeeify
* ractify
* reactify
* brfs
* cssify

See: [List of Transforms](https://github.com/substack/node-browserify/wiki/list-of-transforms) _(github.com)_
