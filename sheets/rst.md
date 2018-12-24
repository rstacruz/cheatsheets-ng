---
title: ReStructuredText
category: Markup
---

### Comments

```rst
.. @theme 2010
.. include:: ../themes/2010/common.rst
.. contents::
.. |substitute| replace:: replacement name
```

### Headings

```rst
Heading
=======
```

```rst
.. class:: brief

Hello there. |substitute| **This is bold**
```

```rst
  - Bullet list with a link_ (or `link with words`_)
  - Yes

.. _link: http://link.org
```

### PDF page break

```rst
.. raw:: pdf

    PageBreak oneColumn
```

### Link targets

```rst
Internal link target_.

.. _target:

This is where _target will end up in.
```

### Tables (?)

```rst
.. class:: hash-table

.. list-table::

    * - :key:`Cuisine:`
      - :val:`French/fusion`
    * - :key:`Number of ingredients:`
      - :val:`8`
    * - :key:`Preparation time:`
      - :val:`30 hours`
```
