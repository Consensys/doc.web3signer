---
description: Signing transactions with key stored in Azure Key Vault
---

# Using Web3Signer with Azure Key Vault

Web3Signer supports storing the signing key in [Azure Key Vault](https://azure.microsoft.com/en-au/services/key-vault/).

## Storing the private key in Azure Key Vault

Create a signing key in [Azure Key Vault](https://docs.microsoft.com/en-us/azure/key-vault/)
and register Web3Signer as an application for the key.

Take note of the following to specify when [configuring the signing key configuration file]:

* Vault name, which is part of the URL (for example `https://<vaultname>.vault.azure.net`)
* Client secret credentials, which includes:

    * Client ID
    * Client secret
    * Tenant ID

* Key name, which is the name of the secret.

## Configure the signing key file

Configure the [signing key configuration file] with the parameters to access the private key in
Azure Key Vault.

## Start Teku

[Start Teku with the external signer options]:

!!! example

    ```bash
    teku --network=medalla \
    --eth1-endpoint=http://localhost:8545 \
    --validators-external-signer-public-keys=0xa99a...e44c,0xb89b...4a0b \
    --validators-external-signer-url=http://localhost:9000
    ```

## Start Web3Signer

Start Web3Signer and ensure the signing key file is located in the directory specified in the
[`--key-store-path`](../../Reference/CLI/CLI-Syntax.md#key-store-path).

!!! example

    ```bash
    web3signer --key-store-path=/Users/me/keyFiles/
    ```

You can now use Web3Signer to sign transactions with the key stored in the Azure Key Vault.

<!-- links -->
[Start Teku with the external signer options]: https://docs.teku.pegasys.tech/en/latest/HowTo/External-Signer/Use-External-Signer/
[signing key configuration file]: ../../Reference/Key-Configuration-Files.md
[configuring the signing key configuration file]: #configure-the-signing-key-file