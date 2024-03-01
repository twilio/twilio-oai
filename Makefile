.PHONY: spectral install test test-docker clean

install:
	npm install

spectral: install
	./node_modules/.bin/spectral lint spec/json/twilio_*.json -Dq --verbose
test: spectral

test-docker:
	docker build -t twilio/twilio-oai .
	docker run twilio/twilio-oai ./node_modules/.bin/spectral lint spec/json/twilio_*.json -Dq

clean:
	rm -f package-lock.json
	rm -rf node_modules
