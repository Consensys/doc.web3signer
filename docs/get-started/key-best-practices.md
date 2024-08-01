---
description: Apply best practices to keep keys and Web3Signer secure.
sidebar_position: 5
---

# Private key management best practices

Web3Signer manages validator keys for Ethereum 2.0 staking. 
This document outlines best practices for key generation, storage, access control, and system security when using Web3Signer. 
The following guidelines help protect your staked assets and supports Ethereum network integrity.

## 1. Generate secure BLS keys

- Use cryptographically secure random number generators for key generation.
- Consider using hardware security modules (HSMs) for key generation to ensure physical security.
- Implement proper key rotation policies to limit the impact of potential key compromises.

## 2. Store keys in a vault or HSM

- Use dedicated key management solutions like HashiCorp Vault or AWS Key Management Service (KMS).
- Implement encryption for keys at rest and in transit.

:::note

Currently, Web3Signer doesn't support direct encryption of keys in storage. This is a known limitation that should be addressed in future updates.

:::

- Use hardware security modules (HSMs) for the highest level of key protection, ensuring keys never leave the secure hardware.

## 3. Use environment authentication for vaults or HSMs

- Leverage environment variables for authentication credentials instead of hardcoding them.
- Implement IAM roles and policies for cloud-based solutions, for example AWS IAM roles for EC2 instances.
- Use Kubernetes secrets or similar container orchestration tools for managing environment variables securely.
- Regularly rotate authentication credentials and limit their scope to the minimum required permissions.

## 4. Expose validator signing API on necessary network interfaces only

- Configure Web3Signer to bind only to specific IP addresses or network interfaces
- Use firewalls or security groups to restrict inbound traffic to the signing API
- Implement network segmentation to isolate the signing service from other components
- Consider using a reverse proxy to add an additional layer of security and control

## 5. Enable TLS authentication between validator client and Web3Signer

- Generate and use strong SSL/TLS certificates for all communications
- Implement mutual TLS (mTLS) for bidirectional authentication
- Regularly update and rotate TLS certificates
- Configure proper cipher suites and TLS versions to ensure strong encryption

## 6. Restrict host access with `--http-host-allowlist`

- Use the `--http-host-allowlist` flag to specify which hostnames are allowed to access the Web3Signer API.
- Regularly review and update the allowlist to maintain tight access control.
- Implement additional network-level access controls to complement this feature.
- Monitor and log all access attempts, especially those from non-allowlisted hosts.

## 7. Disable the key manager API or restrict access

- If the key manager API is not needed, disable it completely using the appropriate configuration option.
- If required, implement strict access controls for the key manager API:
  - Use IP whitelisting.
  - Implement strong authentication mechanisms, for example API keys and OAuth.
  - Apply rate limiting to prevent overuse.
- Regularly audit access logs for the key manager API.

## 8. Configure Postgres database with TLS authentication

- Enable SSL/TLS for all database connections.
- Use strong, unique client certificates for each Web3Signer instance.
- Implement proper certificate validation on both client and server sides.
- Regularly rotate database credentials and certificates.
- Consider using tools like pgBouncer with TLS support for connection pooling and additional security.

## 9. Restrict access to the key config

- Implement file system-level permissions to limit read access to only Web3Signer.
- Use encrypted file systems or volume-level encryption for additional protection.
- Implement audit logging for all access attempts to key configuration files.
- Consider using a secrets management solution to dynamically provide key configurations to Web3Signer.

## 10. Run Web3Signer in a secure enclave

- Use AWS Nitro Enclaves or similar secure computing environments.
- Implement attestation mechanisms to verify the integrity of the enclave.
- Use encrypted communication channels between the enclave and other components.
- Regularly update and patch the enclave environment to address security vulnerabilities.
- Implement proper logging and monitoring solutions that respect the enclave's security boundaries.
