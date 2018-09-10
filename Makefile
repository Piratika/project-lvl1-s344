install: 
	npm install

run:
	npx babel-node -- 'src/bin/brain-games.js' 10

start:
	npm run babel-node -- src/bin/brain-games.js


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
