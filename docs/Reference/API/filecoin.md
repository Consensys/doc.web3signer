---
description: Filecoin JSON-RPC API reference
sidebar_position: 3
toc_max_heading_level: 2
---

# Filecoin JSON-RPC API

Access Filecoin JSON-RPC API methods at `http://<HOST>:<PORT>/rpc/v1/filecoin`, where:

- `<HOST>` is specified using [`--http-listen-host`](../CLI/CLI-Syntax.md#http-listen-host).
- `<PORT>` is specified using [`--http-listen-port`](../CLI/CLI-Syntax.md#http-listen-port).

The default location is `http://127.0.0.1:9000/rpc/v1/filecoin`.

## `Filecoin.WalletHas`

Indicates whether an address exists in the wallet.

### Parameters

`String` : Filecoin address

### Returns

`result` : _Boolean_ - `true` if the address exists in the wallet; otherwise `false`.

<!--tabs-->

# curl HTTP request

```bash
curl -X POST --data '{"jsonrpc": "2.0", "method": "Filecoin.WalletHas", "params": ["t1m...fvy"], "id": 1}' http://127.0.0.1:9000/rpc/v1/filecoin
```

# JSON result

```json
{
  "id": 1,
  "result": true,
  "jsonrpc": "2.0"
}
```

<!--/tabs-->

## `Filecoin.WalletList`

Lists all the addresses in the wallet.

Addresses can be based on secp256k1 or BLS12-381 signing keys.

### Parameters

None

### Returns

`result`: Array of Filecoin addresses.

<!--tabs-->

# curl HTTP request

```bash
curl -X POST --data '{"jsonrpc":"2.0","method":"Filecoin.WalletList","params":[],"id":1}' http://127.0.0.1:9000/rpc/v1/filecoin
```

# JSON result

```json
{
  "id": 1,
  "result": ["t1m...fvy", "t3u...aja"],
  "jsonrpc": "2.0"
}
```

<!--/tabs-->

## `Filecoin.WalletSign`

Signs the provided data using the private key belonging to the supplied Filecoin address.

### Parameters

`String` : Filecoin address

`String` : Data to sign

### Returns

`result`: Object containing:

- `Type`: Integer identifying the type of key used to sign the data; `1` is secp256k1 and `2` is BLS12-381.
- `Data`: Signature.

<!--tabs-->

# curl HTTP request

```bash
curl -X POST --data '{"jsonrpc": "2.0", "method": "Filecoin.WalletSign", "params": ["t1m...fvy", "NDI="], "id": 1}' http://127.0.0.1:9000/rpc/v1/filecoin
```

# JSON result

```json
{
  "id": 1,
  "result": {
    "Type": 1,
    "Data": "5vEDqBPUTQA44p51Qaclwih+b2WVND7gp12yNXFBrtwsZFuwqQYc7A8CZjocrn6NVPjMLpqvJjGxWY2lXb6a3wE="
  },
  "jsonrpc": "2.0"
}
```

<!--/tabs-->

## `Filecoin.WalletSignMessage`

Signs a [message] using the private key belonging to the supplied Filecoin address.

### Parameters

`String` : Filecoin address

_Object_: [Unsigned message object]

### Returns

`result`: Object containing the sent unsigned [`Message`](https://spec.filecoin.io/#section-systems.filecoin_vm.message) object, and the [`Signature`](https://spec.filecoin.io/#section-systems.filecoin_vm.message.message-semantic-validation) object.

<!--tabs-->

# curl HTTP Request

```bash
curl -X POST --data '{"jsonrpc": "2.0", "method": "Filecoin.WalletSignMessage", "params": ["t1m...fvy", {"Version": 9, "To": "t01234", "From": "t01234", "Nonce": 42, "Value": "0", "GasLimit": 9, "GasFeeCap": "0", "GasPremium": "0", "Method": 1, "Params": "Ynl0ZSBhcnJheQ=="}], "id": 1}' http://127.0.0.1:9000/rpc/v1/filecoin
```

# JSON result

```json
{
  "id": 1,
  "result": {
    "Message": {
      "Version": 9,
      "To": "t01234",
      "From": "t01234",
      "Nonce": 42,
      "Value": "0",
      "GasLimit": 9,
      "GasFeeCap": "0",
      "GasPremium": "0",
      "Method": 1,
      "Params": "Ynl0ZSBhcnJheQ=="
    },
    "Signature": {
      "Type": 1,
      "Data": "iuG3q2djl4cRYKXBIvjf5bMgVIyOmgsNZQUDJLJH8aV5aAHmtACKILADp8lNvHK8Tg8bYCi8mNFYAI4/cABOJQA="
    }
  },
  "jsonrpc": "2.0"
}
```

<!--/tabs-->

## `Filecoin.WalletVerify`

Indicates whether a signature is valid.

The supplied address does not need to exist in the wallet.

### Parameters

`String` : Filecoin address

`String` : Unsigned data

_Object_ : Signature object containing:

- `Type`: Integer identifying the type of key used to sign the data; `1` is secp256k1 and `2` is BLS12-381.
- `Data`: Signature.

### Returns

<!--tabs-->

# curl HTTP Request

```bash
curl -X POST --data '{"jsonrpc": "2.0", "method": "Filecoin.WalletVerify", "params": ["t1m...fvy", "NDI=", {"Type":1,"Data":"5vEDqBPUTQA44p51Qaclwih+b2WVND7gp12yNXFBrtwsZFuwqQYc7A8CZjocrn6NVPjMLpqvJjGxWY2lXb6a3wE="}], "id": 1}' http://127.0.0.1:9000/rpc/v1/filecoin
```

# JSON result

```json
{
  "id": 1,
  "result": true,
  "jsonrpc": "2.0"
}
```

<!--/tabs-->

<!-- links -->

[message]: https://spec.filecoin.io/#section-systems.filecoin_vm.message
[Unsigned message object]: https://spec.filecoin.io/#section-systems.filecoin_vm.message
