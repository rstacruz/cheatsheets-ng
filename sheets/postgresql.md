---
title: PostgreSQL
---

## PostgreSQL

<!-- {.-three-column} -->

### Console

```sh
psql
```

### Commands

| Command       | Description            |
| ------------- | ---------------------- |
| `\du`         | Show roles             |
| `\dt`         | Show tables            |
| `\l`          | Show databases         |
| `\c`          | Connect to a database  |
|               |                        |
| `\d <table>`  | Show columns           |
| `\d+ <table>` | Show columns (verbose) |
|               |                        |
| `\q`          | Quit                   |

These are commands in `psql`. Replace anything within `<placeholder>` accordingly.

### Managing databases

| Command             | Description     |
| ------------------- | --------------- |
| `createdb <dbname>` | Create database |
| `dropdb <dbname>`   | Drop database   |
|                     |                 |
| `createuser <user>` | Create a user   |

These are shell commands.
