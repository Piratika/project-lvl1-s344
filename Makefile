install: 
	npm install

run:
	npx babel-node -- 'src/bin/brain-games.js' 10
	npx babel-node -- 'src/bin/brain-even.js' 10
	npx babel-node -- 'src/bin/brain-calc.js' 10
	npx babel-node -- 'src/bin/brain-gcd.js' 10
start:
	npm run babel-node -- src/bin/brain-games.js
	npm run babel-node -- src/bin/brain-even.js
	npm run babel-node -- src/bin/brain-calc.js
	npm run babel-node -- src/bin/brain-gcd.js

build:
	rm -rf dist
	npm run build

lint:
	npx eslint .

publish:
	npm publish

.PHONY: test
