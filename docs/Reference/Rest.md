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

## Endpoint example usage

### `/api/v1/eth2/publicKeys`

Returns the ETH2 BLS public keys for the private keys that have been loaded into Web3Signer.

### `/api/v1/eth2/sign/{identifier}`

Signs data for the ETH2 BLS public key specified as part of the URL and returns the signature.

### `/eth/v1/keystores`

Lists all validating public keys known to and decrypted by this keymanager binary

### `/reload`

Reloads signer keys asynchronously.
This is used after adding new keys to a current set of validators.
The call reloads the keys and makes Web3signer aware of the change.
Not used by validator clients

### `/upcheck`

Checks the Web3Signer server status.
Confirms if Web3Signer is connected and running.
Not used by validator clients

<!-- Links -->
[REST API documentation]: https://consensys.github.io/web3signer/
[Postman]: https://www.postman.com/
[cURL]: https://curl.haxx.se/
[Swagger UI]: https://swagger.io/tools/swagger-ui/
