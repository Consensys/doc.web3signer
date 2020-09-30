---
title: Configure Web3Signer to use a YubiHSM 2 device
---

# Using Web3Signer with YubiHSM 2

Web3Signer supports the storing signing keys on the YubiHSM 2 hardware security module.

**Prerequisites**:

* Install the  YubiHSM 2 SDK on the Web3Signer machine.
* Add keys to the device using the [Opaque Data algorithm] in either the ASCII or Hex format

!!! important

    Web3Signer requires access to `yubihsm-shell`. If the SDK has been installed to a non-default
    location, ensure that the `WEB3SIGNER_YUBIHSM_SHELL_PATH` environment variable points to shell.
    For example:
    
    ```bash
    export WEB3SIGNER_YUBIHSM_SHELL_PATH=/usr/bin/yubisdk/bin/yubihsm-shell
    ```

[Configure the signing key configuration file] with the details to access the stored key.

<!-- links -->
[Opaque Data algorithm]: https://developers.yubico.com/YubiHSM2/Concepts/Algorithms.html
[Configure the signing key configuration file]: ../Use-Signing-Keys.md#using-key-configuration-files