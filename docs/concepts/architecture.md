---
description: Learn more about Web3Signer's architecture.
sidebar_position: 3
---

# Architecture 

Web3Signer is a remote signing client comprised of three main components:

- Remote signer
- Slashing database
- APIs 

## The Remote Signer

The remote signer [loads private keys](../how-to/load-keys.md) into memory and responds to signature requests. If you are using an [HSM](../how-to/store-keys/hsm/_category_.json) or a [vault](../how-to/store-keys/vaults/_category_.json) for Execution Layer signing, the keys remain at rest. This component communicates with the slashing database, the APIs, and with the keystore, if used, to coordinate remote signing. 

## The Slashing Database

The [slashing database](./slashing-protection.md) Postgres database keeps track of what messages have been signed and by what key. Database locking ensures that if Web3Signer instances load the same keys, only one Web3Signer instance actually signs. 

## The APIs

Web3Signer supports REST and [JSON-RPC APIs](../reference/api/_category_.json) to sign consensus layer and execution layer payloads respectively. These connections should be carefully secured. Web3Signer offers [TLS communication](../how-to/configure-tls.md).
