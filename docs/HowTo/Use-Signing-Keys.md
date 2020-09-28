---
description: Using signing keys
---

# Use signing keys

Web3Signer supports BLS12-381 or secp256k1 signing keys stored in:

* Raw unencrypted files
* [Keystore files](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-2335.md)
* [Hashicorp Vault](../HowTo/Store-Keys/Use-Hashicorp.md)
* [Azure Key Vault](../HowTo/Store-Keys/Use-Azure.md).

You can configure access to the signing key by:

* [Creating a separate key configuration file] for each signing key.
* Using the [`eth2` subcommand options](../Reference/CLI/CLI-Subcommands.md#eth2) to bulk load
    Ethereum 2.0 signing keys stored in Azure Key Vault.

!!! note

    Bulk-loading is only available when using the Ethereum 2.0 platform with keys stored in
    Azure Key Vault, and can be used in combination with key configuration files.

## Using key configuration files

For each signing key, [configure a separate key configuration file] that defines the parameters
to access the key. The configuration files must be YAML-formatted, and can use any naming format,
but must have the `.yaml` extension.

Place the key configuration files in a single directory which you specify when starting Web3Signer.

Ue the [`--key-store-path`](../Reference/CLI/CLI-Syntax.md#key-store-path) option
to specify the location of the key configuration files.

!!! example

    ```bash
    web3signer --key-store-path=/Users/me/keyFiles/ eth2
    ```

!!! tip

    Files can be added or removed from the directory without needing to
    restart Web3Signer.

## Bulk loading Ethereum 2.0 keys

You can bulk load Ethereum 2.0 keys that are stored in Azure Key Vault. To do this use the
Web3Signer [`eth2` subcommand options](../Reference/CLI/CLI-Subcommands.md#eth2).

!!! example

    ```bash
    web3signer eth2 --azure-vault-enabled=true --azure-client-id=87efaa5b-4029-4b54-98bb2e2e8a11 \
    --azure-client-secret=0DgK4V_YA99RPk7.f_1op0-em_a46wSe.Z \
    --azure-tenant-id=34255fb0-379b-4a1a-bd47-d211ab86df81 \
    --azure-vault-name=AzureKeyVault
    ```

<!-- Link -->
[configure a separate key configuration file]: ../Reference/Key-Configuration-Files.md
[Creating a separate key configuration file]: #using-key-configuration-files
