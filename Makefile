SHEET_PATH := $(shell pwd -LP)/sheets

develop: devhints-engine
	cd devhints-engine && env SHEET_PATH=${SHEET_PATH} yarn run develop

build: public

public: devhints-engine
	cd devhints-engine && env SHEET_PATH=${SHEET_PATH} yarn run build
	rm -rf ./public
	mv devhints-engine/public ./public

deploy: public
	yarn run gh-pages -d public

devhints-engine:
	git clone git@github.com:rstacruz/devhints-engine.git
	cd devhints-engine && yarn
