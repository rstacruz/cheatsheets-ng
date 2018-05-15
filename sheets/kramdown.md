---
title: Kramdown
category: Markup
---

### Configuration

#### Options

| Option             | Description                                                          |
| ------------------ | -------------------------------------------------------------------- |
| `parse_block_html` | process kramdown syntax inside blocks                                |
| `parse_span_html`  | process kramdown syntax inside inlines                               |
| `html_to_native`   | convert html elements to native elements                             |
| `hard_wrap`        | Only for [GFM parser](http://kramdown.gettalong.org/parser/gfm.html) |

#### Example

```
{::options parse_block_html="true" /}
```

### For jekyll (gh-pages)

```yaml
# _config.yml
markdown: kramdown
kramdown:
  input: GFM
```

### Footnotes (Kramdown)

```
This is some text.[^1]. Other text.[^footnote].

[^1]: Some *crazy* footnote definition.
```

### Abbreviations (Kramdown)

```
This is some text not written in HTML but in another language!

*[another language]: It's called Markdown
*[HTML]: HyperTextMarkupLanguage
```

### Classes and IDs (Kramdown)

#### Paragraphs & IDs

```
A simple paragraph with an ID attribute.
{:#para-one}
```

#### Attributes

```
> A blockquote with a title
{:title="The blockquote title"}
```

#### List item

```
* {:.cls} This item has the class "cls"
```

#### Code fences

````
```
Some code here
```
{:.ruby}
````

#### Indented code

```
{:.ruby}
    Some code here
```

### References

* http://kramdown.gettalong.org/syntax.html
* http://kramdown.gettalong.org/parser/kramdown.html
