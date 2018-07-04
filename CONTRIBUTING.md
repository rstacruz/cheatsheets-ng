# Developer notes

## Dev setup

You need recent versions of [Yarn] and [Node.js].

[yarn]: https://yarnpkg.com
[node.js]: https://nodejs.org/

```sh
git clone https://github.com/rstacruz/cheatsheets-ng.git
cd cheatsheets-ng

# first time setup
yarn

# start server
yarn develop
```

Unless you override `$PORT`, this opens in <http://localhost:19337/>.

## Linting

**Linters** - this lists files that need updating.

```bash
yarn run lint:check
yarn run prettier:check
```

**Formatters** - this tries to auto-format files.

```bash
yarn run prettier:fix
```
