---
title: Migrations
category: Rails
---

### Automatically make migrations

```sh
$ rails generate migration RemovePartNumberFromProducts part_number:string
$ rails generate migration remove_part_number_from_products part_number # rails assumes string if not type given - and you can use snake_case
```

```sh
$ rails generate migration AddNameToWidgets name:string
$ rails g migration add_name_to_widgets name:string # you can use the short cut 'g' instead of generate - they both do the same thing
```

### Run migrations

```sh
$ rake db:migrate
```

### Creating tables

```rb
create_table :users do |t|
  t.string :name
  t.text   :description
```

```rb
  t.primary_key :id
  t.string      :title
  t.text        :description
  t.integer     :games_count
  t.float       :lol
  t.decimal     :price
  t.decimal     :price, :precision => 2, :scale => 10
  t.datetime    :expiration
  t.timestamp   :time_in
  t.time        :time_in
  t.date        :expiry
  t.binary      :image_data
  t.boolean     :is_admin
end
```

```rb
# Options:
  :null (boolean)
  :limit (integer)
  :default
```

### Operations

```rb
add_column    :users, :first_name, :string
remove_column :users, :first_name, :string
```

```rb
change_column :users, :first_name, :text
change_column :users, :first_name, :text
```

```rb
change_column_default :users, :admin, nil
change_column_null    :users, :email, false # adds NOT NULL constraint
```

```rb
create_table
change_table
drop_table
```

```rb
add_column
change_column
rename_column
remove_column
```

```rb
add_index
remove_index
```

### Use models

```rb
class AddFlagToProduct < ActiveRecord::Migration
  class Product < ActiveRecord::Base
  end
```

```rb
  def change
    add_column :products, :flag, :boolean
    Product.reset_column_information
    reversible do |dir|
      dir.up { Product.update_all flag: false }
    end
  end
end
```

Use `#reset_column_information` in your migrations when accessing models.

### Associations

```rb
t.references :category
# kinda same as t.integer :category_id
```

```rb
# Can have different types
t.references :category, polymorphic: true
```

### Auto-add/remove columns

```sh
$ rails generate migration RemovePartNumberFromProducts part_number:string
```

### Indices

```rb
# Simple
add_index :suppliers, :name
```

```rb
# Unique
add_index :accounts, [:branch_id, :party_id], :unique => true
```

```rb
# Named (:name => ...)
add_index :accounts, [:branch_id, :party_id], :unique => true, :name => "by_branch_party"
```

```rb
# Length
add_index :accounts, :name, :name => ‘by_name’, :length => 10
add_index :accounts, [:name, :surname], :name => ‘by_name_surname’,
  :length => {
    :name => 10,
    :surname => 15
  }
```

```rb
# Sort order (no MySQL support)
add_index :accounts, [:branch_id, :party_id, :surname],
  :order => {:branch_id => :desc, :part_id => :asc}
```

### In console

Use `ActiveRecord::Migration`.

```rb
ActiveRecord::Migration.add_index :posts, :slug
```

### References

- http://apidock.com/rails/ActiveRecord/ConnectionAdapters/SchemaStatements/add_index
