---
title: Koa
category: JavaScript libraries
---

### Reference

```js
app.use(async ctx => {
  // Context object contains `request` and `response`
  ctx.request
  ctx.response

  // And some other stuff, too
  ctx.body = 'hello'

  // You should use async/await here
  ctx.state.user = await User.find(id).fetch()

  // Cookies
  ctx.cookies.set('foo', 'hello', { signed: true })
  ctx.cookies.get('foo')

  ctx.throw(403)
})
```

### Request

```js
ctx.header //      also ctx.headers
ctx.method //      => 'POST'
ctx.url
ctx.originalUrl
ctx.origin //      => 'http://example.com'
ctx.href //        => 'http://example.com/foo?q=hello'
ctx.path
ctx.query //       => { q: 'hello' }
ctx.querystring // => '?q=hello'
ctx.host
ctx.hostname
ctx.fresh
ctx.stale
ctx.socket
ctx.protocol
ctx.secure
ctx.ip
ctx.ips
ctx.subdomains
```

#### Is/accepts

```js
ctx.is('html')
ctx.is('text/html')
ctx.accepts('html')
ctx.accepts('html', 'json')
ctx.acceptsEncodings('gzip')
ctx.acceptsCharsets(/*...*/)
ctx.acceptsLanguages(/*...*/)
ctx.get(/*...*/)
```

#### Setters

```js
ctx.path = '...'
ctx.query = {
  /*...*/
}
ctx.method = '...'
ctx.url = '...'
ctx.querystring = '...'
```

```js
ctx.request.type //      => 'image/jpg'
ctx.request.charset //   => 'utf-8'
ctx.request.protocol //  => 'https'
ctx.request.secure //    => true
ctx.request.ip // (supports X-Forwarded-For if app.proxy)
ctx.request.ips
ctx.request.subdomains
```

```js
ctx.request.fresh
ctx.request.stale
```

### Response

```js
ctx.body = 'hello'
```

```js
ctx.throw(403)
ctx.throw('name required', 403)
ctx.throw(403, 'name required')
ctx.throw('oops')
ctx.assert(ctx.state.user, 401, 'You must log in')
```

### Middlewares

Here are some common middleware:

```js
exports.conditionalGet = require('koa-conditional-get')
exports.responseTime = require('koa-response-time')
exports.ratelimit = require('koa-ratelimit')
exports.compress = require('koa-compress')
exports.rewrite = require('koa-rewrite')
exports.favicon = require('koa-favicon')
exports.session = require('koa-session')
exports.static = require('koa-static')
exports.logger = require('koa-logger')
exports.mount = require('koa-mount')
exports.etag = require('koa-etag')
```
