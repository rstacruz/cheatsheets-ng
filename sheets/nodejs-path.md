---
title: path
category: Node.js
---

### Finding real paths

```js
fs.realpath('/etc/passwd', (err, path) => {
  // path === "/private/etc/passwd"
})
```

### Joining paths

```js
dir = path.join('etc', 'passwd')
dir = path.resolve('/etc', 'passwd', '..', 'var')
```

### dirname and basename

```js
path.dirname('/etc/passwd') //      => "/etc"
path.basename('/etc/passwd') //     => "passwd"
path.basename('/etc/rc.d', '.d') // => "rc"
```

### References

- <http://nodejs.org/api/path.html>
