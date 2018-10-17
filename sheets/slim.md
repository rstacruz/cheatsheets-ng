---
title: Slim
category: Ruby libraries
layout: 2017/sheet
prism_languages: [slim]
weight: -1
---

### Example

```slim
doctype html
html
  head
    title Slim examples
    meta[charset='utf-8']
    meta(name="keywords" content="template language")
    meta name="author" content=author
    meta property='og:image' content=asset_url('foo.png')
    meta property='og:image' content=(path_to_user user)
    meta(
      property='description'
      content='this is the song that never ends')
```

### Attributes

```slim
meta[charset='utf-8']
meta(name="keywords" content="template language")
meta name="author" content=author
```

You can use parentheses `()`, brackets `[]`, or none at all.

### Ruby attributes

```slim
a class=[:menu,:highlight]
```

You can use Ruby expressions in attributes.

### Hash attributes

```slim
.card *{'data-url' => place_path(place)}
```

You can destructure Ruby hashes as attributes.

### Inline Ruby

```slim
ruby:
  def foobar
    "hello"
  end

div= foobar
```

### Inline Markdown

```slim
markdown:
  ### On Markdown

  I am *Markdown* _text_!
  <!-- {.classname} -->
```

Slim can handle your [Markdown](https://daringfireball.net/projects/markdown/syntax) content for longer content blocks or `code`.
Depending on your parser, like [Kramdown](https://kramdown.gettalong.org/quickref.html), other features might work, like assigning attributes or classes.

### Embedded JavaScript

```slim
javascript:
  alert('Slim supports embedded javascript!')
```

### Comments

```slim
/ Comment
/! HTML comment
```

### Ruby

```slim
== yield
= t('.hello')
- 3.times do |i|
  div
```

### Verbatim text

```slim
div
  | This is text
    it is nice
```

### Inline HTML

```slim
<div class='foo'>
  - if articles.empty?
    | Nothing here
</div>
```

### Inline tags

```slim
ul
  li: a(href='/') Home
```

### References

* <http://slim-lang.com/>
