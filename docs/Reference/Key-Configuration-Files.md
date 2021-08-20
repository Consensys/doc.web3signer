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
| **keyPath**             | Path to secret in the HashiCorp Vault containing the private key. Syntax is the same as the path used in [HashiCorp KV Secrets Engine Version 2 HTTP API](https://www.vaultproject.io/api-docs/secret/kv/kv-v2#read-secret-version)|
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

=== "azure-secret example"

    ```
    type: "azure-secret"
    keyType: "BLS"
    authenticationMode: "USER_ASSIGNED_MANAGED_IDENTITY"
    clientId: "***"
    tenantId: "***"
    vaultName: "AzureKeyVault"
    secretName: "SecretName"
    ```

=== "azure-key example"

    ```
    type: "azure-key"
    clientId: "***"
    clientSecret: "***"
    tenantId: "***"
    vaultName: "AzureKeyVault"
    keyName: "KeyName"
    ```

| Key                     | Description                           |
|-------------------------|---------------------------------------|
| **type**                | Type of configuration file. Use `azure-secret` or `azure-key`.|
| **authenticationMode**  | Authentication type being used. Can only be used with the `azure-secret` type. Valid options are `CLIENT_SECRET`, `SYSTEM_ASSIGNED_MANAGED_IDENTITY`, and `USER_ASSIGNED_MANAGED_IDENTITY`. Defaults to `CLIENT_SECRET`. |
| **keyType**             | Signing key type. Valid options are `BLS` or `SECP256K1`. Defaults to `SECP256K1`. |
| **clientId**            | ID used to authenticate with Azure Key Vault. Required when using the `azure-key` type, or when using `azure-secret` with the `CLIENT_SECRET` or `USER_ASSIGNED_MANAGED_IDENTITY` authentication modes. |
| **clientSecret**        | Secret used to access the vault. Required for the `CLIENT_SECRET` authentication mode.|
| **tenantId**            | The tenant ID used to authenticate with Azure Key Vault. |
| **vaultName**           | Name of the vault to access. Sub-domain of vault.azure.net. |
| **secretName**          | Name of the key stored in the Azure Key Vault under Secrets settings. Required when using the `azure-secret` type. |
| **keyName**             | Name of the key stored in the Azure Key Vault under Keys settings. Required when using the `azure-key` type. |

## YubiHSM 2

Use the private key stored in the YubiHSM 2 hardware security module.

| Key                | Description                           |
|--------------------|---------------------------------------|
| **type**           | Type of configuration file. Use `yubihsm2`.|
| **keyType**        | Signing key type. Valid options are `BLS` or `SECP256K1`. Defaults to `BLS`. |
| **connectorUrl**   | URL of the YubiHSM service. Accepts a URL (`http://host:12345`) or USB URL (`yhusb://serial=13201047`) You need a running [connector service] if you specify an HTTP address. If you specify `yhusb://`, then Web3Signer picks the first YubiHSM device automatically.|
| **authKey**        | Authentication key ID used to open a user session, in decimal format. |
| **password**       | The password for the authentication key. |
| **opaqueObjId**    | The object ID of the stored key, in decimal format. |
| **pkcs11ModulePath** | Path the [PKCS#11 module]. |
| **additionalInitConfig** | Optional. Configuration options for the [PKCS#11 module]. |

!!! example

     ```yaml
     type: yubihsm2
     keyType: SECP256K1
     connectorUrl: http://localhost:12345
     authKey: 2
     password: changeme
     opaqueObjId: 5
     pkcs11ModulePath: /usr/bin/yubihsm-sdk/lib/pkcs11/yubihsm_pkcs11.so
     additionalInitConfig: debug libdebug timeout=5
     ```

## USB Armory Mk II

Use the private key stored in the USB Armory Mk II hardware security module. Web3Signer requires
access to the [Interlock application] which must be installed on the device in order to access the
keys.

| Key                  | Description                           |
|----------------------|---------------------------------------|
| **type**             | Type of configuration file. Use `interlock`.|
| **keyType**          | Signing key type. Valid options are `BLS` or `SECP256K1`. Defaults to `BLS`. |
| **interlockUrl**     | URL of the Interlock web-based file manager. Defaults to `https://10.0.0.1`. |
| **knownServersFile** | [File used by Web3Signer] to trust the Interlock server certificate. This file is automatically generated if it does not already exist. |
| **volume**           | Name of the Interlock volume. |
| **password**         | Password used to access the Interlock volume. |
| **keyPath**          | Path to the text file containing the BLS or SECP private key (as a HEX encoded string) on the Interlock file manager. These files can be created directly using Interlock from a browser. |

!!! example

    ```yaml
    type: interlock
    interlockUrl: https://10.0.0.1
    knownServersFile: ./knownServers.txt
    volume: armory
    password: usbarmory
    keyPath: /key1.txt
    ```
<!-- Links -->
[signing key configuration file]: ../HowTo/Use-Signing-Keys.md
[keystore file]: https://github.com/ethereum/EIPs/blob/master/EIPS/eip-2335.md
[PKCS#11 module]: https://developers.yubico.com/YubiHSM2/Component_Reference/PKCS_11/
[connector service]: https://developers.yubico.com/yubihsm-connector/
[Interlock application]: https://github.com/f-secure-foundry/interlock/blob/master/README.md
[File used by Web3Signer]: ../HowTo/Store-Keys-HSM/Use-USB-Armory.md#known-server-file
