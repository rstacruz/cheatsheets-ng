---
title: Git tricks
category: Git
---

## Git tricks

<!-- {.three-column} -->

### Refs

| Ref      | Description           |
| -------- | --------------------- |
| `HEAD^`  | 1 commit before head  |
| `HEAD^^` | 2 commits before head |
| `HEAD~5` | 5 commits before head |

### Branches

```bash
# create a new branch
  git checkout -b $branchname
  git push origin $branchname --set-upstream
```

```bash
# get a remote branch
  git fetch origin
  git checkout --track origin/$branchname
```

```bash
# delete local remote-tracking branches (lol)
  git remote prune origin
```

```bash
# list merged branches
  git branch -a --merged
```

```bash
# delete remote branch
  git push origin :$branchname
```

```bash
# go back to previous branch
  git checkout -
```

### Collaboration

```bash
# Rebase your changes on top of the remote master
  git pull --rebase upstream master
```

```bash
# Squash multiple commits into one for a cleaner git log
# (on the following screen change the word pick to either 'f' or 's')
  git rebase -i $commit_ref
```

### Submodules

```bash
# Import .gitmodules
  git submodule init
```

```bash
# Clone missing submodules, and checkout commits
  git submodule update --init --recursive
```

```bash
# Update remote URLs in .gitmodules
# (Use when you changed remotes in submodules)
  git submodule sync
```

### Diff with stats

```bash
git diff --stat
app/a.txt    | 2 +-
app/b.txt    | 8 ++----
2 files changed, 10 insertions(+), 84 deletions(-)
```

### Just filenames

```bash
git diff --summary
```

### Log options

```bash
--oneline
  e11e9f9 Commit message here
```

```bash
--decorate
  shows "(origin/master)"
```

```bash
--graph
  shows graph lines
```

```bash
--date=relative
  "2 hours ago"
```

## Misc

<!-- {.three-column} -->

### Cherry pick

```bash
git rebase 76acada^
```

### Misc

```bash
# get current sha1 (?)
  git show-ref HEAD -s
```

```bash
# show single commit info
  git log -1 f5a960b5
```

```bash
# Go back up to root directory
  cd "$(git rev-parse --show-top-level)"
```

### Short log

```bash
 $ git shortlog
 $ git shortlog HEAD~20..    # last 20 commits
```

```bash
 James Dean (1):
     Commit here
     Commit there

 Frank Sinatra (5):
     Another commit
     This other commit
```

### Bisect

```bash
git bisect start HEAD HEAD~6
git bisect run npm test
git checkout refs/bisect/bad   # this is where it screwed up
git bisect reset
```

### Manual bisection

```bash
git bisect start
git bisect good   # current version is good
```

```bash
git checkout HEAD~8
npm test          # see if it's good
git bisect bad    # current version is bad
```

```bash
git bisect reset  # abort
```

### Searching

```bash
git log --grep="fixes things"  # search in commit messages
git log -S"window.alert"       # search in code
git log -G"foo.*"              # search in code (regex)
```

### GPG Signing

```bash
git config set user.signingkey <GPG KEY ID>       # Sets GPG key to use for signing
```

```bash
git commit -m "Implement feature Y" --gpg-sign    # Or -S, GPG signs commit
```

```bash
git config set commit.gpgsign true                # Sign commits by default
git commit -m "Implement feature Y" --no-gpg-sign # Do not sign
```
