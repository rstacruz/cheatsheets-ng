---
title: js-model
category: JavaScript libraries
layout: 2017/sheet
intro: |
  [js-model](http://benpickles.github.io/js-model/) is a library for RESTful models in JavaScript.
---

### Example

```js
Project = Model('project', function() {
  this.extend({
    findByTitle: title => {
      /*...*/
    }
  })

  this.include({
    markAsDone: () => {
      /*...*/
    }
  })
})
```

```js
project = Project.find(1)
project = Project.findByTitle('hello')
```

```js
project.markAsDone()
```

In Rails, be sure to set `ActiveRecord::Base.include_root_in_json = false` to make persistence work properly.

### Persistence

```js
Project('hi', function() {
  this.persistence(Model.REST, '/projects')
  this.persistence(Model.localStorage)
})
```

```js
Project.load(function() {
  // Loaded
})
```

### Attrs

```js
project = new Project((name: 'Hello'))

project.attr('name', 'Hey')
project.attr('name')

project.save()
project.destroy()
```

### Collection

```js
Food.add(egg)
Food.all()
Food.select(food => {
  /* ... */
})
Food.first()
```

```js
Food.find(id)
```

### Events

#### Classes

```js
Project.bind('add', obj => {
  /*...*/
})
Project.bind('remove', obj => {
  /*...*/
})
```

#### Instances

```js
project.bind('update', () => {
  /*...*/
})
project.bind('destroy', () => {
  /*...*/
})
```

```js
project.trigger('turn_blue')
```

## References

<!-- {.-one-column} -->

* <http://benpickles.github.io/js-model/>
