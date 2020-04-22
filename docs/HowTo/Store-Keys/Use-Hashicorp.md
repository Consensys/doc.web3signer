---
description: Using Eth2Signer with Hashicorp Vault
---

# Using Eth2Signer with Hashicorp Vault

Eth2Signer supports storing the signing key in [Hashicorp Vault](https://www.hashicorp.com/products/vault/).


## Storing a private key in Hashicorp Vault

After installing [Hashicorp Vault](https://learn.hashicorp.com/vault/getting-started/install) and
[starting the server](https://learn.hashicorp.com/vault/getting-started/dev-server):

1. Set the `VAULT_ADDR` environment variable using the command displayed after starting the server:

    ```bash
    export VAULT_ADDR='http://127.0.0.1:8200'
    ```

1. Copy or save the root token displayed after starting the server in a file.

1. Put your signing key into the Hashicorp Vault:

    ```bash tab="Command"
    vault kv put secret/eth2signerSigningKey value=<Private Key without 0x prefix>
    ```

    ```bash tab="Example"
    vault kv put secret/eth2signerSigningKey value=17079f966aa2d5db1678ed32467165bbbd640868e7371ade8d5812ea856d2bbf
    ```

## Create the Known Servers File

The file is required if TLS is enabled, to disable TLS set [`tlsEnabled`](../../Reference/Key-Configuration-Files.md#hashicorp-vault)
to `false`. 

Specify the file location in the [`tlsKnownServersPath`](../../Reference/Key-Configuration-Files.md#hashicorp-vault)
option.

The file contents use the format `<hostame>:<port> <hex-string>` where:

* `<hostname>` is the server hostname
* `<port>` is the port used for communication
* `<hex-string>` is the SHA-256 fingerprint of the server's certificate.

!!! example

    ```
    localhost:8200 7C:B3:3E:F9:98:43:5E:62:69:9F:A9:9D:41:14:03:BA:83:24:AC:04:CE:BD:92:49:1B:8D:B2:A4:86:39:4C:BB
    127.0.0.1:8200 7C:B3:3E:F9:98:43:5E:62:69:9F:A9:9D:41:14:03:BA:83:24:AC:04:CE:BD:92:49:1B:8D:B2:A4:86:39:4C:BB
    ```

## Start Teku

[Start Teku] with the [`--rest-api-enabled`](https://docs.teku.pegasys.tech/en/latest/Reference/CLI/CLI-Syntax/#rest-api-enabled)
option set to true, and specify
[`--validators-external-signer-public-keys`](https://docs.teku.pegasys.tech/en/latest/Reference/CLI/CLI-Syntax/#validators-external-signer-public-keys)
and [`--validators-external-signer-url`](https://docs.teku.pegasys.tech/en/latest/Reference/CLI/CLI-Syntax/#validators-external-signer-url).

!!! example

    ```bash
    teku --eth1-deposit-contract-address=dddddddddddddddddddddddddddddddddddddddd \
    --eth1-endpoint=http://localhost:8545 --validators-key-file=validator_keys \
    --p2p-port=9000 --rest-api-enabled=true \
    --validators-external-signer-public-keys=0xa99a...e44c,0xb89b...4a0b \
    --validators-external-signer-url=http://localhost:9000
    ```

## Start Eth2Signer

Start Eth2Signer and specify the location of the signing key configuration files
with the [`--key-store-path`](../../Reference/CLI/CLI-Syntax.md#key-store-path) option.

!!! example

    ```bash
    eth2signer --key-store-path=/Users/me/keyFiles/
    ```

<!-- Links -->
[Start Teku]: https://docs.teku.pegasys.tech/en/latest/HowTo/Get-Started/Register-Validators/#start-teku