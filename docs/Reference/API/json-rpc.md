---
description: Web3Signer JSON-RPC API reference
sidebar_position: 1
---

# Web3Signer JSON-RPC API

:::note

- All JSON-RPC HTTP examples use the default host and port endpoint `http://127.0.0.1:8545`.
- The examples use Hyperledger Besu, but any Ethereum client can be used. :::

## `eth_accounts`

Returns the account address with which Web3Signer is signing transactions.

Returns multiple accounts if multiple signers are configured.

### Parameters

None

### Returns

`Array of data` - Account address with which Web3Signer is signing transactions

<!--tabs-->

# curl HTTP request

```bash
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_accounts","params":[],"id":1}' http://127.0.0.1:8545
```

# JSON result

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": ["0xfe3b557e8fb62b89f4916b721be55ceb828dbd73"]
}
```

<!--/tabs-->

## `eth_sign`

Calculates an Ethereum specific signature using `sign(keccak256("\x19Ethereum Signed Message:\n" + len(message) + message)))."`

Adds a prefix to the message that makes the calculated signature recognizable as an Ethereum specific signature. This prevents malicious dapps from signing arbitrary data (for example, a transaction) and using the signature to impersonate the victim.

### Parameters

`DATA` - 20-byte account address

`DATA` - Data string to sign

### Returns

`DATA` - Signature

<!--tabs-->

# curl HTTP request

```bash
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_sign","params":["0x78e6e236592597c09d5c137c2af40aecd42d12a2", "0x2eadbe1f"], "id":1}' http://127.0.0.1:8545
```

# JSON result

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0xa6122e277f46fea78f3e97d3354a03ad20b2296733dfefbadc7305c80e70ce9826d44f12ab5aa488689744657491c70d3b654d7f60f8f50beefac9abcf02a4cf1b"
}
```

<!--/tabs-->

### `eth_signTransaction`

Signs a transaction that can be submitted to Besu at a later time using [`eth_sendRawTransaction`](https://besu.hyperledger.org/en/stable/Reference/API-Methods/#eth_sendrawtransaction).

#### Parameters

Transaction object:

| Key | Type | Required/Optional | Value |
| --- | :-- | --- | --- |
| **from** | Data, 20&nbsp;bytes | Required | Address of the sender. |
| **to** | Data, 20&nbsp;bytes | Optional for contract creation | Address of the receiver. `null` if a contract creation transaction. |
| **gas** | Quantity | Optional | Gas provided by the sender. Default is `90000`. |
| **gasPrice** | Quantity | Optional | Gas price provided by the sender in Wei. Default is `0`. |
| **nonce** | Quantity | Optional | Number of transactions made by the sender before this one. Must be specified if using [GoQuorum](https://consensys.net/docs/goquorum/). |
| **value** | Quantity | Optional | Value transferred in Wei. |
| **data** | Quantity | Optional | Compiled contract code or hash of the invoked method signature and encoded parameters. |

#### Returns

`result` : `data` - The signed transaction object.

:::info

<!--tabs-->

# curl HTTP request

```bash
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_signTransaction","params":[{"from": "0xfe3b557e8fb62b89f4916b721be55ceb828dbd73","to": "0xd46e8dd67c5d32be8058bb8eb970870f07244567","gas": "0x7600","gasPrice": "0x9184e72a000","value": "0x9184e72a", "nonce":"0x46"}], "id":1}' http://127.0.0.1:8545
```

# JSON result

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0xa3f20717a250c2b0b729b7e5becbff67fdaef7e0699da4de7ca5895b02a170a12d887fd3b17bfdce3481f10bea41f45ba9f709d39ce8325427b57afcfc994cee1b"
}
```

<!--/tabs-->
