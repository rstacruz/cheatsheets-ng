---
title: Rails plugins
category: Rails
---

## Pligns

## Generate a plugin

```rb
rails plugin new myplugin --skip-bundle --full
```

Generate a Rails Engine plugin using `rails plugin new`.

### Initializers

```rb
module NewPlugin
  class Railtie < Rails::Railtie
    initializer "newplugin.initialize" do |app|

      # subscribe to all rails notifications: controllers, AR, etc.
      ActiveSupport::Notifications.subscribe do |*args|
        event = ActiveSupport::Notifications::Event.new(*args)
        puts "Got notification: #{event.inspect}"
      end
    end
  end
end
```

Subclass Railtie and provide an `initializer` method.

- [Rails::Railtie](http://edgeapi.rubyonrails.org/classes/Rails/Railtie.html)
- [EngineYard blog
  post](http://www.engineyard.com/blog/2010/extending-rails-3-with-railties/)

### Custom routes

#### To create custom `routes.rb` keywords

```rb
# # routes.rb:
# myplugin_for x
#
class ActionDispatch::Routing
  class Mapper
    def myplugin_for(*x)
    end
  end
end
```

### Example with a block

```rb
# authenticated do
#   resources :users
# end
#
def authenticated
  constraint = lambda { |request| request... }

  constraints(constraint) { yield }
end
```

See: [ActionDispatch::Routing::Mapper](http://api.rubyonrails.org/classes/ActionDispatch/Routing/Mapper.html)

## Custom generators

### References

- [Guide: generators](http://guides.rubyonrails.org/generators.html)
- [ActiveRecord::Generators::Base](http://api.rubyonrails.org/classes/ActiveRecord/Generators/Base.html)

### Basic

```rb
# rails g initializer
# lib/generators/initializer_generator.rb
class InitializerGenerator < Rails::Generators::Base
  def create_initializer_file
    create_file "config/initializers/initializer.rb", "# Add initialization content here"
  end
end
```

Extend `Rails::Generators::Base`. Each public method in the generator is executed when a generator is invoked.

### Generating a generator

```sh
$ rails generate generator initializer
```

### NamedBase

```rb
class InitializerGenerator < Rails::Generators::Base
  def lol
    puts file_name
  end
end
```

Use `NamedBase` instead if you want to take an argument. It will be available as
`file_name`.

### More

```rb
class InitializerGenerator < Rails::Generators::NamedBase
  #
  source_root File.expand_path("../templates", __FILE__)
  desc "Description goes here."
end
```

### Generators lookup

When invoking `rails g XXX`:

```
[rails/]generators/XXX/XXX_generator.rb
[rails/]generators/XXX_generator.rb
```

When invoking `rails g XXX:YYY`:

```
[rails/]generators/XXX/YYY_generator.rb
```

### ActiveModel 'acts as'

```rb
# yaffle/lib/yaffle/acts_as_yaffle.rb
module Yaffle
  module ActsAsYaffle
    extend ActiveSupport::Concern

    included do
    end

    module ClassMethods
      def acts_as_yaffle(options = {})
        # your code will go here
      end
    end
  end
end

ActiveRecord::Base.send :include, Yaffle::ActsAsYaffle
```
