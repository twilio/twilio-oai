@twilio/twilio-oai
========================

# Twilio's OpenAPI Specification

This repository contains [OpenAPI](https://www.openapis.org/) descriptions for [Twilio's API](https://docs.twilio.com).

Files can be found in the json/ and yaml/ directories.

## What is OpenAPI?

From the [OpenAPI Specification](https://github.com/OAI/OpenAPI-Specification):

> The OpenAPI Specification (OAS) defines a standard, programming language-agnostic interface description for HTTP APIs, which allows both humans and computers to discover and understand the capabilities of a service without requiring access to source code, additional documentation, or inspection of network traffic. When properly defined via OpenAPI, a consumer can understand and interact with the remote service with a minimal amount of implementation logic. Similar to what interface descriptions have done for lower-level programming, the OpenAPI Specification removes guesswork in calling a service.


## Project Status

This project is currently in **BETA**. We expect this description to be accurate but it is currently in **active development**. If you've identified a mismatch between Twilio's API behavior and this specification, [please open an issue.](https://github.com/twilio/twilio-oai/issues/new).

## Contributing

Because this description is used across Twilio's whole API development experience, we don't currently accept pull requests that directly modify the specification. This repository is automatically kept up to date with the specificiation used to validate Twilio API requests.
