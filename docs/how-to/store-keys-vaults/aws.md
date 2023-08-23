---
sidebar_label: Use AWS Secrets Manager
description: Sign transactions with keys stored in AWS Secrets Manager.
sidebar_position: 3
---

# Use Web3Signer with AWS Secrets Manager

Web3Signer supports signing with BLS private keys stored as secrets in [AWS Secrets
Manager](https://aws.amazon.com/secrets-manager/).

The [AWS Secrets Manager documentation](https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html)
provides the information you need to get started.

## Store a private key in AWS Secrets Manager

You need an AWS profile to use AWS Secrets Manager.

Use the [Create a secret](https://docs.aws.amazon.com/secretsmanager/latest/userguide/manage_create-basic-secret.html)
guide to store a new key in AWS Secrets Manager.

The following is an example of creating and storing a BLS private key in AWS Secrets Manager, using Java:

```java
final String AWS_REGION = "us-east-2";
final String SECRET_VALUE = "0x60b420####################################################25f41d";
final SecretsManagerClient secretsManagerClient =
      SecretsManagerClient.builder()
          .region(Region.of(AWS_REGION))
          .build();
final String secretNamePrefix = "web3signer-aws-integration/";
final String secretName = secretNamePrefix + UUID.randomUUID();
final CreateSecretRequest secretRequest =
      CreateSecretRequest.builder().name(secretName).secretString(SECRET_VALUE).build();
secretsManagerClient.createSecret(secretRequest);
```

You can also store multiple BLS private keys under same secret name when using
[AWS bulk loading mode](../use-signing-keys.md#aws-secrets-manager).

The keys must be separated with a line terminating character such as `\n`.
This saves cost when dealing with a large number of keys. Up to 200 keys can be stored under same
secret name.

Following Java program is a modification of above program to store two BLS keys under same secret name:

```java
final String AWS_REGION = "us-east-2";
final String SECRET_VALUE = "0x60b420####################################################25f41d\n" +
           "0x73d51a####################################################85aba8";
final SecretsManagerClient secretsManagerClient =
      SecretsManagerClient.builder()
          .region(Region.of(AWS_REGION))
          .build();
final String secretNamePrefix = "web3signer-aws-integration/";
final String secretName = secretNamePrefix + UUID.randomUUID();
final CreateSecretRequest secretRequest =
      CreateSecretRequest.builder().name(secretName).secretString(SECRET_VALUE).build();
secretsManagerClient.createSecret(secretRequest);
```

Specify the following when [configuring the signing key configuration
file](../use-signing-keys.md#use-key-configuration-files):

- Authentication mode.
  Valid options are `ENVIRONMENT` and `SPECIFIED`.
  If using `ENVIRONMENT`, credentials are authenticated using the [default credential provider
  chain](https://docs.aws.amazon.com/sdk-for-java/v1/developer-guide/credentials.html#credentials-default).
- Secret name.
- Region to connect to.

## Cache AWS Secrets Manager when loading multiple keys

When loading multiple keys from AWS Secrets Manager, the AWS client is created each time.
You can improve performance by caching and reusing the same AWS Secrets Manager for each key that
uses the same access key ID and region.

Set the [`eth2 --aws-connection-cache-size`](../../reference/cli/subcommands.md#aws-connection-cache-size)
option to the maximum number of AWS Secrets Manager connections to cache.
The default is 1.
