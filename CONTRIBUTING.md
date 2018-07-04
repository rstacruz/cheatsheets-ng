# Developer notes

## Dev setup (Docker)

You need [Docker][docker] (with docker-compose).

[docker]: https://gist.github.com/rstacruz/297fc799f094f55d062b982f7dac9e41

```sh
alias dr='docker-compose run --rm --service-ports web'

git clone https://github.com/rstacruz/cheatsheets-ng.git
cd cheatsheets-ng

# first time setup
dr yarn

# start server
dr yarn develop
```

This starts a server in <http://localhost:19337/>. You can also use `docker-compose up`.

## Dev setup (traditional)

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

Unless you override `$PORT`, this stars a server in <http://localhost:19337/>.

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
