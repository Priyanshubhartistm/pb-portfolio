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
];
