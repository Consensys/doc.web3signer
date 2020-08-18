---
title: Signing key configuration file parameters
---

# Signing key configuration file parameters

A [signing key configuration file] is a YAML file that defines the parameters to access the
signing key.

The YAML file name must use the format `<validatorPublicKeyAddress>.yaml`. For example
`b65c2a1dc6a8eaadae03d5849dd6ac614b32dc5f8af37e2eb4ced0c72fd69fabe90fc783b0435f5a36ff1338385ef837.yaml`

## Raw unencrypted files

Stores the private key as an unencrypted value directly in the key configuration file.

!!! example

    ```
    type: "file-raw"
    privateKey: "0x25b1166a43c109cb330af8945d364722757c65ed2bfed5444b5a2f057f82d391"
    ```

| Key                  | Description                           |
|----------------------|---------------------------------------|
| **type**             | Type of key signing. Use `file-raw`.|
| **privateKey**       | Hexadecimal encoded private key string.|

## Keystore file

Use the private key stored in a [keystore file].

!!! example

    ```
    type: "file-keystore"
    keystoreFile: "95e57532ede3c1dd879061153f9cfdcdefa9dc5fb9c954a6677bc6641b8d26e39f70b660bbaa732c47277c0096e11400.json"
    keystorePasswordFile: "95e57532ede3c1dd879061153f9cfdcdefa9dc5fb9c954a6677bc6641b8d26e39f70b660bbaa732c47277c0096e11400.password”
    ```

| Key                      | Description                           |
|--------------------------|---------------------------------------|
| **type**                 | Type of key signing. Use `file-keystore`.|
| **keystoreFile**         | Location of the keystore file. |
| **keystorePasswordFile** | Text file containing the password to decrypt the keystore file. |

## Hashicorp Vault

Use the private key stored in Hashicorp Vault.

!!! example

    ```
    type: "hashicorp"
    tlsEnabled: "true"
    keyPath: "/v1/secret/data/secretPath"
    keyName: "secretName"
    tlsKnownServersPath: "/Users/me/project/knownhosts"
    serverHost: "localhost"
    serverPort: "32895"
    timeout: "10000"
    token: "s.MuZwBqZ0iE1HzvD64v3HMlhT”
    ```

| Key                     | Description                           |
|-------------------------|---------------------------------------|
| **type**                | Type of key signing. Use `hashicorp`.|
| **tlsEnabled**          | Enable or disable TLS. Defaults to `true` |
| **keyPath**             | Path to secret in the Hashicorp Vault containing the private key. |
| **keyName**             | Name of the key storing the private key in the vault.|
| **tlsKnownServersPath** | Path to the file containing a list of trusted Hashicorp Vault servers.|
| **serverHost**          | Host of the Hashicorp Vault server.  |
| **serverPort**          | Port of the Hashicorp Vault server.  |
| **timeout**             | Timeout in milliseconds for requests to the Hashicorp Vault server. |
| **token**               | The root token displayed by the Hashicorp Vault server. |


## Azure Key Vault

Use the private key stored in Azure Key Vault.

!!! example

    ```
    type: "azure"
    clientId: "47efee5c-8079-4b48-31bb4f2e9a22"
    clientSecret: "0DgK4V_YA84RPk7.f_1op0-em_a46wSe.Z"
    tenantId: 17255fb0-373b-4a1a-bd47-d211ab86df81
    vaultName: "AzureKeyVault"
    secretName: "3ee2224386c82ffea477e2adf28a2929f5c349165a4196158c7f3a2ecca40f35"
    ```

| Key                     | Description                           |
|-------------------------|---------------------------------------|
| **type**                | Type of key signing. Use `azure`.|
| **clientId**            | ID used to authenticate with Azure Key Vault.  |
| **clientSecret**        | Secret used to access the vault. |
| **tenantId**            | The tenant ID used to authenticate with Azure Key Vault. |
| **vaultName**           | Name of the vault to access. Sub-domain of vault.azure.net. |
| **secretName**          | Name of the key stored in the Azure Key Vault.  |

<!-- Links -->
[signing key configuration file]: ../HowTo/Use-Signing-Keys.md
[keystore file]: https://github.com/ethereum/EIPs/blob/master/EIPS/eip-2335.md
