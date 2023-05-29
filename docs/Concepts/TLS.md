---
description: Secure communication using TLS
sidebar_position: 2
---

# TLS communication

Web3Signer supports TLS to secure inbound and outbound HTTP JSON-RPC requests, and communication with HashiCorp Vault.

Private keys and certificates for client and server TLS connections must be stored in password-protected PKCS #12 keystores. The [server (in this example, Hyperledger Besu) must be configured](https://besu.hyperledger.org/en/latest/Concepts/TLS/) to accept TLS connections.

Use the command line options to configure TLS on [HTTP JSON-RPC requests](../HowTo/Configure-TLS.md) and [HashiCorp Vault](../HowTo/Store-Keys-Vaults/Use-Hashicorp.md).
