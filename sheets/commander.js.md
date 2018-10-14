---
title: Commander.js
category: JavaScript libraries
---

### Initialize

```js
var cli = require('commander')
```

### Options

```js
cli
  .version(require('../package').version)
  .usage('[options] <command>')
  .option('-w, --words <n>', 'generate <n> words')
  .option('-i, --interval <n>', 'interval [1000]', 1000)
  .option('-s, --symbols', 'include symbols')
  .parse(process.argv)
```

### Help

```js
.on('--help', function() {
  console.log('')
})
```

### Commands

```js
cli.outputHelp()
cli.args == ['hello']
```

### Other useful things

```js
process.exit(0)
```
