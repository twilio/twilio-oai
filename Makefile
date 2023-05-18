.PHONY: spectral install test test-docker clean

install:
	npm install

spectral: install
	./node_modules/.bin/spectral lint spec/json/twilio_*.json -Dq

spectral-ruleset:
	./node_modules/.bin/spectral lint spec/json/twilio_*.json -Dq --ruleset rulesets/twilio_open_api_ruleset.yaml --verbose

test: spectral spectral-ruleset

test-docker:
	docker build -t twilio/twilio-oai .
	docker run twilio/twilio-oai ./node_modules/.bin/spectral lint spec/json/twilio_*.json -Dq

clean:
	rm -f package-lock.json
	rm -rf node_modules
