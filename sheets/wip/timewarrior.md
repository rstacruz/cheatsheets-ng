---
title: Timewarrior
category: CLI
tags: [WIP]
intro: |
  [Timewarrior](http://timewarrior.net/) is a time tracker for the command line.
---

### Stopwatch

```
timew start [tags]
timew start 10:30
```

```
timew stop
timew cancel  # cancel current tracking
timew continue # continues last thing
```

See: [Stopwatch](https://taskwarrior.org/docs/timewarrior/stopwatch.html) _(taskwarrior.org)_

### Past logs

```
timew track 9am - 11am 'Staff Meeting'
```

### Reporting

```
timew month
timew day
timew summary
timew summary :week
```
