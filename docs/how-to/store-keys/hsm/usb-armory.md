---
sidebar_label: Use USB Armory Mk II
description: Configure Web3Signer to use a USB Armory Mk II device.
sidebar_position: 2
---

# Use Web3Signer with USB Armory Mk II

:::caution USB Armory Mk II deprecation notice
Web3Signer has deprecated private key storage support on USB Armory Mk II and will remove it in a future release.

If you need this feature, consider maintaining a fork and submitting pull requests. Alternatively, you can
use an older Web3Signer version that supports these storage mechanisms.
:::

Web3Signer can sign payloads using private keys stored in a [USB Armory Mk II device].
Users must install the [Interlock application] on the device to enable communication with Web3Signer.

Web3Signer supports using the device as a secure key storage only.

**Prerequisites**:

- Install the [Interlock application] on the [USB Armory Mk II device].

## Store private key files in USB Armory

Perform the following steps to use USB Armory to store signing keys:

1. Connect to the Interlock web-based file manager on the device. The default URL is `https://10.0.0.1`.
1. In the device, create a file for each private key using any naming format, and add the private
   key unencrypted to the file contents. The `0x` prefix is optional.
1. [Configure a signing key configuration file] for each signing key that Web3Signer requires access to.

:::info important
The [USB Armory Mk II device] only allows one connection at a time.
Ensure you log out of the web-based file manager before using the device with Web3Signer.

Use the `INTERLOCK_CLIENT_TIMEOUT_MS` environment variable to override the Interlock timeout from Web3Signer.
The default is 5000 ms.
:::

## Known server file

The Interlock application by default uses a self-signed certificate.
Web3Signer automatically creates a known server file to trust the Interlock certificate on first
connection to the Interlock application, and uses the file on subsequent connections.

:::info important
Web3Signer attempts to create the file using the `knownServersFile` key in the [key configuration file].
Ensure the file location is writable by the Web3Signer process.
:::

Alternatively you can manually create the file and add the certificate details in the format
`<host>:<port> <sha265_signature_of_interlock_certificate>`

```bash
10.0.0.1:443 DF:65:B8:02:08:5E:91:82:0F:91:F5:1C:96:56:92:C4:1A:F6:C6:27:FD:6C:FC:31:F2:BB:90:17:22:59:5B:50
```

After storing keys,
[load keys into Web3Signer using a key configuration file](../../load-keys.md#use-key-configuration-files).

<!-- links -->

[USB Armory Mk II device]: https://www2.withsecure.com/en/solutions/innovative-security-hardware/armory-drive
[Interlock application]: https://github.com/f-secure-foundry/interlock/blob/master/README.md
[Configure a signing key configuration file]: ../../load-keys.md#use-key-configuration-files
[key configuration file]: ../../../reference/key-config-file-params.md#usb-armory-mk-ii
