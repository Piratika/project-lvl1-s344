install: install-deps install-flow-typed

run:
	npx babel-node -- 'src/bin/brain-games.js' 10

start:
	npm run babel-node -- src/bin/brain-games.js

install-deps:
	npm install

install-flow-typed:
	npx flow-typed install

build:
	rm -rf dist
	npm run build

test:
	npm test

check-types:
	npx flow

lint:
	npx eslint .

publish:
	npm publish

.PHONY: test
