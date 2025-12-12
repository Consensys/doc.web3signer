/**
 * Normalize OpenAPI `servers` values for this documentation site.
 *
 * Why:
 * - Upstream specs often include `url: /` and/or `url: http://localhost:9000/`.
 * - The docs theme can display `//path` when a base URL ends with `/` and the path begins with `/`.
 *
 * What this script does:
 * - Replaces the entire `servers:` block with:
 *   - url: ""
 *   - url: http://localhost:9000
 *
 * Targets:
 * - src/openapi-specs/eth1/web3signer.yaml
 * - src/openapi-specs/eth2/web3signer.yaml
 */

const fs = require("node:fs");
const path = require("node:path");

const repoRoot = path.resolve(__dirname, "..");
const targets = [
  path.join(repoRoot, "src", "openapi-specs", "eth1", "web3signer.yaml"),
  path.join(repoRoot, "src", "openapi-specs", "eth2", "web3signer.yaml"),
];

const normalizedBlock = [
  'servers:',
  '  - url: ""',
  '  - url: http://localhost:9000',
  '',
].join("\n");

const serversRe = /^servers:\n(?:^[ \t].*\n)*/m;
const infoRe = /^info:\n(?:^[ \t].*\n)*/m;

function normalizeServers(text) {
  if (serversRe.test(text)) {
    return text.replace(serversRe, normalizedBlock);
  }

  const infoMatch = text.match(infoRe);
  if (infoMatch && infoMatch.index !== undefined) {
    const insertAt = infoMatch.index + infoMatch[0].length;
    return text.slice(0, insertAt) + "\n" + normalizedBlock + text.slice(insertAt);
  }

  return normalizedBlock + text;
}

let changed = 0;
for (const filePath of targets) {
  if (!fs.existsSync(filePath)) {
    console.error(`normalize_openapi_servers: missing file: ${filePath}`);
    process.exitCode = 2;
    continue;
  }
  const before = fs.readFileSync(filePath, "utf8");
  const after = normalizeServers(before);
  if (after !== before) {
    fs.writeFileSync(filePath, after, "utf8");
    changed += 1;
    console.log(
      `normalize_openapi_servers: updated ${path.relative(repoRoot, filePath)}`
    );
  }
}

if (process.exitCode && process.exitCode !== 0) {
  // keep exitCode
} else if (changed === 0) {
  console.log("normalize_openapi_servers: no changes needed");
}


