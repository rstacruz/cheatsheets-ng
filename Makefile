SHEET_PATH := $(shell pwd -LP)/sheets
PORT := 19337
HOST := 0.0.0.0

develop: devhints-engine
	cd devhints-engine && env SHEET_PATH=${SHEET_PATH} yarn run develop --host ${HOST} --port ${PORT}

develop-wip: devhints-engine
	cd devhints-engine && env SHEET_PATH=${SHEET_PATH}/wip yarn run develop --host ${HOST} --port ${PORT}

build: public
build-prefixed:
	env PATH_PREFIX=/cheatsheets-ng make build

public: devhints-engine
	cd devhints-engine && env SHEET_PATH=${SHEET_PATH} yarn run build
	rm -rf ./public
	mv devhints-engine/public ./public

deploy:
	@if [ ! -e public ]; then echo 'ERR: public/ not found. Try "make build" first'; exit 1; fi
	yarn run gh-pages -d public

devhints-engine:
	git clone https://github.com/rstacruz/devhints-engine.git -b master
	cd devhints-engine && yarn
