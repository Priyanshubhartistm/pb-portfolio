"use client";

import Image from "next/image";
import { Github, Linkedin, Calendar, Music, Pause } from "lucide-react";
import { FaTelegram, FaXTwitter } from "react-icons/fa6";
import { ExperienceItem } from "./components/ExperienceItem";
import { GithubGraph } from "./components/GithubGraph";
import { TechStack } from "./components/TechStack";
import { ProjectCard } from "./components/ProjectCard";
import { projects, moreProjects } from "./data/projects";
import { useState, useEffect, useMemo, useRef } from "react";
import { ThemeToggle } from "./components/ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";

const linkClass = "underline underline-offset-4 hover:text-indigo-500 transition-colors";

export default function Home() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-IN", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })
      );
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);

    return () => clearInterval(timer);
  }, []);

  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [isLofiPlaying, setIsLofiPlaying] = useState(false);
  const [lofiVolume, setLofiVolume] = useState(1);
  const lofiRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (lofiRef.current) {
      lofiRef.current.volume = lofiVolume;
    }
  }, [lofiVolume]);

  useEffect(() => {
    return () => {
      if (lofiRef.current) {
        lofiRef.current.pause();
        lofiRef.current = null;
      }
    };
  }, []);

  const toggleLofi = () => {
    if (!lofiRef.current) {
      lofiRef.current = new Audio("/lofi.mp3");
      lofiRef.current.loop = true;
      lofiRef.current.volume = lofiVolume;
    }

    if (isLofiPlaying) {
      lofiRef.current.pause();
    } else {
      lofiRef.current.play().catch(e => console.error("Lofi play failed:", e));
    }
    setIsLofiPlaying(!isLofiPlaying);
  };

  const starPositions = useMemo(() => {
    return [...Array(50)].map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      duration: 2 + Math.random() * 3,
      delay: Math.random() * 5,
    }));
  }, []);

  const sectionMotion = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6, ease: "easeOut" as const },
  };

  const projectStagger = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const projectItem = {
    hidden: { opacity: 0, y: 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: "easeOut" as const },
    },
  };

  return (
    <div className={`relative flex min-h-screen flex-col items-center bg-white dark:bg-black px-3 pt-16 text-black dark:text-white selection:bg-black dark:selection:bg-white selection:text-white dark:selection:text-black pb-32 sm:px-4 sm:pt-24 sm:pb-40 overflow-x-hidden transition-colors duration-300`}>
      {/* Easter Egg Effects */}
      <AnimatePresence>
        {showEasterEgg && (
          <>
            {/* Bluish Aura Edge Effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] pointer-events-none shadow-[inset_0_0_150px_rgba(29,78,216,0.5)] dark:shadow-[inset_0_0_150px_rgba(59,130,246,0.4)] transition-opacity duration-1000"
            />
            {/* Twinkling Stars Background */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
            >
              {starPositions.map((pos, i) => (
                <motion.div
                  key={i}
                  className="absolute h-[2px] w-[2px] bg-blue-500 dark:bg-white rounded-full shadow-[0_0_4px_rgba(59,130,246,0.8)] dark:shadow-[0_0_3px_white]"
                  style={{
                    top: pos.top,
                    left: pos.left,
                  }}
                  animate={{
                    opacity: [0.2, 1, 0.2],
                    scale: [0.8, 1.2, 0.8],
                  }}
                  transition={{
                    duration: pos.duration,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: pos.delay,
                  }}
                />
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
      {/* Theme Toggle in Top Right */}
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>

      <motion.main
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", staggerChildren: 0.1 }}
        className="flex w-full max-w-2xl flex-col items-center text-center"
      >
            {/* Profile Image */}
            <motion.div 
               initial={{ scale: 0.8, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
               className="relative mb-2 h-40 w-40 filter hover:grayscale-0 transition-all duration-500 sm:h-56 sm:w-56"
            >
              <Image
                src="/me.png"
                alt="Profile"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white via-white/60 to-transparent dark:from-black dark:via-black/60 backdrop-blur-[1px]" />
            </motion.div>

            {/* Hero Text */}
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-4 text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 hover:from-indigo-500 hover:to-pink-500 transition-all duration-500 sm:text-7xl"
            >
              Priyanshu Bharti
            </motion.h1>

            {/* Phonetic Pronunciation (Aesthetic touch often found in minimal portfolios) */}
            <div className="mb-8 flex flex-wrap items-center justify-center gap-2 text-xs text-gray-400 dark:text-gray-500 sm:text-sm">
              <span>/pˈriyan shːˈubːh/</span>
              <span className="text-gray-300 dark:text-gray-700">•</span>
              <span>She/her</span>
              <span className="text-gray-300 dark:text-gray-700">•</span>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="tabular-nums text-xs sm:text-sm">{time || "00:00:00"}</span>
                  <span className="text-[10px] uppercase tracking-wider sm:text-xs">IST</span>
                </div>

                <span className="text-gray-300 dark:text-gray-700">•</span>

                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-tight text-gray-400">lofi</span>
                  <button
                    onClick={toggleLofi}
                    className="flex h-5 w-5 items-center justify-center rounded-full transition-all hover:bg-gray-100 dark:hover:bg-zinc-800 text-gray-400 hover:text-black dark:hover:text-white"
                    aria-label={isLofiPlaying ? "Pause Lofi" : "Play Lofi"}
                  >
                    {isLofiPlaying ? <Pause size={10} fill="currentColor" /> : <Music size={10} />}
                  </button>
                  <AnimatePresence>
                    {isLofiPlaying && (
                      <motion.div
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: 40, opacity: 1 }}
                        exit={{ width: 0, opacity: 0 }}
                        className="flex h-5 items-center overflow-hidden"
                      >
                        <input
                          type="range"
                          min="0"
                          max="1"
                          step="0.01"
                          value={lofiVolume}
                          onChange={(e) => setLofiVolume(parseFloat(e.target.value))}
                          className="h-[2px] w-8 cursor-pointer appearance-none rounded-full bg-gray-200 dark:bg-zinc-800 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-2 [&::-webkit-slider-thumb]:w-2 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gray-400 dark:[&::-webkit-slider-thumb]:bg-zinc-500 hover:[&::-webkit-slider-thumb]:bg-black dark:hover:[&::-webkit-slider-thumb]:bg-white [&::-moz-range-thumb]:border-none [&::-moz-range-thumb]:h-2 [&::-moz-range-thumb]:w-2 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-gray-400 dark:[&::-moz-range-thumb]:bg-zinc-500 hover:[&::-moz-range-thumb]:bg-black dark:hover:[&::-moz-range-thumb]:bg-white transition-all"
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>

            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.4 }}
               className="mb-10 w-full space-y-4 text-left text-base leading-relaxed text-gray-600 dark:text-gray-400 sm:text-lg md:text-xl"
            >
              <p>
                Web3 and Bitcoin developer. Bitshala Fellow and nostream maintainer.
              </p>
              <p>
                I build open, permissionless systems that give people back control of their money and their data.
                <b className="text-gray-900 dark:text-white"> My work runs across Bitcoin, Lightning and Nostr, from relay internals to protocol-level code. </b>
              </p>
            </motion.div>

            {/* Education Section */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5 }}
               className="mb-16 w-full text-left"
            >
              <h2 className="mb-8 text-sm font-extrabold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                Education
              </h2>
              <div className="space-y-12">
                <ExperienceItem
                  title="Dr. C.V. Raman University"
                  role="Bachelor of Technology in Computer Science and Engineering"
                >
                  <p>2024 - current</p>
                </ExperienceItem>
              </div>
            </motion.div>

            {/* Experience Section */}
            <motion.div {...sectionMotion} className="mb-16 w-full text-left">
              <h2 className="mb-8 text-sm font-extrabold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                Experience
              </h2>
              <div className="space-y-12">
                <ExperienceItem
                  title="nostream"
                  role="Maintainer"
                  preview={
                    <>
                      <p>Duration: Oct 2026 to present · Remote</p>
                      <p>Maintainer of <a href="https://github.com/cameri/nostream" target="_blank" rel="noopener noreferrer" className={linkClass}>nostream</a>, a widely used Nostr relay written in TypeScript with over 800 GitHub stars. Listed as a maintainer on the project&apos;s community page at <a href="https://nostream.dev/community" target="_blank" rel="noopener noreferrer" className={linkClass}>nostream.dev</a>, alongside the creator. I review and merge contributions, and I maintain the contributor documentation and security policy.</p>
                    </>
                  }
                >
                  {null}
                </ExperienceItem>

                <ExperienceItem
                  title="nostream"
                  role="Software Engineer (Internship)"
                  collapsible={true}
                  preview={
                    <>
                      <p>Duration: Apr 2026 to present · Remote</p>
                      <p>I build protocol features and fix production bugs in nostream, a Nostr relay running on Node.js, PostgreSQL and Redis. I&apos;ve merged 38 pull requests.</p>
                      <p>NIP-77 (negentropy set reconciliation): built the reconciliation core, the NEG-OPEN, NEG-MSG and NEG-CLOSE wire protocol, and the NIP-11 advertisement with admin console settings.</p>
                      <p>Data vending machines (NIP-90 and NIP-89): built the worker registry and process topology, job persistence with its migration and repository, request handling, dispatch of pending jobs to worker processes, and handler recommendation events.</p>
                    </>
                  }
                >
                  <p>Spam and abuse resistance: built a web-of-trust graph service based on NIP-02 follow distance, adaptive proof-of-work that scales with relay load, and proof-of-work reductions for accounts close in the trust graph. Added trust-weighted NIP-56 reports and hiding of events that match an actionable report.</p>
                  <p>WebSocket and event handling: fixed duplicate events in tag-filter subscriptions, subscription streams left open after client disconnects, and rate-limit windows still being hit after a client was already limited. Fixed a NIP-11 crash when payment settings were absent, a missing await in the Redis adapter, and the CLI hanging when the database was unreachable.</p>
                  <p>Tooling and tests: migrated linting and formatting to Biome and logging to pino. Added NIP-04, NIP-22 and NIP-40 integration tests, a script to wipe the events table, and the data model for subscription payments.</p>
                </ExperienceItem>

                <ExperienceItem
                  title="Bitshala"
                  role="Dev Fellow"
                  preview={
                    <>
                      <p>Duration: Aug 2026 to present · Remote</p>
                      <p>Fellow in Bitshala&apos;s six-month Bitcoin open-source fellowship. Bitshala is an India-based Bitcoin education initiative. My work covers Bitcoin and Nostr infrastructure and back-end web development.</p>
                    </>
                  }
                >
                  {null}
                </ExperienceItem>

                <ExperienceItem
                  title="Summer of Bitcoin"
                  role="Developer (Internship)"
                  preview={
                    <>
                      <p>Duration: Feb to Aug 2026 · Remote</p>
                      <p>Contributed to nostream through the Summer of Bitcoin 2026 program. Worked in the project&apos;s pull-request review workflow, shipping tests, tooling migrations and bug fixes, and learned the Nostr protocol and relay architecture from reading and extending production code.</p>
                    </>
                  }
                >
                  {null}
                </ExperienceItem>
              </div>
            </motion.div>

            {/* Open Source Section */}
            <motion.div {...sectionMotion} className="mb-16 w-full text-left">
              <h2 className="mb-8 text-sm font-extrabold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                Open Source Contributions
              </h2>
              <div className="space-y-12">
                <ExperienceItem
                  title="Nostr and Bitcoin infrastructure"
                  role="nostream & ContextVM"
                >
                  <p>Active contributor to nostream (38 merged PRs) and to ContextVM (relatr-web and docs, 8 merged PRs), which builds on Nostr. My work covers protocol features, integration tests, tooling migrations and production bug fixes.</p>
                </ExperienceItem>

                <ExperienceItem
                  title="Cloud-native open source"
                  role="KubeEdge, Apicurio, Flatcar & more"
                >
                  <p>Merged contributions to KubeEdge (11 PRs, plus 3 on its website), Apicurio Registry (11), Flatcar (10), Talawa Admin (6), WasmEdge (4), Microcks CLI (2), Meshery (1) and KubeSlice Controller (1). Open PRs are in progress on KubeEdge (15), KubeSlice, Kmesh, Harbor CLI and tscircuit.</p>
                </ExperienceItem>
              </div>
            </motion.div>

            {/* Contributions Section */}
            <motion.div {...sectionMotion} className="mb-16 w-full text-left">
              <h2 className="mb-8 text-sm font-extrabold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                GitHub Contributions
              </h2>
              <GithubGraph />
            </motion.div>


            {/* Tech Stack Section */}
            <motion.div {...sectionMotion} className="mb-16 w-full text-left">
              <h2 className="mb-8 text-sm font-extrabold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                Tech Stack
              </h2>
              <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
                Here&apos;s the stack I work with most:
              </p>
              <TechStack />
            </motion.div>

            {/* Projects Section */}
            <motion.div {...sectionMotion} className="mb-16 w-full text-left">
              <h2 className="mb-8 text-sm font-extrabold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                Featured Projects
              </h2>
              <motion.div
                variants={projectStagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="grid gap-6 sm:grid-cols-1 md:grid-cols-2"
              >
                {projects.map((project) => (
                  <motion.div key={project.title} variants={projectItem}>
                    <ProjectCard {...project} />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* More Projects Section */}
            <motion.div {...sectionMotion} className="mb-16 w-full text-left">
              <h2 className="mb-8 text-sm font-extrabold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                More Projects
              </h2>
              <motion.div
                variants={projectStagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="grid gap-6 sm:grid-cols-1 md:grid-cols-2"
              >
                {moreProjects.map((project) => (
                  <motion.div key={project.title} variants={projectItem}>
                    <ProjectCard {...project} />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
  

            {/* Get in Touch Section */}
            <motion.div {...sectionMotion} className="mb-16 w-full text-left">
              <h2 className="mb-8 text-sm font-extrabold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                Get in Touch
              </h2>
              <div className="space-y-4">
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  Connect with me on{" "}
                  <a
                    href="https://www.linkedin.com/in/priyanshu-bharti-441823229/?originalSubdomain=in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black dark:text-white underline underline-offset-4 hover:text-gray-600 dark:hover:text-gray-300"
                  >
                    LinkedIn
                  </a>{" "}
                  or{" "} shoot an {" "}
                  <a
                    href="mailto:bhartipriyanshustm@gmail.com"
                    className="text-black dark:text-white underline underline-offset-4 hover:text-gray-600 dark:hover:text-gray-300"
                  >
                    email
                  </a>
                </p>
              </div>
            </motion.div>

          </motion.main>

      {/* Glass Island Navbar */}
      <nav className="fixed bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-full border border-gray-200 dark:border-zinc-700 bg-white/70 dark:bg-zinc-900/80 px-4 py-3 shadow-sm backdrop-blur-md transition-all hover:bg-white/90 dark:hover:bg-zinc-900 sm:gap-6 sm:px-6">
        <a
          href="https://github.com/Priyanshubhartistm"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors hover:scale-110"
        >
          <Github className="h-5 w-5" />
        </a>
        <a
          href="https://www.linkedin.com/in/priyanshu-bharti-441823229/?originalSubdomain=in"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors hover:scale-110"
        >
          <Linkedin className="h-5 w-5" />
        </a>
        <a
          href="https://x.com/0xAarohi"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors hover:scale-110"
        >
          <FaXTwitter className="h-5 w-5" />
        </a>
        <a
  href="https://t.me/priyanshu123bharti"
  target="_blank"
  rel="noopener noreferrer"
  className="text-gray-500 dark:text-gray-300 hover:text-black dark:hover:text-white"
>
  <FaTelegram className="h-5 w-5" />
</a>
        <a
          href="https://cal.com/priyanshu-bharti-oubnjc"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors hover:scale-110"
        >
          <Calendar className="h-5 w-5" />
        </a>
      </nav>

    </div >
  );
}

