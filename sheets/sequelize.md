---
title: Sequelize
category: JavaScript libraries
---

### API

```js
sequelize.sync().done -> ...
```

### Models

```js
Project = sequelize.define('Project', {
  title: Sequelize.STRING,
  description: Sequelize.TEXT,
  myDate: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
  title: { type: Sequelize.STRING, allowNull: false },
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
}, {
  classMethods: { ... },
  instanceMethods: { ... }
});
```

```js
Project.hasMany(Task)
```

### Finders

```js
Project.find(123).success (project) ->
```

```js
Project.find({ where: {title: 'Hello'} })
Project.find({ where: {id: [1,3,4]} })
Project.find({ where: ["id > ?", 25] })
```

```js
Project.find(
  where: {title: 'a'}
  attributes: ['id', ['name', 'title']]
)
```

```js
.findOrCreate(...)
```

```js
.findAll
.findAll({ where: ... })
.findAll({ order: 'title DESC' })
.findAll({ limit: 10 })
.findAll({ offset: 10, limit: 2 })
```

```js
.count()
```

### Build

```js
item = Project.build({ ... })
```

```js
item.title = '...'
```

```js
item.save().success (item) ->
```

```js
item.updateAttributes({ title: '...' })
```

```js
item.destroy().success ->
```

```js
item.values
```
