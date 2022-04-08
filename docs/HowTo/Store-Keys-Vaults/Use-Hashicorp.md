---
description: Using Web3Signer with HashiCorp Vault
---

# Use Web3Signer with HashiCorp Vault

Web3Signer supports storing the signing key in [HashiCorp Vault](https://www.hashicorp.com/products/vault/).

## Store a private key in HashiCorp Vault

After installing [HashiCorp Vault](https://learn.hashicorp.com/vault/getting-started/install) and
[starting the server](https://learn.hashicorp.com/vault/getting-started/dev-server):

1. Set the `VAULT_ADDR` environment variable using the command displayed after starting the server:

    ```bash
    export VAULT_ADDR='http://127.0.0.1:8200'
    ```

1. Copy or save the root token displayed after starting the server in a file.

1. Enable the secret mount point using [KV v2 engine](https://www.vaultproject.io/docs/secrets/kv/kv-v2):

    !!! example
        Using Vault CLI, enable the KV v2 `secret` mount point:

        ```bash
        vault secrets enable -path=secret kv-v2
        ```

    !!! note

        Use `kv-v2` type as indicated in KV v2 doc. Web3Signer only works with v2 secrets.

        ??? example "Example Vault command to check if an existing secret is v1 or v2"

            If the engine used is V2, the secret is versioned and you can see the metadata with version field:

            ```bash
            vault kv get /secret/web3signerSigningKey
            ```

            === "Result if v2 (with metadata)"

                ```text
                ====== Metadata ======
                Key              Value
                ---              -----
                created_time     2020-11-27T10:15:59.91752Z
                deletion_time    n/a
                destroyed        false
                version          1

                ==== Data ====
                Key      Value
                ---      -----
                value    17079f966aa2d5db1678ed32467165bbbd640868e7371ade8d5812ea856d2bbf
                ```

            === "Result if v1"

                ```text
                ==== Data ====
                Key      Value
                ---      -----
                value    17079f966aa2d5db1678ed32467165bbbd640868e7371ade8d5812ea856d2bbf
                ```

1. [Write the key in HashiCorp Vault](https://learn.hashicorp.com/vault/getting-started/first-secret) as a hex string (without `0x` prefix):

    === "Command"

        ```bash
        vault kv put secret/web3signerSigningKey value=<Private Key without 0x prefix>
        ```

    === "Example"

        ```bash
        vault kv put secret/web3signerSigningKey value=17079f966aa2d5db1678ed32467165bbbd640868e7371ade8d5812ea856d2bbf
        ```

## Create the known servers file

The known servers file is required if TLS is enabled, to disable TLS set [`tlsEnabled`](../../Reference/Key-Configuration-Files.md#hashicorp-vault)
to `false`.

Specify the location of the known servers file in the [`tlsKnownServersPath`](../../Reference/Key-Configuration-Files.md#hashicorp-vault)
option of the [signing key configuration file].

The file contents use the format `<hostame>:<port> <hex-string>` where:

* `<hostname>` is the server hostname
* `<port>` is the port used for communication
* `<hex-string>` is the SHA-256 fingerprint of the server's certificate.

!!! example

    ```
    localhost:8200 7C:B3:3E:F9:98:43:5E:62:69:9F:A9:9D:41:14:03:BA:83:24:AC:04:CE:BD:92:49:1B:8D:B2:A4:86:39:4C:BB
    127.0.0.1:8200 7C:B3:3E:F9:98:43:5E:62:69:9F:A9:9D:41:14:03:BA:83:24:AC:04:CE:BD:92:49:1B:8D:B2:A4:86:39:4C:BB
    ```

[Start Web3Signer and specify the location of the signing key configuration file].

<!-- Links -->
[signing key configuration file]: ../Use-Signing-Keys.md
[Start Teku]: https://docs.teku.consensys.net/en/latest/HowTo/Get-Started/Register-Validators/#start-teku
[Start Web3Signer and specify the location of the signing key configuration file]: ../Get-Started/Start-Web3Signer.md
