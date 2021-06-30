.PHONY: spectral install test clean

install:
	npm install

spectral:
	./node_modules/.bin/spectral lint spec/json/twilio_*.json -Dq

test: spectral

clean:
	rm -f package-lock.json
	rm -rf node_modules
