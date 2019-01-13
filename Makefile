SHEET_PATH := $(shell pwd -LP)/sheets
PORT := 19400
HOST := 0.0.0.0

# Start development server
develop: devhints-engine
	cd devhints-engine && env SHEET_PATH=${SHEET_PATH} yarn run gatsby develop --host ${HOST} --port ${PORT}

# Start development server, but only for wip/
develop-wip: devhints-engine
	cd devhints-engine && env SHEET_PATH=${SHEET_PATH}/wip yarn run gatsby develop --host ${HOST} --port ${PORT}

# Build
build: public
public: devhints-engine
	cd devhints-engine && env SHEET_PATH=${SHEET_PATH} yarn run build
	rm -rf ./public
	mv devhints-engine/public ./public
	echo "next.devhints.io" > public/CNAME

# Build
build-prefixed:
	env PATH_PREFIX=/cheatsheets-ng make build
	rm -f public/CNAME

# Deploys. Be sure to 'make build' (or 'make build-prefixed') first
deploy:
	@if [ ! -e public ]; then echo "ERR: public/ not found. Try 'make build' (or 'build-prefixed') first"; exit 1; fi
	yarn run gh-pages -d public

# Update (or create) devhints-engine
devhints-engine:
	if [ ! -e devhints-engine ]; then git clone https://github.com/rstacruz/devhints-engine.git -b master; fi
	cd devhints-engine && git pull origin master
	cd devhints-engine && yarn

.PHONY: devhints-engine
