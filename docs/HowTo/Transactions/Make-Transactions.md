---
description: Make Transactions
---

# Make transactions

EthSigner provides transaction signing and access to your keystore by implementing the following JSON-RPC
methods:

* [`eea_sendTransaction`](#eea_sendtransaction)
* [`eth_accounts`](#eth_accounts)
* [`eth_sendTransaction`](#eth_sendtransaction)

All other JSON-RPC requests are passed through EthSigner to Hyperledger Besu and the result from Besu returned
by EthSigner.

!!! note
    EthSigner supports the JSON-RPC service over HTTP only.

The sender specified in [`eea_sendTransaction`](#eea_sendtransaction) and
[`eth_sendTransaction`](#eth_sendtransaction) requires a signing key.
Signing keys can be [stored externally or locally](../../Concepts/Overview.md).

## `eea_sendTransaction`

Creates and signs a [private transaction](https://besu.hyperledger.org/en/stable/Concepts/Privacy/Privacy-Overview/)
using the [signing key](../../Concepts/Overview.md).

EthSigner submits the signed transaction to Besu using [`eea_sendRawTransaction`](https://besu.hyperledger.org/en/stable/Reference/API-Methods/#eea_sendrawtransaction).

!!! note
    Besu uses a Transaction Manager to implement privacy. [Orion](http://docs.orion.pegasys.tech) is
    the Transaction Manager used in this documentation but EthSigner can be used with other Transaction Managers.

### Parameters

Transaction object for private transactions:

| Key                                  | Type                  | Required/Optional                  | Value                                                                                                                            |  |
|--------------------------------------|--:-:------------------|------------------------------------|----------------------------------------------------------------------------------------------------------------------------------|--|
| **from**                             | Data, 20&nbsp;bytes   | Required                           | Address of the sender. Must be the address of the keystore account.                                                              |  |
| **to**                               | Data, 20&nbsp;bytes   | Not required for contract creation | `null` for contract creation transaction. Contract address for contract invocation transactions.                                 |  |
| **gas**                              | Quantity              | Optional                           | Gas provided by the sender. Default is `90000`.                                                                                  |  |
| **gasPrice**                         | Quantity              | Optional                           | Gas price provided by the sender in Wei. Default is `0`.                                                                         |  |
| **nonce**                            | Quantity              | Optional                           | Number of transactions sent from the `from` account before this one.                                                             |  |
| **data**                             | Quantity              | Optional                           | Compiled contract code or hash of the invoked method signature and encoded parameters.                                           |  |
| **privateFrom**                      | Data, 20&nbsp;bytes   | Required                           | Orion address of the sender                                                                                                      |  |
| **privateFor** or **privacyGroupId** | Array of data or data | Required                           | Orion addresses of recipients or [privacy group ID](https://besu.hyperledger.org/en/stable/Concepts/Privacy/Privacy-Groups/)                                                                                |  |
| **restriction**                      | String                | Required                           | Must be [`restricted`](https://besu.hyperledger.org/en/stable/Concepts/Privacy/Privacy-Overview/#private-transaction-attributes) |  |

!!! tip
    Submitting a transaction with the same nonce as a pending transaction and a higher gas price replaces
    the pending transaction with the new one. Use [`priv_getTransactionCount`] to calculate the nonce.

    If not attempting to replace a pending transaction, do not include the `nonce` in the private transaction object and nonce management is handled automatically.

!!! note
    If a non-zero `value` is included in the transaction object, an error is returned. Ether transfers cannot
    be private transactions.

### Returns

`result` : `data` - Transaction hash

!!! example

    ```bash tab="curl HTTP request with privateFor"
    curl -X POST --data '{"jsonrpc":"2.0","method":"eea_sendTransaction","params":[{"from": "0xfe3b557e8fb62b89f4916b721be55ceb828dbd73","data": "0x608060405234801561001057600080fd5b5060dc8061001f6000396000f3006080604052600436106049576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680633fa4f24514604e57806355241077146076575b600080fd5b348015605957600080fd5b50606060a0565b6040518082815260200191505060405180910390f35b348015608157600080fd5b50609e6004803603810190808035906020019092919050505060a6565b005b60005481565b80600081905550505600a165627a7a723058202bdbba2e694dba8fff33d9d0976df580f57bff0a40e25a46c398f8063b4c00360029", "privateFrom": "negmDcN2P4ODpqn/6WkJ02zT/0w0bjhGpkZ8UP6vARk=","privateFor": ["g59BmTeJIn7HIcnq8VQWgyh/pDbvbt2eyP0Ii60aDDw="],"restriction": "restricted"}], "id":1}' http://127.0.0.1:8545
    ```

    ```bash tab="curl HTTP request with privacy group ID"
    curl -X POST --data '{"jsonrpc":"2.0","method":"eea_sendTransaction","params":[{"from": "0xfe3b557e8fb62b89f4916b721be55ceb828dbd73","data": "0x608060405234801561001057600080fd5b5060d8061001f6000396000f3006080604052600436106049576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680633fa4f24514604e57806355241077146076575b600080fd5b348015605957600080fd5b50606060a0565b6040518082815260200191505060405180910390f35b348015608157600080fd5b50609e6004803603810190808035906020019092919050505060a6565b005b60005481565b80600081905550505600a165627a7a723058202bdbba2e694dba8fff33d9d0976df580f57bff0a40e25a46c398f8063b4c00360029", "privateFrom": "negmDcN2P4ODpqn/6WkJ02zT/0w0bjhGpkZ8UP6vARk=","privacyGroupId": "kAbelwaVW7okoEn1+okO+AbA4Hhz/7DaCOWVQz9nx5M=","restriction": "restricted"}], "id":1}' http://127.0.0.1:8545
    ```

    ```json tab="JSON result"
    {
       "jsonrpc": "2.0",
       "id": 1,
       "result": "0x6052dd2131667ef3e0a0666f2812db2defceaec91c470bb43de92268e8306778"
    }
    ```

## `eth_accounts`

Returns the account address with which EthSigner is signing transactions. That is, the account of the [signing key](../../Concepts/Overview.md).

Returns multiple accounts if multiple signers are configured.

### Parameters

None

### Returns

`Array of data` : Account address with which EthSigner is signing transactions.

!!! example

    ```bash tab="curl HTTP request"
    curl -X POST --data '{"jsonrpc":"2.0","method":"eth_accounts","params":[],"id":1}' http://127.0.0.1:8545
    ```

    ```json tab="JSON result"
    {
      "jsonrpc":"2.0",
      "id":1,
      "result":["0xfe3b557e8fb62b89f4916b721be55ceb828dbd73"]
    }
    ```

## `eth_sendTransaction`

Creates and signs a transaction using the [signing key](../../Concepts/Overview.md).

EthSigner submits the signed transaction to Besu using [`eth_sendRawTransaction`](https://besu.hyperledger.org/en/stable/Reference/API-Methods/#eth_sendrawtransaction).

### Parameters

Transaction object:

| Key          | Type                | Required/Optional              | Value                                                                                  |
|--------------|-:-:-----------------|--------------------------------|----------------------------------------------------------------------------------------|
| **from**     | Data, 20&nbsp;bytes | Required                       | Address of the sender.                                                                 |
| **to**       | Data, 20&nbsp;bytes | Optional for contract creation | Address of the receiver. `null` if a contract creation transaction.                    |
| **gas**      | Quantity            | Optional                       | Gas provided by the sender. Default is `90000`.                                                           |
| **gasPrice** | Quantity            | Optional                       | Gas price provided by the sender in Wei. Default is `0`.                                              |
| **nonce**    | Quantity            | Optional                       | Number of transactions made by the sender before this one.                             |
| **value**    | Quantity            | Optional                       | Value transferred in Wei.                                                              |
| **data**     | Quantity            | Optional                       | Compiled contract code or hash of the invoked method signature and encoded parameters. |

!!! tip
    Submitting a transaction with the same nonce as a pending transaction and a higher gas price replaces
    the pending transaction with the new one.

### Returns

`result` : `data` - 32-byte transaction hash

!!! example

    ```bash tab="curl HTTP request"
    curl -X POST --data '{"jsonrpc":"2.0","method":"eth_sendTransaction","params":[{"from": "0xfe3b557e8fb62b89f4916b721be55ceb828dbd73","to": "0xd46e8dd67c5d32be8058bb8eb970870f07244567","gas": "0x7600","gasPrice": "0x9184e72a000","value": "0x9184e72a"}], "id":1}' http://127.0.0.1:8545
    ```

    ```json tab="JSON result"
    {
       "jsonrpc": "2.0",
       "id": 1,
       "result": "0x6052dd2131667ef3e0a0666f2812db2defceaec91c470bb43de92268e8306778"
    }
    ```

[`priv_getTransactionCount`]:https://besu.hyperledger.org/en/stable/Reference/API-Methods/#priv_gettransactioncount
