FROM node:16

RUN mkdir /twilio
WORKDIR /twilio

ENV NODE_PATH /usr/local/lib/node_modules

COPY spec ./spec
COPY package* ./
COPY spectral.yaml .

RUN npm install . --include=dev
