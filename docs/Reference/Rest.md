---
description: Web3Signer RESTful API's
---

# REST API

## View the REST API documentation

View the [REST API documentation] for more information about the available APIs.

## Enable Swagger UI

You can also interact with APIs using [Swagger UI]. To do this, set
[`--swagger-ui-enabled`](CLI/CLI-Syntax.md#swagger-ui-enabled) to `true`.

Access Swagger UI at `http:<interface>:<port>/swagger-ui` where:

* `interface` is specified using [`--http-listen-host`](CLI/CLI-Syntax.md#http-listen-host)
* `port` is specified using [`http-listen-port`](CLI/CLI-Syntax.md#http-listen-port)

The default location is `http://localhost:9000/swagger-ui`.

You can also use tools such as [Postman] or [cURL] to interact with Web3Signer APIs.

## Key manager API

The [key manager API](https://consensys.github.io/web3signer/web3signer-eth2.html#tag/Keymanager) is a subset of API methods used to [manage the keys](../HowTo/Use-Signing-Keys.md#managing-your-keys) in Web3Signer.

Enable the key manager API by running Web3Signer with the [`--key-manager-api-enabled` subcommand](CLI/CLI-Subcommands.md#key-manager-api-enabled).

<!-- Links -->
[REST API documentation]: https://consensys.github.io/web3signer/
[Postman]: https://www.postman.com/
[cURL]: https://curl.haxx.se/
[Swagger UI]: https://swagger.io/tools/swagger-ui/
