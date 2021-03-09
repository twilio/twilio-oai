.PHONY: spectral install clean

install:
	npm install

spectral:
	./node_modules/.bin/spectral lint spec/json/twilio_*.json -Dq

clean:
	rm -f package-lock.json
	rm -rf node_modules
