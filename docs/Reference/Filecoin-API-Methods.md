---
title: Filecoin JSON RPC Methods
---

# Filecoin API methods

The Filecoin JSON RPC methods can be accessed at `http://<HOST>:<PORT>/rpc/v1/filecoin`, where:

* `HOST` is specified using [`--http-listen-host`](CLI/CLI-Syntax.md#http-listen-host)
* `PORT` is specifies using [`--http-listen-port`](CLI/CLI-Syntax.md#http-listen-port)

The default location is `http://127.0.0.1:9000/rpc/v1/filecoin`.

## Filecoin.WalletHas

Indicates whether an address exists in the wallet.

**Parameters**

`DATA` : Filecoin address

**Returns**

`result` : _Boolean_ - `true` if the address exists in the wallet; otherwise `false`.

!!! example

    === "curl HTTP request"

        ```bash
        curl -X POST --data '{"jsonrpc": "2.0", "method": "Filecoin.WalletHas", "params": ["t1m6d6ctugvj4ipiiv3hpz7a3y4lwlzhzg5t22fvy"], "id": 1}' http://127.0.0.1:9000/rpc/v1/filecoin
        ```

    === "JSON result"

        ```json
        {
            "id": 1,
            "result": true,
            "jsonrpc": "2.0"
        }
        ```
        
## Filecoin.WalletList
  
Lists all the addresses in the wallet.

Addresses can be based on secp256k1 and BLS12-381 signing keys.

**Parameters**

None

**Returns**

`result`: Array of addresses.

!!! example

    === "curl HTTP request"

        ```bash
        curl -X POST --data '{"jsonrpc":"2.0","method":"Filecoin.WalletList","params":[],"id":1}' http://127.0.0.1:9000/rpc/v1/filecoin
        ```

    === "JSON result"

        ```json
        {
            "id": 1,
            "result": [
                "t1m6d6ctugvj4ipiiv3hpz7a3y4lwlzhzg5t22fvy",
                "t3u7l2ucbtduewbtqobuodsxrx4wdxdc5r3qr5wpbjc5dgoqtsurxk25xnksfymeiiuuoe4d3xf33hyf4nsaja"
            ],
            "jsonrpc": "2.0"
        }
        ```

## Filecoin.WalletSign

Signs data using the supplied address.

**Parameters**

`DATA` : Filecoin address

`DATA` : Data to sign

**Returns**

`result`: Object containing:

* `Type`: Integer identifying the type of key used to sign the data;
    `1` is secp256k1 and `2` is BLS12-381.
* `Data`: Signed data.

!!! example

    === "curl HTTP request"

        ```bash
        curl -X POST --data '{"jsonrpc": "2.0", "method": "Filecoin.WalletSign", "params": ["t1m6d6ctugvj4ipiiv3hpz7a3y4lwlzhzg5t22fvy", "NDI="], "id": 1}' http://127.0.0.1:9000/rpc/v1/filecoin
        ```

    === "JSON result"

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

## Filecoin.WalletSignMessage

Signs a [message] using the supplied address.

**Parameters**

`DATA` : Filecoin address

_Object_: [Unsigned message object]

**Returns**

`result`: Object contain the sent unsigned [`Message`](https://filecoin-project.github.io/specs/#systems__filecoin_vm__message)
object, and the signed [`Signature`](https://filecoin-project.github.io/specs/#message-semantic-validation) object.

!!! example

    === "curl HTTP request"

        ```bash
        curl -X POST --data '{"jsonrpc": "2.0", "method": "Filecoin.WalletSignMessage", "params": ["t1m6d6ctugvj4ipiiv3hpz7a3y4lwlzhzg5t22fvy", {"Version": 9, "To": "t01234", "From": "t01234", "Nonce": 42, "Value": "0", "GasLimit": 9, "GasFeeCap": "0", "GasPremium": "0", "Method": 1, "Params": "Ynl0ZSBhcnJheQ=="}], "id": 1}' http://127.0.0.1:9000/rpc/v1/filecoin
        ```

    === "JSON result"

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
## Filecoin.WalletVerify

Indicates whether a signature is valid.

The supplied address does not need to exist in the wallet.

**Parameters**

`DATA` : Filecoin address

`DATA` : Unsigned data

_Object_ : Signature object containing:

* `Type`: Integer identifying the type of key used to sign the data;
    `1` is secp256k1 and `2` is BLS12-381.
* `Data`: Signed data.

**Returns**

!!! example

    === "curl HTTP request"

        ```bash
        curl -X POST --data '{"jsonrpc": "2.0", "method": "Filecoin.WalletVerify", "params": ["t1m6d6ctugvj4ipiiv3hpz7a3y4lwlzhzg5t22fvy", "NDI=", {"Type":1,"Data":"5vEDqBPUTQA44p51Qaclwih+b2WVND7gp12yNXFBrtwsZFuwqQYc7A8CZjocrn6NVPjMLpqvJjGxWY2lXb6a3wE="}], "id": 1}' http://127.0.0.1:9000/rpc/v1/filecoin
        ```

    === "JSON result"

        ```json
        {
            "id": 1,
            "result": true,
            "jsonrpc": "2.0"
        }
        ```
<!-- links -->
[message]: https://filecoin-project.github.io/specs/#systems__filecoin_vm__message
[Unsigned message object]: https://filecoin-project.github.io/specs/#systems__filecoin_vm__message