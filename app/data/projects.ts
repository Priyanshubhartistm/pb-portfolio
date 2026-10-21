export interface Project {
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    title: "Reelstr",
    description:
      "An open-source Pocket FM on Nostr. Anyone can upload a 10 to 15 second scene, or continue and branch from someone else's, so a story grows as a tree. Curators cut scenes into 60 to 120 second episodes and set a price. Viewers watch the first episodes free, then pay a few sats per episode. Each creator's share follows the seconds their scene runs in the cut, and the split is written into signed Nostr events anyone can verify. Everything is Nostr events plus content-addressed Blossom blobs, so any relay, media server or client can take part. It runs on testnet as a web app and an Android app. Built with Ansh Tyagi for Bitshala's BOSS Battle 2026 hackathon.",
    techStack: ["TypeScript", "Nostr", "Bitcoin", "Lightning", "Cashu"],
    githubUrl: "https://github.com/Priyanshubhartistm/reelstr",
    liveUrl: "https://reelstr.ansht.workers.dev",
  },
  {
    title: "Slipstream",
    description:
      "An on-chain perpetual-futures exchange built around a central limit order book with price-time priority, not an AMM. Order matching runs inside a MagicBlock Ephemeral Rollup at about 10 ms. Collateral, positions and the token vault stay on Solana L1 and are never delegated, so the rollup cannot put funds at risk. It supports limit and market orders, up to 20x leverage on SOL/USD, funding and liquidations, and is deployed on Solana devnet.",
    techStack: ["Rust", "TypeScript", "Solana", "MagicBlock"],
    githubUrl: "https://github.com/Priyanshubhartistm/slipstream",
  },
];

export const moreProjects: Project[] = [
  {
    title: "Agent Guardrail",
    description:
      'An independent safety layer between an AI agent and the tools it can call, enforcing human-written policies on every tool call. Think "sudo and a firewall for AI agents." The agent decides which tool to call and with what arguments, and the guardrail intercepts the call before it runs. Declarative policies decide whether to allow it, pause for human approval, or block it with a reason. This stops hallucinations, prompt injection and reasoning errors from deleting data or spending money.',
    techStack: ["Go"],
  },
  {
    title: "ZeroWallet",
    description:
      "Passkey-powered, gasless Solana transactions with no wallet extension and no seed phrase. Users sign in with FaceID or TouchID through WebAuthn, an on-chain smart wallet is created automatically, and a paymaster sponsors the fees. A debug panel shows each transaction step by step.",
    techStack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Solana", "WebAuthn"],
    liveUrl: "https://zero-wallet-eight.vercel.app",
  },
];
