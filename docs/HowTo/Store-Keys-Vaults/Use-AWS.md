---
description: How to store keys in AWS Secrets Manager
---

# Use Web3Signer with AWS Secrets Manager

Web3Signer supports storing BLS signing keys in [AWS Secrets Manager](https://aws.amazon.com/secrets-manager/).

The [AWS Secrets Manager documentation](https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html) provides
the information you need to get started.

## Store a private key in AWS Secrets Manager

You need an AWS profile to use AWS Secrets Manager.

Specify the following when [configuring the signing key configuration file]:

* Authentication mode.
  Valid options are `ENVIRONMENT` and `SPECIFIED`.
  If using `ENVIRONMENT`, specify the authentication credentials as the following environment variables:

    * `AWS_ACCESS_KEY_ID` - your access key ID
    * `AWS_SECRET_ACCESS_KEY` - your secret access key

    !!! note

        You can get the `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` for a particular user from the
        [AWS IAM Management Console](https://console.aws.amazon.com/iam).

* Secret name.

* Region to connect to.

Use the [Create a secret](https://docs.aws.amazon.com/secretsmanager/latest/userguide/manage_create-basic-secret.html)
guide to store a new key in AWS Secrets Manager.
