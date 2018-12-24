---
title: Pry
category: Ruby libraries
---

### `cd` and `ls`

```
pry(main)> cd Array
```

```
pry(main)> ls
  Array.methods: [] try_convert
  Array#methods: & * + abbrev assoc at ...
```

```
pry(main)> show-source
```

### Code (`show-method`)

```
pry(main)> show-method Array#select
```

### Docs (`ri`, `show-doc`)

```
pry(main)> ri Array
pry(main)> ri Array#each
```

pry(main)> cd Gem
pry(main)> show-doc try_activate
```

### Finding (`find-method`)

```
pry(main)> find-method each
  Array#each
  Array#each_index
  Enumerable#each_slice
  ...
```

### Editing (`edit`)

```
pry(main)> edit Pry#repl
```

### Gems (`gem-*`)

```
pry(main)> gem-cd foo      # Switch to gem's dir
pry(main)> gem-install foo
pry(main)> gem-list
```

### Misc commands

```
pry(main)> hist    # History
pry(main)> wtf?    # Trace of recent exception
```

## Rails

### Rails console

```sh
pry -r ./config/environment
```

Also consider [pry-rails](https://rubygems.org/gems/pry-rails).

### Rails

```
pry(main)> show-models
pry(main)> show-routes
pry(main)> show-middleware
```

### ls

| Command     | Description      |
| ----------- | ---------------- |
| `ls`        | All              |
| ---         | ---              |
| `ls -m`     | Methods          |
| `ls -M`     | Instance methods |
| ---         | ---              |
| `ls -g`     | Globals          |
| `ls -l`     | Local vars       |
| `ls -c`     | Constants        |
| ---         | ---              |
| `ls -i`     | Instance vars    |
| ---         | ---              |
| `ls -G xxx` | Grey by regex    |

## Shell integration

`shell-mode` adds dir to the prompt.

```
pry(main)> shell-mode
pry(main):/home/x $
```

Commands with `.` are shell commands.

```
pry(main)> .cat hello.txt
```

## hirb

```rb
pry(main)> table User.all
pry(main)> view User.all
pry(main)> view User.all, fields: %w[id name email]
```

Add the [hirb](https://rubygems.org/gems/hirb) gem.


## pry-rescue

Add the [pry-rescue](https://github.com/ConradIrwin/pry-rescue) gem.

```rb
Pry::rescue {
  # raise exceptions here
}
```

#### Or run:

```
bundle exec rescue rspec
```

#### Additional commands:

```pry
pry(main)> cd-cause
pry(main)> try-again
```

### pry-remote

```rb
# In your code:
binding.remote_pry

# In the shell:
bundle exec pry-remote
```

Add the [pry-remote](https://github.com/Mon-Ouie/pry-remote) gem.

### References

* [Pry](https://github.com/pry/pry)
* [Hirb](https://github.com/cldwalker/hirb)
