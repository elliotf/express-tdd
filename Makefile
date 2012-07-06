test:
	NODE_PATH=. ./node_modules/.bin/mocha --recursive --reporter list --require should

clean:
	npm prune

.PHONY: test
.PHONY: clean
