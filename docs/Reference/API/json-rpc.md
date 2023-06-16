---
description: Web3Signer JSON-RPC API reference
sidebar_position: 1
---

# Web3Signer JSON-RPC API

:::note

- All JSON-RPC HTTP examples use the default host and port endpoint `http://127.0.0.1:8545`.
- The examples use Hyperledger Besu, but any Ethereum client can be used.

:::

## `eth_accounts`

Returns the account address with which Web3Signer is signing transactions.

Returns multiple accounts if multiple signers are configured.

### Parameters

None

### Returns

`Array of data` : Account address with which Web3Signer is signing transactions.

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

:::

## `eth_sign`

Calculates an Ethereum specific signature using `sign(keccak256("\x19Ethereum Signed Message:\n" + len(message) + message)))."`

Adds a prefix to the message that makes the calculated signature recognizable as an Ethereum specific signature. This prevents misuse where a malicious DApp signs arbitrary data (for example a transaction) and uses the signature to impersonate the victim.

### Parameters

`DATA` : 20-byte account address

`DATA` : data string to sign

### Returns

`DATA` : Signature

:::info

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
