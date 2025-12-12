---
description: REST API for signing consensus and execution layer payloads
sidebar_label: REST API
---

# Web3Signer REST API

The Web3Signer REST API provides endpoints for signing consensus layer and execution layer payloads.

- **[Consensus layer endpoints](eth2/)** - Sign BLS artifacts including blocks, attestations, and validator registrations.
- **[Execution layer endpoints](eth1/)** - Sign SECP256K1 data for execution layer transactions.

:::tip
We recommend using the [JSON-RPC API](json-rpc.md) for signing execution layer payloads. The execution layer REST API
contains a basic signing method but does not implement transaction encoding or create an Ethereum signature.
:::

## Use the API

You can interact with the Web3Signer APIs using tools such as [Postman] or [curl].

### Example: Get public keys

```bash
curl -X GET http://localhost:9000/api/v1/eth2/publicKeys
```

### Example: Sign a message

```bash
curl -X POST http://localhost:9000/api/v1/eth2/sign/{identifier} \
  -H "Content-Type: application/json" \
  -d '{
    "type": "ATTESTATION",
    "fork_info": {...},
    "attestation": {...}
  }'
```

<!-- Links -->

[Postman]: https://www.postman.com/
[curl]: https://curl.haxx.se/
