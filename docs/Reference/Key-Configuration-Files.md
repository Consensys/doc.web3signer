---
title: Signing key configuration file parameters
---

# Signing key configuration file parameters

A [signing key configuration file] is a YAML file that defines the parameters to access the
signing key.

## Raw unencrypted files

Stores the private key as an unencrypted value directly in the key configuration file.

!!! example

    ```
    type: "file-raw"
    keyType: "SECP256K1"
    privateKey: "0x25b1166a43c109cb330af8945d364722757c65ed2bfed5444b5a2f057f82d391"
    ```

| Key                  | Description                           |
|----------------------|---------------------------------------|
| **type**             | Type of configuration file. Use `file-raw`.|
| **keyType**          | Signing key type. Valid options are `BLS` or `SECP256K1`. Defaults to `BLS`. |
| **privateKey**       | Hexadecimal encoded private key string.|

## Keystore file

Use the private key stored in a [keystore file].

!!! example

    ```
    type: "file-keystore"
    keyType: "SECP256K1"
    keystoreFile: "95e57532ede3c1dd879061153f9cfdcdefa9dc5fb9c954a6677bc6641b8d26e39f70b660bbaa732c47277c0096e11400.json"
    keystorePasswordFile: "95e57532ede3c1dd879061153f9cfdcdefa9dc5fb9c954a6677bc6641b8d26e39f70b660bbaa732c47277c0096e11400.password”
    ```

| Key                      | Description                           |
|--------------------------|---------------------------------------|
| **type**                 | Type of configuration file. Use `file-keystore`.|
| **keyType**              | Signing key type. Valid options are `BLS` or `SECP256K1`. Defaults to `BLS`. |
| **keystoreFile**         | Location of the keystore file. |
| **keystorePasswordFile** | Text file containing the password to decrypt the keystore file. |

## HashiCorp Vault

Use the private key stored in HashiCorp Vault.

!!! example

    ```
    type: "hashicorp"
    keyType: "SECP256K1"
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
| **type**                | Type of configuration file. Use `hashicorp`.|
| **keyType**             | Signing key type. Valid options are `BLS` or `SECP256K1`. Defaults to `BLS`. |
| **tlsEnabled**          | Enable or disable TLS. Defaults to `true` |
| **keyPath**             | Path to secret in the HashiCorp Vault containing the private key. |
| **keyName**             | Name of the key storing the private key in the vault.|
| **tlsKnownServersPath** | Path to the file containing a list of trusted HashiCorp Vault servers.|
| **serverHost**          | Host of the HashiCorp Vault server.  |
| **serverPort**          | Port of the HashiCorp Vault server.  |
| **timeout**             | Timeout in milliseconds for requests to the HashiCorp Vault server. |
| **token**               | The root token displayed by the HashiCorp Vault server. |

## Azure Key Vault

Use the private key stored in Azure Key Vault. Supports two signing options:

* `azure-key` - Performs the signing in Azure Key Vault. Supports SECP256K1 signing keys only.
* `azure-secret` - Web3Signer fetches the keys from the vault and signs locally. Supports SECP256K1
    and BLS12-381 signing keys.

!!! example

    ```
    type: "azure-secret"
    keyType: "BLS"
    clientId: "65efaa5b-4029-4b54-98bb2e2e8a11"
    clientSecret: "0DgK4V_YA99RPk7.f_1op0-em_a46wSe.Z"
    tenantId: "34255fb0-379b-4a1a-bd47-d211ab86df81"
    vaultName: "AzureKeyVault"
    secretName: "3ff2254386c82ffea989e2adf28a2929f5c853165a4196158c7f3a2ecca40f35"
    ```

| Key                     | Description                           |
|-------------------------|---------------------------------------|
| **type**                | Type of configuration file. Use `azure-secret` or `azure-key`.|
| **keyType**             | Signing key type. Valid options are `BLS` or `SECP256K1`. Defaults to `SECP256K1`. |
| **clientId**            | ID used to authenticate with Azure Key Vault.  |
| **clientSecret**        | Secret used to access the vault. |
| **tenantId**            | The tenant ID used to authenticate with Azure Key Vault. |
| **vaultName**           | Name of the vault to access. Sub-domain of vault.azure.net. |
| **secretName**          | Name of the key stored in the Azure Key Vault.  |

## YubiHSM 2

Use the private key stored in the YubiHSM 2 hardware security module.

| Key                | Description                           |
|--------------------|---------------------------------------|
| **type**           | Type of configuration file. Use `yubihsm2`.|
| **keyType**        | Signing key type. Valid options are `BLS` or `SECP256K1`. Defaults to `BLS`. |
| **connectorUrl**   | URL of the YubiHSM service. Accepts a URL (`http://host:12345`) or USB URL (`yhusb://serial=13201047`). |
| **authKey**        | Authentication key ID used to open a user session, in decimal format. |
| **password**       | The password for the authentication key. |
| **opaqueObjId**    | The object ID of the stored key, in decimal format. |
| **outputFormat**   | The output format for the stored key. Accepts either `ASCII` or `hex`.|
| **caCertPath**     | Optional. Path to the certificate if using a TLS connection to the YubiHSM connector. |
| **proxyUrl**       | Optional. Proxy server being use for the YubiHSM connector. |

!!! example

   ```yaml
   type: yubihsm2
   connectorUrl: http://localhost:12345
   authKey: 2
   password: changeme
   opaqueObjId: 5
   keyType: BLS
   outputFormat: ASCII
   ```

<!-- Links -->
[signing key configuration file]: ../HowTo/Use-Signing-Keys.md
[keystore file]: https://github.com/ethereum/EIPs/blob/master/EIPS/eip-2335.md
