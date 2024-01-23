---
description: Learn more about Web3Signer's Architecture.
sidebar_position: 3
---

# Architecture 

Web3Signer is a remote signing client comprised of three main components:

## The Remote Signer
This [loads private keys](../how-to/load-keys.md) into memory and responds to signature requests. If you are using an [HSM](../how-to/store-keys/hsm/_category_.json) or [Vault](../how-to/store-keys/vaults/_category_.json) for Execution Layer signing, the keys remain at rest. This component communicates with the keystore if used, the slashing DB, and the APIs to coordinate remote signing. 

## The [Slashing Database](./slashing-protection.md)
This Postgres Database keeps track of what messages have been signed and by what key. Database locking ensures that if Web3signer instances load the same keys, only one Web3signer instance actually signs. 

## The [APIs](../reference/api/_category_.json)
Web3Signer supports REST and JSON-RPC APIs to sign consensus layer and execution layer payloads respectively.  These connections should be carefully secured. Web3Signer offers [TLS communication](../how-to/configure-tls.md).