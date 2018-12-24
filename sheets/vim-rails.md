---
title: Vim-rails
category: Vim
html_class: key-codes
---

### Alternate files

| Command | Description                    |
| ------- | ------------------------------ |
| `:A`    | alternate file (test)          |
| `:R`    | related file (controller/view) |

#### What it does

| .                     | :A                | :R              |
| --------------------- | ----------------- | --------------- |
| **Model**             | test/models/      | db/schema.rb    |
| **Controller method** | test/controllers/ | app/views/      |
| **View template**     | test/views/       | app/controllers |

### Abbreviations

| Abbrev  | Expansion        |
| ------- | ---------------- |
| `AC::`  | ActionController |
| `AR::`  | ActiveRecord     |
| `AV::`  | ActionView       |
| `...`   | ...              |
| ---     | ---              |
| `logd(` | logger.debug     |
| `logi(` | logger.info      |
| `...`   | ...              |

Type `:Rabbrev` for a full list.

### Model

| Abbrev   | Expansion                 |
| -------- | ------------------------- |
| `bt(`    | `belongs_to`              |
| `hm(`    | `has_many`                |
| `ho(`    | `has_one`                 |
| `habtm(` | `has_and_belongs_to_many` |

### Controllers

| Abbrev | Expansion       |
| ------ | --------------- |
| `pa[`  | params          |
| `re(`  | redirect_to     |
| `rp(`  | render partial: |
| `rst(` | respond_to      |

### Views

| Abbrev  | Expansion                   |
| ------- | --------------------------- |
| `dotiw` | `distance_of_time_in_words` |
| `taiw`  | `time_ago_in_words`         |

## Extracting partials

```rb
# from view => app/views/home/_foo_partial.haml
  :Rextract home/foo_partial

# from model => app/models/concerns/foo_concern.rb
  :Rextract FooConcern
```

## Loading files

### App

```
:Econtroller <file>     # app/controllers/*_controller.rb
:Ehelper                # app/helpers/*_helper.rb
:Emodel <file>          # app/models/*.rb
:Ejob <file>            # app/jobs/*_job.rb
:Emailer <file>         # app/mailers/*.rb
```

### DB

```conf
:Emigration <file>     # db/migrations/*.rb
:Eschema               # db/schema.rb
```

### Lib

```conf
:Elib <file>      # lib/*.rb
:Elib             # Gemfile
:Etask <file>     # lib/tasks/*.rake
```

### Assets

```
:Estylesheet
:Ejavascript
```

### Views

```
:Eview
:Elayout
```

### Test

```conf
:Espec
:Eunittest
  # test/{unit,models,helpers}/*_test.rb
  # spec/{unit,models,helpers}/*_spec.rb
```

```conf
:Efunctionaltest
  # test/{functional,controllers,mailers}/*_test.rb
  # spec/{functional,controllers,mailers}/*_spec.rb
```

```conf
:Eintegrationtest
  # test/integration/*_test.rb
  # spec/{features,requests,integration}/*_spec.rb
  # features/*.feature
```

```conf
:Efixtures
:Efunctionaltest
```

### Config

```conf
:Einitializer <file>          # config/initializers/*.rb
:Elocale                      # config/locales/*.yml
:Eenvironment                 # application.rb
:Eenvironment development     # config/environments/*.rb
```

### Reference

* [vim-rails](https://github.com/tpope/vim-rails)
