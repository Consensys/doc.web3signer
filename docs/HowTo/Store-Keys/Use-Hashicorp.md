---
description: Signing transactions with key stored in Hashicorp Key Vault
---

# Using EthSigner with Hashicorp Vault

EthSigner supports storing the signing key in [Hashicorp Vault](https://www.hashicorp.com/products/vault/).

TLS is enabled by default between EthSigner and Hashicorp Vault.

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

## Start Besu

[Start Besu](https://besu.hyperledger.org/en/stable/HowTo/Get-Started/Starting-node/) with the
[`--rpc-http-port`](https://besu.hyperledger.org/en/stable/Reference/CLI/CLI-Syntax/#rpc-http-port)
option set to `8590` to avoid conflict with the default EthSigner listening port (`8545`).

!!! example

    ```bash
    besu --network=dev --miner-enabled --miner-coinbase=0xfe3b557e8fb62b89f4916b721be55ceb828dbd73 --rpc-http-cors-origins="all" --host-whitelist=* --rpc-http-enabled --rpc-http-port=8590 --data-path=/tmp/tmpDatdir
    ```

!!! important
    EthSigner requires a [chain ID](https://besu.hyperledger.org/en/stable/Concepts/NetworkID-And-ChainID/) to be
    used when signing transactions. The downstream Ethereum client must be operating in a milestone supporting replay
    protection. That is, the genesis file must include at least the Spurious Dragon milestone
    (defined as `eip158Block` in the genesis file) so the blockchain is using a chain ID.

## Create the Known Servers File

Create a file (in this example, `knownHashicorpServers`) that lists one or more
trusted Hashicorp Vault servers. The file contents use the format
`<hostame>:<port> <hex-string>` where:

* `<hostname>` is the server hostname
* `<port>` is the port used for communication
* `<hex-string>` is the SHA-256 fingerprint of the server's certificate.

!!! example

    ```
    localhost:8200 7C:B3:3E:F9:98:43:5E:62:69:9F:A9:9D:41:14:03:BA:83:24:AC:04:CE:BD:92:49:1B:8D:B2:A4:86:39:4C:BB
    127.0.0.1:8200 7C:B3:3E:F9:98:43:5E:62:69:9F:A9:9D:41:14:03:BA:83:24:AC:04:CE:BD:92:49:1B:8D:B2:A4:86:39:4C:BB
    ```

The file is required if TLS is enabled, to disable TLS, set
[`hashicorp-signer --tls-enabled`](../../Reference/CLI/CLI-Syntax.md#tls-enabled) to `false`.

## Start EthSigner with Hashicorp Vault signing

Start EthSigner.

!!! example

    ```bash
    ethsigner --chain-id=2018 --downstream-http-port=8590 hashicorp-signer --host=127.0.0.1 --port=8200 --auth-file=authFile --tls-known-server-file=/Users/me/my_node/knownHashicorpServers
    ```

!!! tip
    Use the [--http-listen-port](../../Reference/CLI/CLI-Syntax.md#http-listen-port) option to change the
    EthSigner listening port if `8545` is in use.

You can now [use EthSigner to sign transactions](../Transactions/Make-Transactions.md) with the key
stored in the Hashicorp Vault.
