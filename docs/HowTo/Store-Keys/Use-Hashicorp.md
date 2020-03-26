---
description: Using Eth2Signer with Hashicorp Vault
---

# Using Eth2Signer with Hashicorp Vault

Eth2Signer supports storing the signing key in [Hashicorp Vault](https://www.hashicorp.com/products/vault/).


## Storing private key in Hashicorp Vault

After installing [Hashicorp Vault](https://learn.hashicorp.com/vault/getting-started/install) and
[starting the server](https://learn.hashicorp.com/vault/getting-started/dev-server):

1. Set the `VAULT_ADDR` environment variable using the command displayed after starting the server:

    ```bash
    export VAULT_ADDR='http://127.0.0.1:8200'
    ```

1. Save the root token displayed after starting the server in a file called `authFile`.

1. Put your signing key into the Hashicorp Vault:

    ```bash tab="Command"
    vault kv put secret/ethsignerSigningKey value=<Private Key without 0x prefix>
    ```

    ```bash tab="Example"
    vault kv put secret/ethsignerSigningKey value=8f2a55949038a9610f50fb23b5883af3b4ecb3c3bb792cbcefbd1542c692be63
    ```

    The private key is stored in the default location for EthSigner. The key must be a base 64
    encoded private key for ECDSA for curve secp256k1.
