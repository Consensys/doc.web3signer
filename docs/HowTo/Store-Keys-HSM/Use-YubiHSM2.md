---
title: Use YubiHSM2
description: Configure Web3Signer to use a YubiHSM 2 device
sidebar_position: 1
---

# Use Web3Signer with YubiHSM 2

Web3Signer can sign payloads using private keys stored in the [YubiHSM 2 hardware security module].

Web3Signer supports using the device as a secure key storage only.

**Prerequisites**:

- Install the [YubiHSM 2 SDK] on the Web3Signer machine.
- [Store private keys in the device] using the `opaque-data` algorithm in `hex` format.
- All private keys on the device must be accessible using the same authentication key ID and password.

To communicate with the YubiHSM 2device, Web3Signer uses the PKCS#11 driver to load the [PKCS#11 module] in the SDK.

:::info Important

A limitation of the PKCS#11 driver is that it communicates with only one device by loading one instance of the PKCS#11 module. If using multiple YubiHSM 2 devices then you must have additional copies of the SDK installation.

Additionally, the loaded PKCS#11 module can open only one session when communicating with a YubiHSM 2 device. Because [key configuration files] are parsed in parallel, the same authentication key ID and password must be specified in the [key configuration files] for a given device.

:::

[Configure a signing key configuration file] for each signing key that Web3Signer requires access to.

<!-- links -->

[YubiHSM 2 hardware security module]: https://developers.yubico.com/YubiHSM2/
[Store private keys in the device]: https://developers.yubico.com/YubiHSM2/Commands/Put_Opaque.html
[YubiHSM 2 SDK]: https://developers.yubico.com/YubiHSM2/Releases/
[Opaque Data algorithm]: https://developers.yubico.com/YubiHSM2/Concepts/Algorithms.html
[Configure a signing key configuration file]: ../Use-Signing-Keys.md
[YubiHSM connector]: https://developers.yubico.com/yubihsm-connector/
[PKCS#11 module]: https://developers.yubico.com/YubiHSM2/Component_Reference/PKCS_11/
[key configuration files]: ../../Reference/Key-Configuration-Files.md#yubihsm-2
