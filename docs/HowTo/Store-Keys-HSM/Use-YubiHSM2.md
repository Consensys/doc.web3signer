---
title: Configure Web3Signer to use a YubiHSM 2 device
---

# Using Web3Signer with YubiHSM 2

Web3Signer supports using private keys stored in the [YubiHSM 2 hardware security module].

**Prerequisites**:

* Install the  [YubiHSM 2 SDK] on the Web3Signer machine.
* [Store private keys in the device] using the `opaque-data` algorithm in either the `ASCII` or
    `hex` format.

!!! important

    Web3Signer requires access to [`yubihsm-shell`](https://developers.yubico.com/yubihsm-shell/yubihsm-shell.html)
    in the SDK. Ensure that the `WEB3SIGNER_YUBIHSM_SHELL_PATH` environment variable points to
    the shell.

    For example:

    ```bash
    export WEB3SIGNER_YUBIHSM_SHELL_PATH=/usr/bin/yubihsm2-sdk/bin/yubihsm-shell
    ```

[Configure a signing key configuration file] with the details to access a stored key.

<!-- links -->
[YubiHSM 2 hardware security module]: https://developers.yubico.com/YubiHSM2/
[Store private keys in the device]: https://developers.yubico.com/YubiHSM2/Commands/Put_Opaque.html
[YubiHSM 2 SDK]: https://developers.yubico.com/YubiHSM2/Releases/
[Opaque Data algorithm]: https://developers.yubico.com/YubiHSM2/Concepts/Algorithms.html
[Configure a signing key configuration file]: ../Use-Signing-Keys.md