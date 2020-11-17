---
title: Configure Web3Signer to use a USB Armory Mk II device
---

# Using Web3Signer with USB Armory Mk II

Web3Signer can sign payloads using private keys stored in a [USB Armory Mk II device]. Users must
install the [Interlock application] on the device to allow communicate with Web3Signer.

Web3Signer supports using the device as a secure key storage only.

**Prerequisites**:

* Install the [Interlock application] on the [USB Armory Mk II device].

## Create the private key file in USB Armory

Connect to the Interlock web-based file manager on the device. The default URL is
`https://10.0.0.1`.

In the device, create a file for each private key using any naming format, and add the private key
unencrypted to the file contents.

[Configure a signing key configuration file] for each signing key that Web3Signer requires access
to.

!!! important

    The [USB Armory Mk II device only allows one connection at a time. Ensure you logout of the
    web-based file manager before using the device with web3Signer.
    
    Use the `INTERLOCK_CLIENT_TIMEOUT_MS` environment variable to override the Interlock connection
    timeout . Defaults to 5000 ms.

<!-- links -->
[USB Armory Mk II device]: https://www.f-secure.com/en/consulting/foundry/usb-armory
[Interlock application]: https://github.com/f-secure-foundry/interlock/blob/master/README.md
[Configure a signing key configuration file]: ../Use-Signing-Keys.md