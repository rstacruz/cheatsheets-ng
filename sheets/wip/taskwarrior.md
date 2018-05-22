---
title: Taskwarrior
category: CLI
updated: 2018-05-21
weight: 0
intro: |
  [Taskwarrior](https://taskwarrior.org) is a command-line task manager.
---

## Basics

<!-- {.-three-column} -->

### Creating and listing

#### Create

```bash
$ task add Write a cheatsheet
  Created task 1.
```

<!-- {data-line="1"} -->

#### List

```bash
$ task
  ID  Age  Description
  --  ---  -----------
   1  20s  Write a cheatsheet
   2  21s  Review what we write
```

<!-- {data-line="1"} -->

### Dismissing

#### As finished

```bash
$ task 1 done
  Completed task 1 'Write a cheatsheet'.
  Completed 1 task.
```

<!-- {data-line="1"} -->

#### As cancelled

```bash
$ task 1 delete
  Deleted task 1 'Write a cheatsheet'.
```

<!-- {data-line="1"} -->

### Time tracking

#### Starting

```bash
$ task 1 start
  Starting task 1 'Write a cheatsheet'.
```

<!-- {data-line="1"} -->

#### Finishing

```bash
$ task 1 stop
  Stopping task 1 'Write a cheatsheet'.
```

<!-- {data-line="1"} -->

## Command structure

<!-- {.-three-column} -->

### Basic style

```bash
task 1 <command>
task 1 2 5-7 <command>
task +tag <command>
task project:Home <command>
```

## Filters

### Project `project:xxx`

#### Adding

```bash
task add -- project:Devhints write sheets
```

#### Listing

```bash
task list project:Devhints
task list pro:Devhints
```

### Tags `+tag`

```
task add hello +home
task list +home
```

## Listing and querying

### Listing commands

| Command         | Description     |
| --------------- | --------------- |
| `task list`     | List tasks      |
| `task all`      | All tasks       |
| ---             | ---             |
| `task active`   | Active tasks    |
| `task overdue`  | Overdue         |
| ---             | ---             |
| `task minimal`  | Minimal display |
| `task long`     | Longlist        |
| ---             | ---             |
| `task blocked`  | Blocked tasks   |
| `task blocking` | BLocking tasks  |

### Querying

```bash
task due.before:eom priority.not:L list
```

```bash
task '(due < eom or priority != L)' list
```
