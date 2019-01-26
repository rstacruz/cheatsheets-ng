---
title: process
category: Node.js
---

### Streams

```js
process.stdout.write('...')
process.stderr.write('...')
process.stdin.read()
```

### Reading from stdin

```js
function stdin(fn) {
  var data = ''

  process.stdin.setEncoding('utf8')
  process.stdin.on('readable', function() {
    var chunk = process.stdin.read()
    if (chunk !== null) data += chunk
  })

  process.stdin.on('end', function() {
    fn(null, data)
  })
}
```

### stuff

```js
process.argv
// => ['node', 'file.js', 'one', 'two']
```

```js
process.env
// => {TERM: 'screen-256color', SHELL: '/bin/bash', ...}
```

```js
process.exit()
process.exit(1)
```

### Directories

```js
process.cwd()
// => "/tmp"
```

```js
process.chdir('dir')
```

### References

- <http://nodejs.org/api/process.html>
