---
description: Signing transactions with key stored in Azure Key Vault
---

# Using Web3Signer with Azure Key Vault

Web3Signer supports signing keys and secrets in [Azure Key Vault](https://azure.microsoft.com/en-au/services/key-vault/).

## Storing the private key in Azure Key Vault

Create a signing key in [Azure Key Vault](https://docs.microsoft.com/en-us/azure/key-vault/)
and register Web3Signer as an application for the key.

Take note of the following to specify when [configuring the signing key configuration file] or [bulk
loading Ethereum 2.0 signing keys]:

* Vault name, which is part of the URL (for example `https://<vaultname>.vault.azure.net`)
* Client secret credentials, which includes:

    * Client ID
    * Client secret
    * Tenant ID

* Key name, which is the name of the secret.

<!-- links -->
[configuring the signing key configuration file]: ../Use-Signing-Keys.md#using-key-configuration-files
[bulk loading Ethereum 2.0 signing keys]: ../Use-Signing-Keys.md#bulk-loading-ethereum-20-keys
