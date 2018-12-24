---
title: Regexp
tags: [WIP]
---

### Named matches

```js
(?P<named_match>...)
```

### Invisible group

```
(?:invisible group)
```

Groups prefixed with `?:` won't show up as matches.

### Look-aheads

```
(?!negative look-ahead)
(?=positive look-ahead)
(?<!negative look-behind)
(?<=positive look-behind)
```
