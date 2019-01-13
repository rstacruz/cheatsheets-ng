---
title: Git extras
category: Git
updated: 2018-12-25
---

### Git-flow

#### git-feature

```bash
$ git feature myfeature
  switched to branch 'feature/rofl'
```

#### git-feature finish

```bash
$ ...
$ git checkout develop
$ git feature finish myfeature
  merging 'feature/rofl' into develop
  deleted branch 'feature/rofl'
```

Also `git-bug` and `git-refactor`.

### Branches

#### git-delete-merged-branches

```bash
$ git delete-merged-branches
  # hint: do `git remote prune origin` after
```

#### git-create-branch / git-delete-branch

```bash
$ git create-branch development
$ git delete-branch development
```

#### git-fresh-branch

```bash
$ git fresh-branch gh-pages
```

### Inspecting

```bash
$ git summary   # repo age, commits, active days, etc
$ git impact    # impact graph
$ git effort    # commits per file
```

### Github

#### git-fork

```bash
$ git fork strongloop/express
```

```bash
# sync your fork with the original repository:
$ git remote add upstream https://github.com/ORIGINAL_OWNER/ORIGINAL_REPOSITORY.git
$ git fetch upstream; git merge upstream/master
```

### Tags

#### git-release / git-delete-tag

```bash
$ git release v1.0.0           # commit, tag, push-tags
$ git delete-tag v1.0.0
```

### Conveniences

#### git-ignore

```bash
$ git ignore "*.log"
```

### Locking

Assumes that changes will not be committed.

#### git-lock

```bash
$ git lock config/database.yml
$ git unlock config/database.yml
```

### Etc

#### git-obliterate

```bash
$ git obliterate secret.yml   # remove all references to it
```

### References

* https://github.com/visionmedia/git-extras
