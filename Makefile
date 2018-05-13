SHEET_PATH := $(shell pwd -LP)/sheets

develop: devhints-engine
	cd devhints-engine && env SHEET_PATH=${SHEET_PATH} yarn run develop

build: public

public: devhints-engine
	cd devhints-engine && env SHEET_PATH=${SHEET_PATH} yarn run build
	mv devhints-engine/public ./public

devhints-engine:
	git clone git@github.com:rstacruz/devhints-engine.git
	cd devhints-engine && yarn
