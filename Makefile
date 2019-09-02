help:
	@echo
	@echo Makefile targets
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' Makefile | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-30s\033[0m %s\n", $$1, $$2}'
	@echo

SHEET_PATH := $(shell pwd -LP)/sheets
PORT := 19400
HOST := 0.0.0.0

develop: devhints-engine ## Start development server [alias: dev]
	cd devhints-engine \
		&& env SHEET_PATH=${SHEET_PATH} \
			yarn run gatsby develop --host ${HOST} --port ${PORT}

develop-wip: devhints-engine ## Start development server, but only for wip/ [alias: wip]
	cd devhints-engine \
		&& env SHEET_PATH=${SHEET_PATH}/wip \
			yarn run gatsby develop --host ${HOST} --port ${PORT}

# Build
build: public ## Build public/ for deployment
public: devhints-engine
	cd devhints-engine \
		&& env SHEET_PATH=${SHEET_PATH} yarn run build
	rm -rf ./public
	mv devhints-engine/public ./public
	echo "next.devhints.io" > public/CNAME

devhints-engine: ## Update (or create) devhints-engine
	if [ ! -e devhints-engine ]; then \
		git clone https://github.com/rstacruz/devhints-engine.git -b master; fi
	cd devhints-engine && git pull origin master
	cd devhints-engine && yarn

dev: develop
wip: develop-wip
.PHONY: devhints-engine dev
