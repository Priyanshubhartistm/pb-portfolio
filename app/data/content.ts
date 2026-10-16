export const getMarkdownContent = (time: string) => `# Priyanshu Bharti
/pˈriyan shːˈubːh/ • She/her • ${time || "00:00:00"} IST

## About

An open-source developer building on Bitcoin and Nostr.

Contributing to Bitcoin, Lightning and Nostr infrastructure — from relays to protocol-level code.

## Experience

### Nostream
**Maintainer**, Apr 2026 - Present · Remote
Contributor (Apr 2026) → Software Engineer Intern (Jul 2026) → Maintainer (Oct 2026)
Maintainer of Nostream, a production Nostr relay in TypeScript, listed on [nostream.dev/community](https://nostream.dev/community). 34 merged PRs and ~12k lines of code since April 2026.
NIP-77 negentropy sync: built set reconciliation for the PostgreSQL event store, from the reconciliation core and sorted event-id query (#809) to the NEG-OPEN / NEG-MSG / NEG-CLOSE wire protocol (#818) and NIP-11 advertisement with admin-console settings (#830).
Web of Trust & spam resistance: built a Web of Trust graph service on NIP-02 follow distance (#745). Used it for WoT-weighted NIP-56 content reporting that auto-hides events matching actionable reports (#770, #786, #788), and for WoT-distance-based PoW reductions (#779) on top of relay-load-aware adaptive PoW difficulty (#756).
Data Vending Machines (NIP-90 / NIP-89): designed the DVM job pipeline end to end, covering the persistence layer (#727), worker registry and process topology (#721), job-request event handling (#729), dispatch to worker processes (#734), and NIP-89 handler recommendation kinds (#737).
Relay reliability: fixed in-flight subscription streams leaking after client disconnect (#715), duplicate events in tag-filter subscriptions (#694), an un-awaited Redis call in the cache adapter (#684), rate-limit window over-counting (#686), a NIP-11 crash when payments are unset (#682), expiration timestamp edge cases (#708), and a CLI hang when the database is unreachable (#740).
Tooling & tests: migrated linting/formatting to Biome (#452) and logging to pino (#511), upgraded CI artifact actions (#400), and added integration coverage for NIP-04, NIP-22 and NIP-40 (#562, #547, #528).
(PR numbers refer to https://github.com/cameri/nostream/pull/<number>)

### Bitshala
**Dev Fellow**, Aug 2026 - Present · Remote
One of 40 fellows selected across India for Bitshala's 6-month Bitcoin/Nostr open-source fellowship.
Fellowship project: Nostream, mentored by its creator [@cameri](https://github.com/cameri).
Completed Months 1–2. Month 3 milestone is NIP-77 negentropy sync for the PostgreSQL backend, with 3 PRs already merged (#809, #818, #830).
Focus areas: Bitcoin, Nostr protocol design, and back-end systems.

### Summer of Bitcoin
**Developer · Internship**, Feb 2026 - Aug 2026
Contributed to Nostream, a production-grade Nostr Relay, during the Summer of Bitcoin 2026 program.
Contributed as a developer to open-source Bitcoin projects under the Summer of Bitcoin program.
Worked on real-world Bitcoin/Lightning Network codebases, gaining hands-on experience with blockchain protocols.
Collaborated with experienced Bitcoin Core developers and the global open-source community.
Submitted and reviewed code contributions following industry-standard Git workflows and open-source best practices.
Gained deep understanding of Bitcoin's architecture, cryptography, and decentralized systems.

## Education

### Dr. C.V. Raman University
**Bachelor of Technology in Computer Science and Engineering**
2024 - current

## Tech Stack

Go, Python, TypeScript, JavaScript, C++, React, Next.js, Tailwind CSS, Node.js, PostgreSQL, Redis, Docker, Git, GitHub, Linux, Bitcoin, Ethereum, Solidity, Web3.js

## Featured Projects

### Reelstr
Open-source Pocket FM on Nostr — forkable AI-generated scenes, curated episodes, and per-episode payments in sats with signed revenue splits. Built for Bitshala's BOSS Battle 2026 hackathon.
[https://github.com/Priyanshubhartistm/reelstr](https://github.com/Priyanshubhartistm/reelstr)

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
