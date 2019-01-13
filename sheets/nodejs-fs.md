---
title: fs
category: Node.js
---

### Reading

```js
fs.readFile('file.txt', (err, data) => {
  /* ... */
})
fs.readFile('file.txt', { encoding: 'utf-8' }, (err, data) => {
  /* ... */
})
```

### Writing

```js
fs.writeFile('output.txt', err => {
  /* ... */
})
fs.appendFile('output.txt', err => {
  /* ... */
})
```

### Watch

```js
fs.watch('dir OR file.txt', { persistent: true }, (event, file) => {
  event /* rename | change */
})
```

### Getting info

```js
fs.stat('file.txt', stats => {
  stats.isFile()
  stats.isDirectory()
  stats.isSymbolicLink()
})
```

### File operations

```js
fs.rename('old.txt', 'new.txt', function() {})
fs.chown('file.txt', uid, gid, function() {})
fs.symlink('src', 'dest', function() {})
fs.unlink('path', function() {})
fs.rmdir('path', function() {})
```

```js
fs.readdir('path', (err, files) => {
  // files === array of names
})
```

### Path

```js
fs.realpath('/etc/passwd', (err, path) => {
  // path === "/private/etc/passwd"
})
```

### Sync

```js
data = fs.readFileSync('input.txt')
fs.writeFileSync('output.txt', data)
fs.appendFileSync('output.txt', data)
fs.existsSync('file.txt')
```

### References

- http://nodejs.org/api/fs.html
