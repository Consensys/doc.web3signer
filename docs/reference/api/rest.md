---
description: Web3Signer REST API reference
sidebar_position: 2
---

# REST API

## View the REST API documentation

View the [REST API documentation] for more information about the available APIs.

## Enable Swagger UI

You can interact with APIs using [Swagger UI].
To do this, set [`--swagger-ui-enabled`](../cli/options#swagger-ui-enabled) to `true`.

Access Swagger UI at `http:<interface>:<port>/swagger-ui` where:

- `interface` is specified using [`--http-listen-host`](../cli/options#http-listen-host).
- `port` is specified using [`http-listen-port`](../cli/options#http-listen-port).

The default location is `http://localhost:9000/swagger-ui`.

You can also use tools such as [Postman] or [curl] to interact with Web3Signer APIs.

<!-- Links -->

[REST API documentation]: https://consensys.github.io/web3signer/
[Postman]: https://www.postman.com/
[curl]: https://curl.haxx.se/
[Swagger UI]: https://swagger.io/tools/swagger-ui/
