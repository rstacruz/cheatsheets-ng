---
title: GitHub pages
category: Jekyll
layout: 2017/sheet
---

## Custom domains

### Setting up CNAME file

```sh
$ echo "foobar.com" > CNAME
$ git commit && git push
```

Create a `CNAME` file with your domain on it.

See: [Setting up a custom domain](https://help.github.com/articles/quick-start-setting-up-a-custom-domain/) _(github.com)_

### Set up your domain

#### For subdomains (eg, www)

```
CNAME => username.github.io
```

#### For apex domains

```
ALIAS => username.github.io
```

#### For Apex domains (alternative)

```
A => 192.30.252.153
A => 192.30.252.154
```

### References

<!-- {.-one-column} -->

* <https://pages.github.com>
