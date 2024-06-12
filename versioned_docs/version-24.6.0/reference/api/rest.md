---
description: Use for signing consensus layer payloads
sidebar_position: 2
---

# Web3Signer REST API

The Web3Signer REST API contains an ETH2 (that is, consensus layer) API, and an ETH1 (that is, execution layer) API. 
Use the ETH2 API for signing consensus layer payloads. 

We recommend using the [Web3Signer JSON-RPC API](json-rpc.md) for signing execution layer payloads. The ETH1 REST API contains a basic signing method but does not implement transaction encoding
or create an an Ethereum signature. 

## View the REST API documentation

View the [REST API documentation] for more information about the available APIs.

## Enable Swagger UI

You can interact with APIs using [Swagger UI].
To do this, set [`--swagger-ui-enabled`](../cli/options.md#swagger-ui-enabled) to `true`.

Access Swagger UI at `http:<interface>:<port>/swagger-ui` where:

- `interface` is specified using [`--http-listen-host`](../cli/options.md#http-listen-host).
- `port` is specified using [`http-listen-port`](../cli/options.md#http-listen-port).

The default location is `http://localhost:9000/swagger-ui`.

You can also use tools such as [Postman] or [curl] to interact with Web3Signer APIs.

<!-- Links -->

[REST API documentation]: https://consensys.github.io/web3signer/
[Postman]: https://www.postman.com/
[curl]: https://curl.haxx.se/
[Swagger UI]: https://swagger.io/tools/swagger-ui/
