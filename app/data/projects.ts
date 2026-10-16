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
      "Open-source Pocket FM on Nostr — forkable AI-generated scenes, curated episodes, and per-episode payments in sats with signed revenue splits. Built for Bitshala's BOSS Battle 2026 hackathon.",
    techStack: ["TypeScript", "Nostr", "Bitcoin", "Lightning"],
    githubUrl: "https://github.com/Priyanshubhartistm/reelstr",
  },
  {
    title: "Slipstream",
    description:
      "On-chain perpetual-futures CLOB on Solana — order matching at rollup speed inside a MagicBlock Ephemeral Rollup, with custody and settlement kept on L1. Limit/market orders, up to 20× leverage, funding and liquidations. Deployed on Solana devnet.",
    techStack: ["Rust", "TypeScript", "Solana", "MagicBlock"],
    githubUrl: "https://github.com/Priyanshubhartistm/slipstream",
  },
];
