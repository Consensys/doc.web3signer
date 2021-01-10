---
description: Signing transactions with key stored in Azure Key Vault
---

# Using Web3Signer with Azure Key Vault

Web3Signer supports using [Azure Key Vault](https://azure.microsoft.com/en-au/services/key-vault/)
to sign payloads in the following ways:

* Using Azure Key Vault to perform the signing operation. Supports SECP256K1 signing keys only.
* Fetching the keys from Azure Key Vault and signing locally.

Web3Signer supports the following authentication modes:

* [Azure Active Directory managed identity]:
    * System-assigned identities
    * User-assigned identities
* [Client secret].

## Storing the private key in Azure Key Vault

[Register Web3Signer as an application] and [add a signing key in Azure Key Vault].

Take note of the following to specify when [configuring the signing key configuration file] or [bulk
loading Ethereum 2.0 signing keys]:

* Vault name, which is part of the URL (for example `https://<vaultname>.vault.azure.net`)
* Client credentials, which can include:

    * Client ID
    * Client secret
    * Tenant ID
    
        !!! note
            Depending on the authentication mode, not all client credentials will be available.

* Key name, which is the name of the secret.

<!-- links -->
[configuring the signing key configuration file]: ../Use-Signing-Keys.md#using-key-configuration-files
[bulk loading Ethereum 2.0 signing keys]: ../Use-Signing-Keys.md#bulk-loading-ethereum-20-keys
[Register Web3Signer as an application]: https://docs.microsoft.com/en-us/azure/key-vault/general/authentication-fundamentals
[add a signing key in Azure Key Vault]: https://docs.microsoft.com/en-us/azure/key-vault/secrets/quick-create-portal#add-a-secret-to-key-vault
[Client secret]: https://docs.microsoft.com/en-us/azure/key-vault/secrets/about-secrets
[Azure Active Directory managed identity]: https://docs.microsoft.com/en-us/azure/app-service/overview-managed-identity?tabs=dotnet