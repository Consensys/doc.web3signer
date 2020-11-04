---
title: Configure Web3Signer to use a YubiHSM 2 device
---

# Using Web3Signer with YubiHSM 2

Web3Signer can sign payloads using private keys stored in the [YubiHSM 2 hardware security module].

Web3Signer supports using the device as a secure key storage only.

**Prerequisites**:

* Install the  [YubiHSM 2 SDK] on the Web3Signer machine.
* [Store private keys in the device] using the `opaque-data` algorithm in `hex` format.
* All private keys on the device must be stored using the same Authentication Key ID and password.

!!! important

    If using multiple YubiHSM devices, then you must install the [YubiHSM 2 SDK] in a different path
    for each device. This is because Web3Signer requires access to the SDKs [PKCS#11 module] which
    can only load keys from one device.

[Configure a signing key configuration file] for each signing key that Web3Signer requires access
to.

<!-- links -->
[YubiHSM 2 hardware security module]: https://developers.yubico.com/YubiHSM2/
[Store private keys in the device]: https://developers.yubico.com/YubiHSM2/Commands/Put_Opaque.html
[YubiHSM 2 SDK]: https://developers.yubico.com/YubiHSM2/Releases/
[Opaque Data algorithm]: https://developers.yubico.com/YubiHSM2/Concepts/Algorithms.html
[Configure a signing key configuration file]: ../Use-Signing-Keys.md
[YubiHSM connector]: https://developers.yubico.com/yubihsm-connector/
[PKCS#11 module]: https://developers.yubico.com/YubiHSM2/Component_Reference/PKCS_11/
