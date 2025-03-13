---
sidebar_label: Use YubiHSM2
description: Configure Web3Signer to use a YubiHSM 2 device.
sidebar_position: 1
---

# Use Web3Signer with YubiHSM 2

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Web3Signer can sign payloads using private keys stored in the [YubiHSM 2 hardware security module].
Web3Signer supports using the device as a secure key storage only.

## Prerequisites

Install the [YubiHSM 2 SDK] on the Web3Signer machine.

## Store private keys in YubiHSM 2

[Store private keys in the device] using the `opaque-data` algorithm in `hex` format.
All private keys on the device must be accessible using the same authentication key ID and password.

The following steps show an example of storing a key in YubiHSM:

1. Store a private key in YubiHSM with `object-id=3` and `new-password=password3`, using the
    YubiHSM default credentials of `authkey=1` and `password=password`:

    <Tabs>
    <TabItem value="Command" label="Command" default>

    ```bash
    yubihsm-shell \
      --connector=yhusb://                                            \
      --authkey=1                                                     \
      --password=password                                             \
      --action=put-authentication-key                                 \
      --new-password=password3                                        \
      --object-id=3                                                   \
      --domains=1,2,3                                                 \
      --delegated=exportable-under-wrap,export-wrapped,import-wrapped \
      --capabilities=get-opaque,put-opaque,delete-opaque,export-wrapped,get-pseudo-random,put-wrap-key,import-wrapped
    ```
  
    </TabItem>
    <TabItem value="Output" label="Output" >

    ```bash
    Created session 0
    Stored Authentication key 0x0003
    ```

    </TabItem>
    </Tabs>

2. Put the opaque data using `authkey=3` with the opaque `object-ID=15`:

    <Tabs>
    <TabItem value="Command" label="Command" default>

    ```bash
    yubihsm-shell \
      --connector=yhusb://    \
      --authkey=3             \
      --password=password3    \
      --action=put-opaque     \
      --object-id=15          \
      --label="bls_key_1"     \
      --domains=1,2,3         \
      --algorithm=opaque-data \
      --capabilities=none     \
      --informat=hex --in=5e8d5667ce78982a07242739ab03dc63c91e830c80a5b6adca777e3f216a405d
    ```

    </TabItem>
    <TabItem value="Output" label="Output" >

    ```bash
    Session keepalive set up to run every 15 seconds
    Created session 0
    Stored 32 bytes to Opaque object 0x000f
    ```

    </TabItem>
    </Tabs>

3. Use `authkey=1` to view the inserted data:

    <Tabs>
    <TabItem value="Command" label="Command" default>
  
    ```bash
    yubihsm-shell \
      --connector=yhusb:// \
      --authkey=1          \
      --password=password  \
      --action=get-opaque  \
      --object-id=15       \
      --outformat=hex
    ```
  
    </TabItem>
    <TabItem value="Output" label="Output" >
  
    ```bash
    Session keepalive set up to run every 15 seconds
    Created session 0
    5e8d5667ce78982a07242739ab03dc63c91e830c80a5b6adca777e3f216a405d
    ```
  
    </TabItem>
    </Tabs>

4. Identify the location of the `yubihsm_pkcs11` dynamic library.
    For example, on Mac, it is installed at `/usr/local/lib/pkcs11/yubihsm_pkcs11.dylib` using the
    latest YubiHSM release.

    :::info Note for Mac only
    Due to a bug in how the YubiHSM libraries are generated, copy the file to the parent directory (`/usr/local/lib`):
  
    ```bash
    sudo cp /usr/local/lib/pkcs11/yubihsm_pkcs11.dylib /usr/local/lib/
    ```
  
    Create a soft link in the directory from where Web3Signer is running:

    ```bash
    ln -s /usr/local/lib/libyubihsm_usb.2.dylib ./libyubihsm_usb.2.dylib
    ```

    :::

5. Create a [key configuration file for YubiHSM](../../../reference/key-config-file-params.md#yubihsm-2)
    in the `keys` subdirectory.

    ```bash
    type: yubihsm
    connectorUrl: yhusb://
    authId: 3
    password: password3
    opaqueDataId: 15
    pkcs11ModulePath: /usr/local/lib/yubihsm_pkcs11.dylib
    additionalInitConfig: debug libdebug timeout=5
    ```

6. Specify the `key-store-path` as the `keys` subdirectory when starting Web3Signer.

    The output displayed indicates one key has been loaded:
  
    ```bash
    2023-10-04 15:30:27.761+10:00 | pool-2-thread-1 | INFO  | SignerLoader | Converting signing metadata to Artifact Signer using parallel streams ...
    [P11 - INF 15:30:27.769485] yubihsm_pkcs11.c:266 (C_Initialize): Found 1 configured connector(s)
    [LIB - INF 15:30:27.769505] yubihsm.c:4426 (yh_init_connector): Loading usb backend
    [LIB - INF 15:30:27.770065] yubihsm_libusb.c:61 (backend_create): backend_create
    [LIB - INF 15:30:27.772352] yubihsm_usb.c:48 (backend_connect): backend_connect
    [LIB - INF 15:30:27.772364] lib_util.c:178 (parse_usb_url): USB url parsed with serial decimal 0.
    ...
    2023-10-04 15:30:28.176+10:00 | pool-2-thread-1 | INFO  | DefaultArtifactSignerProvider | Total signers (keys) currently loaded in memory: 1
    ```

## PKCS#11 driver

To communicate with the YubiHSM 2 device, Web3Signer uses the PKCS#11 driver to load the
[PKCS#11 module] in the SDK.

:::info Important
A limitation of the PKCS#11 driver is that it communicates with only one device by loading one
instance of the PKCS#11 module.
If using multiple YubiHSM 2 devices then you must have additional copies of the SDK installation.

Additionally, the loaded PKCS#11 module can open only one session when communicating with a YubiHSM
2 device.
Because [key configuration files] are parsed in parallel, the same authentication key ID and
password must be specified in the [key configuration files] for a given device.
:::

<!-- links -->

[YubiHSM 2 hardware security module]: https://developers.yubico.com/YubiHSM2/
[Store private keys in the device]: https://developers.yubico.com/YubiHSM2/Commands/Put_Opaque.html
[YubiHSM 2 SDK]: https://developers.yubico.com/YubiHSM2/Releases/
[PKCS#11 module]: https://developers.yubico.com/YubiHSM2/Component_Reference/PKCS_11/
[key configuration files]: ../../../reference/key-config-file-params.md#yubihsm-2
