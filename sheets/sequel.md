---
title: Sequel
category: Ruby libraries
---

## Reference

<!-- {.-three-column} -->

### Open a database

```rb
require 'rubygems'
require 'sequel'
```

```rb
DB = Sequel.sqlite('my_blog.db')
```

```rb
DB = Sequel.connect('postgres://user:password@localhost/my_db')
```

```rb
DB = Sequel.postgres(
  'my_db',
  user: 'user',
  password: 'password',
  host: 'localhost'
)
```

```rb
DB = Sequel.ado('mydb')
```

### Open an SQLite memory database

```rb
DB = Sequel.sqlite
```

Without a filename argument, the sqlite adapter will setup a new sqlite database in memory.

### Logging SQL statements

```rb
require 'logger'
DB = Sequel.sqlite '', :loggers => [Logger.new($stdout)]
# or
DB.loggers << Logger.new(...)
```

### Using raw SQL

```rb
DB.run "CREATE TABLE users (name VARCHAR(255) NOT NULL, age INT(3) NOT NULL)"
dataset = DB["SELECT age FROM users WHERE name = ?", name]
dataset.map(:age)
DB.fetch("SELECT name FROM users") do |row|
  p row[:name]
end
```

## Datasets

### Create a dataset

```rb
dataset = DB[:items]
dataset = DB.from(:items)
```

### Chaining datasets

```rb
dataset = DB[:managers].where(:salary => 5000..10000).order(:name, :department)
```

Most dataset methods are chainable.

### Insert rows

```rb
dataset.insert(:name => 'Sharon', :grade => 50)
```

### Retrieve rows

```rb
dataset.each { |record| p record }
dataset.all # => [{...}, {...}, ...]
dataset.first # => {...}
```

### Update/Delete rows

```rb
dataset.filter(~:active).delete
dataset.filter('price < ?', 100).update(:active => true)
```

### Datasets are Enumerable

```rb
dataset.map{|r| r[:name]}
dataset.map(:name) # same as above
```

```rb
dataset.inject(0){|sum, r| sum + r[:value]}
dataset.sum(:value) # same as above
```

## Filtering

<!-- {.-three-column} -->

### Equality

```rb
dataset.filter(:name => 'abc')
dataset.filter('name = ?', 'abc')
```

### Inequality

```rb
dataset.filter{value > 100}
dataset.exclude{value <= 100}
```

### Inclusion

```rb
dataset.filter(:value => 50..100)
dataset.where{(value >= 50) & (value <= 100)}
```

```rb
dataset.where('value IN ?', [50,75,100])
dataset.where(:value=>[50,75,100])
```

```rb
dataset.where(:id=>other_dataset.select(:other_id))
```

### Subselects as scalar values

```rb
dataset.where('price > (SELECT avg(price) + 100 FROM table)')
dataset.filter{price > dataset.select(avg(price) + 100)}
```

### LIKE/Regexp

```rb
DB[:items].filter(:name.like('AL%'))
DB[:items].filter(:name => /^AL/)
```

#### AND/OR/NOT

```rb
DB[:items].filter{(x > 5) & (y > 10)}.sql
# SELECT * FROM items WHERE ((x > 5) AND (y > 10))
```

```rb
DB[:items].filter({:x => 1, :y => 2}.sql_or & ~{:z => 3}).sql
# SELECT * FROM items WHERE (((x = 1) OR (y = 2)) AND (z != 3))
```

### Mathematical operators

```rb
DB[:items].filter((:x + :y) > :z).sql
# SELECT * FROM items WHERE ((x + y) > z)
```

```rb
DB[:items].filter{price - 100 < avg(price)}.sql
# SELECT * FROM items WHERE ((price - 100) < avg(price))
```

## More query operations

### Ordering

```rb
dataset.order(:kind)
dataset.reverse_order(:kind)
dataset.order(:kind.desc, :name)
```

### Limit/Offset

```rb
dataset.limit(30) # LIMIT 30
dataset.limit(30, 10) # LIMIT 30 OFFSET 10
```

### Joins

```rb
DB[:items].left_outer_join(:categories, :id => :category_id).sql
# SELECT * FROM items LEFT OUTER JOIN categories ON categories.id = items.category_id
```

```rb
DB[:items].join(:categories, :id => :category_id).join(:groups, :id => :items__group_id)
# SELECT * FROM items INNER JOIN categories ON categories.id = items.category_id INNER JOIN groups ON groups.id = items.group_id
```

## More features

### Aggregate functions methods

```rb
dataset.count #=> record count
dataset.max(:price)
dataset.min(:price)
dataset.avg(:price)
dataset.sum(:stock)
```

```rb
dataset.group_and_count(:category)
dataset.group(:category).select(:category, :AVG.sql_function(:price))
```

### SQL Functions / Literals

```rb
dataset.update(:updated_at => :NOW.sql_function)
dataset.update(:updated_at => 'NOW()'.lit)
```

```rb
dataset.update(:updated_at => "DateValue('1/1/2001')".lit)
dataset.update(:updated_at => :DateValue.sql_function('1/1/2001'))
```

## Schema Manipulation

<!-- {.-three-column} -->

### Create table

```rb
DB.create_table :items do
  primary_key :id
  String :name, :unique => true, :null => false
  TrueClass :active, :default => true
  foreign_key :category_id, :categories
  DateTime :created_at
  enum :system, :elements => ['mac', 'linux', 'windows']

  index :created_at
end
```

### Drop table

```rb
DB.drop_table :items
```

## More features, continued

### Aliasing

```rb
DB[:items].select(:name.as(:item_name))
DB[:items].select(:name___item_name)
```

```rb
DB[:items___items_table].select(:items_table__name___item_name)
# SELECT items_table.name AS item_name FROM items AS items_table
```

## Transactions

### Using transactions

```rb
DB.transaction do
  dataset.insert(:first_name => 'Inigo', :last_name => 'Montoya')
  dataset.insert(:first_name => 'Farm', :last_name => 'Boy')
end
```

Either both are inserted or neither are inserted.

### Re-entrant

```rb
DB.transaction do # BEGIN issued only here
  DB.transaction
    dataset << {:first_name => 'Inigo', :last_name => 'Montoya'}
  end
end # COMMIT issued only here
```

Database#transaction is re-entrant.

### Rolling back

```rb
DB.transaction do
  raise "some error occurred"
end # ROLLBACK issued and the error is re-raised
```

Transactions are aborted if an error is raised.

### Sequel::Rollback

```rb
DB.transaction do
  raise(Sequel::Rollback) if something_bad_happened
end # ROLLBACK issued and no error raised
```

Transactions can also be aborted by raising `Sequel::Rollback`.

### Save points

```rb
DB.transaction do
  # Inserted:
  dataset << {:first_name => 'Farm', :last_name => 'Boy'}

  # This savepoint is rolled back:
  DB.transaction(:savepoint=>true) do
    # Not inserted:
    dataset << {:first_name => 'Inigo', :last_name => 'Montoya'}
    raise(Sequel::Rollback) if something_bad_happened
  end

  # Inserted:
  dataset << {:first_name => 'Prince', :last_name => 'Humperdink'}
end
```

Savepoints can be used if the database supports it.

### Miscellaneous

```rb
dataset.sql
# => "SELECT * FROM items"
```

```rb
dataset.delete_sql
# => "DELETE FROM items"
```

```rb
dataset.where(:name => 'sequel').exists
# => "EXISTS ( SELECT * FROM items WHERE name = 'sequel' )"
```

```rb
dataset.columns
# => array of columns in the result set, does a SELECT
```

```rb
DB.schema(:items)
# => [[:id, {:type=>:integer, ...}], [:name, {:type=>:string, ...}], ...]
```

### Documents

- <http://sequel.rubyforge.org/rdoc/files/doc/association_basics_rdoc.html>
- <http://sequel.rubyforge.org/rdoc/classes/Sequel/Schema/Generator.html>
- <http://sequel.rubyforge.org/rdoc/files/doc/validations_rdoc.html>
- <http://sequel.rubyforge.org/rdoc/classes/Sequel/Model.html>

### Alter table

```rb
database.alter_table :deals do
  add_column :name, String
  drop_column :column_name
  rename_column :from, :to

  add_constraint :valid_name, :name.like('A%')
  drop_constraint :constraint

  add_full_text_index :body
  add_spacial_index [columns]

  add_index :price
  drop_index :index

  add_foreign_key :artist_id, :table
  add_primary_key :id
  add_unique_constraint [columns]
  set_column_allow_null :foo, false
  set_column_default :title, ''

  set_column_type :price, 'char(10)'
end
```

## Model associations

<!-- {.-three-column} -->

### Many-to-many

````rb
class Deal < Sequel::Model
  # Us (left) <=> Them (right)
  many_to_many  :images,
    left_id:    :deal_id,
    right_id:   :image_id,
    join_table: :image_links
``

### One-to-many

```rb
  one_to_many   :files,
    key:        :deal_id,
    class:      :DataFile,
````

### Parent-child (many-to-one)

```rb
  many_to_one   :parent, class: self
  one_to_many   :children, key: :parent_id, class: self
```

### With filter

```rb
  one_to_many :gold_albums, class: :Album do |ds|
    ds.filter { copies_sold > 50000 }
  end
```

### Provided by many_to_many

```rb
Deal[1].images
Deal[1].add_image
Deal[1].remove_image
Deal[1].remove_all_images
```

### Validations

```rb
  def validate
    super
    errors.add(:name, 'cannot be empty') if !name || name.empty?
```

```rb
    validates_presence [:title, :site]
    validates_unique :name
    validates_format /\Ahttps?:\/\//, :website, :message=>'is not a valid URL'
    validates_includes %w(a b c), :type
    validates_integer :rating
    validates_numeric :number
    validates_type String, [:title, :description]
```

```rb
    validates_integer :rating  if new?
```

```rb
    # options: :message =>, :allow_nil =>, :allow_blank =>,
    #          :allow_missing =>,
```

```rb
    validates_exact_length 17, :isbn
    validates_min_length 3, :name
    validates_max_length 100, :name
    validates_length_range 3..100, :name
```

```rb
    # Setter override
    def filename=(name)
      @values[:filename] = name
    end
  end
end
```

```rb
deal.errors
```

### Model stuff

```rb
deal = Deal[1]
deal.changed_columns
deal.destroy  # Calls hooks
deal.delete   # No hooks
deal.exists?
deal.new?
deal.hash  # Only uniques
deal.keys  #=> [:id, :name]
deal.modified!
deal.modified?
```

```rb
deal.lock!
```

### Callbacks

```js
before_create
after_create
```

```js
before_validation
after_validation
before_save
before_update
[UPDATE QUERY]
after_update
after_save
```

```js
before_destroy
[DELETE QUERY]
after_destroy
```

### Schema

```rb
class Deal < Sequel::Model
  set_schema do
    primary_key :id
    primary_key [:id, :title]
    String :name, primary_key: true

    String  :title
    Numeric :price
    DateTime :expires

    unique :whatever
    check(:price) { num > 0 }

    foreign_key :artist_id
    String :artist_name, key: :id

    index :title
    index [:artist_id, :name]
    full_text_index :title

    # String, Integer, Fixnum, Bignum, Float, Numeric, BigDecimal,
    # Date, DateTime, Time, File, TrueClass, FalseClass
  end
end
```

### Unrestrict primary key

```rb
Category.create id: 'travel'   # error
Category.unrestrict_primary_key
Category.create id: 'travel'   # ok
```
