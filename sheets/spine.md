---
title: Spine
category: JavaScript libraries
tags: [Outdated]
---

## Models

### Basic example

```coffee
class User extends Spine.Model
  @configure "User", "name", "address"

  fullName: ->
    [@first, @last].join ' '
```

### Subclassing models

```coffee
User = Spine.Model.sub()
```

### Class methods

```coffee
User
  .configure('modelname', attributes...)
```

#### Inheritance

```coffee
.include(Module)
.extend(Module)
```

```coffee
.create(name: "John")
```

```coffee
.count()
```

#### Events

```coffee
.on 'refresh change', (user) -> # ...
.trigger 'event'
```

```coffee
.change (user) -> # ...  same as on('change')
.fetch (user) -> # ...   same as on('fetch')
```

#### JSON

```coffee
.toJSON()         # all records
.fromJSON(json)   # from json string
.fromForm(el)
```

#### Data

```coffee
.records     # Hash of instances
.attributes  # array of attributes (from .configure)
```

#### Convenience

```coffee
.toString()  #=> "User"
```

#### Find by ID

```coffee
.exists(1)
.find(1)     # throws error
```

#### Find by something

```coffee
.select((u) u.name == 'bob')
.findByAttribute('name', 'bob')
.findAllByAttribute('name', 'bob')
```

```coffee
.all()
.slice(6, 13)  # cloned copies of instances
```

#### Iterating

```coffee
.each (user) ->
  # ...
```

#### Ends

```coffee
.first()
.last()
```

#### Deleting

```coffee
.deleteAll()
.destroyAll()
.destroyAll({ ..options.. })
.destroy(2)
```

### Instance methods

```coffee
user = new User()
```

```coffee
user
.isNew()
.exists()
```

#### Validation

```coffee
.isValid()
.validate()    # validate = (-> "Name required" unless @name)
```

```coffee
.attributes()  # hash of attr values
.eql(other)    # equality check
```

#### Update

```coffee
.load(attrs)
.reload()
.fromForm(form)
.updateAttribute("name", "john")
.updateAttributes(name: "John")
```

#### Event

```coffee
.on 'event', -> ...
.trigger 'event'
```

#### Retrieve

```coffee
.toJSON()
```

#### Persistence

```coffee
.save()
```

#### Other

```coffee
.destroy()
.dup()         # clone as unsaved
```

### Mixins

```coffee
class User extends Spine.Model
  @include MyModule
  @extend MyModule
```

### Events

```coffee
.on 'create'
.on 'update'
.on 'destroy'
```

```coffee
.on 'save'    # create / update
.on 'change'  # create / update / destroy
```

```coffee
.on 'refresh'
.on 'error'    # validation error
```

## Ajax

```coffee
class User extends Spine.Model
  @extend Spine.Model.Ajax

  @url: '/users'
  @url: -> '/users'
  scope: '2013'
```

### Using

```coffee
User.fetch()
user = new User()
```

```coffee
user.url()            #=> "/users"
user.url('bands')     #=> "/users/bands"
```

```coffee
user.scope = 'admin'
user.url()            #=> "/admin/users"
```

### Host

```coffee
Spine.Model.host = 'http://endpoint'
```

### Ajax mapping

```
read    → GET    /collection
create  → POST   /collection (201 created)
update  → PUT    /collection/id
destroy → DELETE /collection/id
```

### Associations

```coffee
class Photo extends Spine.Model
  @belongsTo 'album', 'Album'          # window['Album']
  @belongsTo 'album', 'models/album'   # via require.js
```

```coffee
class Album
  @hasMany 'photos', 'models/photo'
```

```coffee
album.photos().all()
album.photos().create(name: "Vacation")
album.photos().find(id)
```

```coffee
photo = Photo.create(album: album)
photo.album()
photo.album_id
```

### See also

* http://spinejs.com/api/index
* http://spinejs.com/api/models
* http://spinejs.com/docs/ajax
* http://spinejs.com/docs/relations
