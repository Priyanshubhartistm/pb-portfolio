export const getMarkdownContent = (time: string) => `# Priyanshu Bharti
/pˈriyan shːˈubːh/ • She/her • ${time || "00:00:00"} IST

## About

Web3 and Bitcoin developer. Bitshala Fellow and nostream maintainer.

I build open, permissionless systems that give people back control of their money and their data. My work runs across Bitcoin, Lightning and Nostr, from relay internals to protocol-level code.

## Experience

### nostream
**Maintainer**, Oct 2026 to present · Remote
Maintainer of nostream, a widely used Nostr relay written in TypeScript with over 800 GitHub stars. Listed as a maintainer on the project's community page at [nostream.dev](https://nostream.dev/community), alongside the creator. I review and merge contributions, and I maintain the contributor documentation and security policy.

### nostream
**Software Engineer (Internship)**, Apr 2026 to present · Remote
I build protocol features and fix production bugs in nostream, a Nostr relay running on Node.js, PostgreSQL and Redis. I've merged 38 pull requests.
NIP-77 (negentropy set reconciliation): built the reconciliation core, the NEG-OPEN, NEG-MSG and NEG-CLOSE wire protocol, and the NIP-11 advertisement with admin console settings.
Data vending machines (NIP-90 and NIP-89): built the worker registry and process topology, job persistence with its migration and repository, request handling, dispatch of pending jobs to worker processes, and handler recommendation events.
Spam and abuse resistance: built a web-of-trust graph service based on NIP-02 follow distance, adaptive proof-of-work that scales with relay load, and proof-of-work reductions for accounts close in the trust graph. Added trust-weighted NIP-56 reports and hiding of events that match an actionable report.
WebSocket and event handling: fixed duplicate events in tag-filter subscriptions, subscription streams left open after client disconnects, and rate-limit windows still being hit after a client was already limited. Fixed a NIP-11 crash when payment settings were absent, a missing await in the Redis adapter, and the CLI hanging when the database was unreachable.
Tooling and tests: migrated linting and formatting to Biome and logging to pino. Added NIP-04, NIP-22 and NIP-40 integration tests, a script to wipe the events table, and the data model for subscription payments.

### Bitshala
**Dev Fellow**, Aug 2026 to present · Remote
Fellow in Bitshala's six-month Bitcoin open-source fellowship. Bitshala is an India-based Bitcoin education initiative. My work covers Bitcoin and Nostr infrastructure and back-end web development.

### Summer of Bitcoin
**Developer (Internship)**, Feb to Aug 2026 · Remote
Contributed to nostream through the Summer of Bitcoin 2026 program. Worked in the project's pull-request review workflow, shipping tests, tooling migrations and bug fixes, and learned the Nostr protocol and relay architecture from reading and extending production code.

## Education

### Dr. C.V. Raman University
**Bachelor of Technology in Computer Science and Engineering**
2024 to present

## Open Source Contributions

### Nostr and Bitcoin infrastructure
Active contributor to nostream (38 merged PRs) and to ContextVM (relatr-web and docs, 8 merged PRs), which builds on Nostr. My work covers protocol features, integration tests, tooling migrations and production bug fixes.

### Cloud-native open source
Merged contributions to KubeEdge (11 PRs, plus 3 on its website), Apicurio Registry (11), Flatcar (10), Talawa Admin (6), WasmEdge (4), Microcks CLI (2), Meshery (1) and KubeSlice Controller (1). Open PRs are in progress on KubeEdge (15), KubeSlice, Kmesh, Harbor CLI and tscircuit.

## Tech Stack

TypeScript, JavaScript, Go, Rust, Java, Node.js, React, Next.js, Tailwind CSS, Express, Spring Boot, PostgreSQL, SQLite, Redis, Docker, Kubernetes, Git, GitHub, Linux, Nostr, Bitcoin, Lightning, Solana

## Featured Projects

### Reelstr
TypeScript · Nostr · Bitcoin · Lightning · Cashu
An open-source Pocket FM on Nostr. Anyone can upload a 10 to 15 second scene, or continue and branch from someone else's, so a story grows as a tree. Curators cut scenes into 60 to 120 second episodes and set a price. Viewers watch the first episodes free, then pay a few sats per episode. Each creator's share follows the seconds their scene runs in the cut, and the split is written into signed Nostr events anyone can verify. Everything is Nostr events plus content-addressed Blossom blobs, so any relay, media server or client can take part. It runs on testnet as a web app and an Android app. Built with Ansh Tyagi for Bitshala's BOSS Battle 2026 hackathon.
Live: [https://reelstr.ansht.workers.dev](https://reelstr.ansht.workers.dev) · Code: [https://github.com/Priyanshubhartistm/reelstr](https://github.com/Priyanshubhartistm/reelstr)

### Slipstream
Rust · TypeScript · Solana · MagicBlock
An on-chain perpetual-futures exchange built around a central limit order book with price-time priority, not an AMM. Order matching runs inside a MagicBlock Ephemeral Rollup at about 10 ms. Collateral, positions and the token vault stay on Solana L1 and are never delegated, so the rollup cannot put funds at risk. It supports limit and market orders, up to 20x leverage on SOL/USD, funding and liquidations, and is deployed on Solana devnet.
Code: [https://github.com/Priyanshubhartistm/slipstream](https://github.com/Priyanshubhartistm/slipstream)

## More Projects

### Agent Guardrail
Go
An independent safety layer between an AI agent and the tools it can call, enforcing human-written policies on every tool call. Think "sudo and a firewall for AI agents." The agent decides which tool to call and with what arguments, and the guardrail intercepts the call before it runs. Declarative policies decide whether to allow it, pause for human approval, or block it with a reason. This stops hallucinations, prompt injection and reasoning errors from deleting data or spending money.

### ZeroWallet
React · TypeScript · Vite · Tailwind CSS · Solana · WebAuthn
Passkey-powered, gasless Solana transactions with no wallet extension and no seed phrase. Users sign in with FaceID or TouchID through WebAuthn, an on-chain smart wallet is created automatically, and a paymaster sponsors the fees. A debug panel shows each transaction step by step.
Live: [https://zero-wallet-eight.vercel.app](https://zero-wallet-eight.vercel.app)

## Get in Touch

Connect with me on [LinkedIn](https://www.linkedin.com/in/priyanshu-bharti-441823229/) or shoot an [email](mailto:bhartipriyanshustm@gmail.com)

---

**Links:**
- GitHub: [https://github.com/Priyanshubhartistm](https://github.com/Priyanshubhartistm)
- LinkedIn: [https://www.linkedin.com/in/priyanshu-bharti-441823229/](https://www.linkedin.com/in/priyanshu-bharti-441823229/)
- Twitter: [https://x.com/0xAarohi](https://x.com/0xAarohi)
- Telegram: [https://t.me/priyanshu123bharti](https://t.me/priyanshu123bharti)
- Calendar: [https://cal.com/priyanshu-bharti-oubnjc](https://cal.com/priyanshu-bharti-oubnjc)
`;
