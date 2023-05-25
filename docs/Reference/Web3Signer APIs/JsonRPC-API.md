---
title: JSON-RPC API methods
description: Web3Signer JSON-RPC API methods reference
---

# Web3Signer JSON-RPC API methods

:::info

- All JSON-RPC HTTP examples use the default host and port endpoint `http://127.0.0.1:8545`.
- The examples use Hyperledger Besu, but any Ethereum client can be used.

:::

## Eth methods

### `eth_accounts`

Returns the account address with which Web3Signer is signing transactions.

Returns multiple accounts if multiple signers are configured.

#### Parameters

None

#### Returns

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
