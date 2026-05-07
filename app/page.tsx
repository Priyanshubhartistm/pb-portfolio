"use client";

import Image from "next/image";
import { Github, Linkedin, Calendar, Music, Pause } from "lucide-react";
import { FaTelegram, FaXTwitter } from "react-icons/fa6";
import { ExperienceItem } from "./components/ExperienceItem";
import { GithubGraph } from "./components/GithubGraph";
import { TechStack } from "./components/TechStack";
import { ProjectCard } from "./components/ProjectCard";
import { useState, useEffect, useMemo, useRef } from "react";
import { ThemeToggle } from "./components/ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";

const DiscordIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1971.3728.2914a.077.077 0 01-.0066.1277 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z" />
  </svg>
);

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
    transition: { duration: 0.6, ease: "easeOut" },
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
      transition: { duration: 0.45, ease: "easeOut" },
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
                A full-stack developer and <a href="" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-indigo-500 transition-colors">cloud enthusiast</a> with deep experience in open source.
              </p>
              <p>
                I love building products that solve real problems and make people's lives easier. 
                <b className="text-gray-900 dark:text-white"> Building scalable web applications with full-stack and blockchain technologies. </b>       
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
                  title="Nostream"
                  role="Open Source Contributor"
                  collapsible={true}
                >
                  <div className="space-y-2">
                    <p>Duration: April 2026 – Present</p>
                    <p>Working on nostream, a popular Nostr Relay written in TypeScript.</p>
                    <p>Building features like I2P support, Redis configuration, and query optimization.</p>
                    <p>Handling WebSocket connections and event processing for the relay.</p>
                  </div>
                </ExperienceItem>

                <ExperienceItem
                  title="Summer of Bitcoin"
                  role="Developer"
                  collapsible={true}
                >
                  <div className="space-y-2">
                    <p>Duration: Feb 2026 – Current 2026</p>
                    <p>Contributed as a developer to open-source Bitcoin projects under the Summer of Bitcoin program.</p>
                    <p>Worked on real-world Bitcoin/Lightning Network codebases, gaining hands-on experience with blockchain protocols.</p>
                    <p>Collaborated with experienced Bitcoin Core developers and the global open-source community.</p>
                    <p>Submitted and reviewed code contributions following industry-standard Git workflows and open-source best practices.</p>
                    <p>Gained deep understanding of Bitcoin's architecture, cryptography, and decentralized systems.</p>
                  </div>
                </ExperienceItem>

                <ExperienceItem
                  title="Google Cloud Arcade 2025"
                  role="Cloud Program Facilitator | Remote"
                  collapsible={true}
                  link=""
                >
                  <div className="space-y-2">
                    <p>Facilitated cloud learning programs for 700+ developers, focusing on GCP services and DevOps practices.</p>
                    <p>Conducted hands-on labs on <b>GKE, Cloud Run, Cloud Functions, and Terraform</b>.</p>
                    <p>Mentored participants on <b>CI/CD pipelines, containerization, and infrastructure as code</b>.</p>
                    <p>Supported learners in achieving <b>Google Cloud certifications</b> through structured guidance.</p>
                    <p>Collaborated with global teams to improve curriculum and learning outcomes.</p>
                  </div>
                
                </ExperienceItem>

                <ExperienceItem
                  title="Microsoft Learn Student Ambassador (MLSA)"
                  role="Student Technology Ambassador"
                  collapsible={true}
                  link=""
                >
                  <div className="space-y-2">
                    <p>Represented Microsoft’s global student developer community by promoting technical learning and peer collaboration.</p>
                    <p>Organized and led workshops, hackathons, and tech talks on Microsoft technologies such as Azure, .NET, and Power Platform.</p>
                    <p>Created educational content including blog posts, tutorials, and videos to share knowledge and best practices.</p>
                    <p>Collaborated with other student ambassadors and Microsoft teams to drive community engagement and growth.</p>
                    <p>Actively contributed to building a strong student tech community by sharing resources and learning opportunities.</p>
                  </div>
                </ExperienceItem>

                <ExperienceItem
                  title="Government Program Contributor"
                  role="Technology & Systems Support"
                  collapsible={true}
                >
                  <div className="space-y-2">
                    <p>Contributed to technology-driven initiatives under a government-led digital program.</p>
                    <p>Provided technical support for system implementations and digital transformation projects.</p>
                    <p>Assisted in the development and deployment of digital solutions to enhance public services.</p>
                    <p>Collaborated with cross-functional teams to ensure successful project execution and delivery.</p>
                  </div>
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
                  title="Web3 & Blockchain Protocol"
                  role="Bitcoin Core, Ethereum & Nostr Ecosystem"
                  collapsible={true}
                >
                  <div className="space-y-2">
                    <p>Contributed to major open-source blockchain repositories including <b className="text-gray-800 dark:text-gray-200">bitcoin-core</b>, <b className="text-gray-800 dark:text-gray-200">go-ethereum</b>, and <b className="text-gray-800 dark:text-gray-200">btcpayserver</b>.</p>
                    <p>Actively developed features for <b className="text-gray-800 dark:text-gray-200">nostream</b> (Nostr Relay) and privacy-focused protocols like <b className="text-gray-800 dark:text-gray-200">fedimint</b> and <b className="text-gray-800 dark:text-gray-200">robosats</b>.</p>
                    <p>Worked on complex decentralized system architectures, I2P integrations, and Lightning Network testings.</p>
                  </div>
                </ExperienceItem>

                <ExperienceItem
                  title="Full-Stack & UI/UX"
                  role="Palisadoes Foundation, Cal.com & Twenty"
                  collapsible={true}
                  link="https://github.com/PalisadoesFoundation/talawa-admin/pulls?q=is%3Apr+author%3APriyanshubhartistm+is%3Aclosed"
                >
                  <div className="space-y-2">
                    <p>Successfully merged 23+ PRs across <b className="text-gray-800 dark:text-gray-200">talawa, talawa-api</b>, and <b className="text-gray-800 dark:text-gray-200">talawa-admin</b> by Palisadoes Foundation.</p>
                    <p>Contributed to leading full-stack platforms like <b className="text-gray-800 dark:text-gray-200">cal.com</b> (scheduling infrastructure) and <b className="text-gray-800 dark:text-gray-200">twenty</b> (open-source CRM).</p>
                    <p>Improved React/Next.js state management, solved responsive UI bugs, and enhanced core GraphQL/REST API features.</p>
                  </div>
                </ExperienceItem>

                <ExperienceItem
                  title="DevOps & Infrastructure Tools"
                  role="Kubernetes, CI/CD pipelines & Testing"
                  collapsible={true}
                >
                  <div className="space-y-2">
                    <p>Engaged with modern DevOps tools and cloud-native infrastructure including <b className="text-gray-800 dark:text-gray-200">daytona</b>, <b className="text-gray-800 dark:text-gray-200">keploy</b>, and <b className="text-gray-800 dark:text-gray-200">microcks-cli</b>.</p>
                    <p>Contributed to advanced container orchestrations with <b className="text-gray-800 dark:text-gray-200">kubestellar</b> and <b className="text-gray-800 dark:text-gray-200">kubeslice-controller</b>.</p>
                    <p>Optimized Docker images, automated GitHub Actions testing workflows, and stabilized core pipeline deployments.</p>
                  </div>
                </ExperienceItem>

                <ExperienceItem
                  title="Documentation & Open-Source Community"
                  role="Technical Guide & Maintainer Initiatives"
                  collapsible={true}
                >
                  <div className="space-y-2">
                    <p>Enhanced developer onboarding experiences for Data tools like <b className="text-gray-800 dark:text-gray-200">OpenMetadata</b> and <b className="text-gray-800 dark:text-gray-200">sktime</b>.</p>
                    <p>Authored extensive markdown documentations, refined API guidelines, and created clear structures in <b className="text-gray-800 dark:text-gray-200">developer-docs</b>.</p>
                    <p>Actively reviewed community PRs, mentored newcomers via Hacktoberfest, and resolved active technical issues.</p>
                  </div>
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
                I&apos;m a Technically well. In this skill&apos;s the core stack I&apos;ve spent the most time with:
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
                <motion.div variants={projectItem}>
                  <ProjectCard
                    title="bitcoin-prices"
                    description="Built a real-time Bitcoin price tracker with live updates and animated UI. Shows price metrics, charts, and cards with dark/light mode support. Handles offline state and auto-retries failed API calls."
                    techStack={["TypeScript", "React", "HTML", "CSS"]}
                    githubUrl="https://github.com/Priyanshubhartistm/bitcoin-prices"
                    liveUrl="https://completion-task.vercel.app/"
                  />
                </motion.div>
                <motion.div variants={projectItem}>
                  <ProjectCard
                    title="Cryptoverse - Cryptocurrency Tracker"
                    description="Real-time cryptocurrency tracking app with live prices, market caps, and trading volumes. Features advanced search, interactive charts with multiple time ranges, exchange insights, latest crypto news, and a beautiful responsive UI with smooth animations."
                    techStack={["React", "JavaScript", "CSS", "Crypto API"]}
                    githubUrl="https://github.com/Priyanshubhartistm/Cryptocurrency-App"
                    liveUrl="https://priyanshubhartistm.github.io/Cryptocurrency-Tracker/"
                  />
                </motion.div>
                <motion.div variants={projectItem}>
                  <ProjectCard
                    title="Juice🍊Factory Website"
                    description="A static web project showcasing creative frontend design with smooth animations and responsive layouts. Built to demonstrate modern web design principles with a fruit-themed juice factory concept."
                    techStack={["HTML", "CSS", "JavaScript"]}
                    githubUrl="https://github.com/Priyanshubhartistm/juice-factory"
                    liveUrl="https://priyanshubhartistm.github.io/juice-factory/"
                  />
                </motion.div>
              </motion.div>
            </motion.div>
  

            {/* Writings & Blogs Section */}
            <motion.div {...sectionMotion} className="mb-16 w-full text-left">
              <h2 className="mb-8 text-sm font-extrabold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                Writings & Blogs
              </h2>
              <p className="w-full text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                I write my thoughts on{" "}
                <a
                  href="https://medium.com/@bhartipriyanshustm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black dark:text-white underline underline-offset-4 transition-colors hover:text-gray-600 dark:hover:text-gray-300"
                >
                  Medium
                </a>{" "}
                      Write technical blogs on cloud computing and modern development topics on Medium.              </p>
            </motion.div>

            {/* Library Section */}
            <motion.div {...sectionMotion} className="mb-16 w-full text-left">
              <h2 className="mb-8 text-sm font-extrabold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                Life:) My Library
              </h2>

              {/* Dev Subsection */}
              <div className="mb-8">
                <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-600">
                  Doing for feel good
                </h3>
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                  {[
                    { title: "Coding", author: "In open source" },
                    { title: "Cooking: The Art of Living", author: "Best time for me" },
                    { title: "Teaching", author: "If I'm not a coder then definitely a teacher" },
                    { title: "Editing", author: "My very 1st source of earning" },
                    { title: "Dance", author: "Without dancing I can't imagine a holiday" },
                    { title: "Read Books", author: "Specially some deep reads related to real - life" }
                  ].map((book) => (
                    <div key={book.title} className="group flex flex-col gap-1 transition-all">
                      <span className="text-sm font-medium text-black dark:text-white group-hover:underline underline-offset-4 decoration-gray-200 dark:decoration-gray-800 transition-all">
                        {book.title}
                      </span>
                      <span className="text-xs text-gray-400 dark:text-gray-500">
                        {book.author}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Note */}
              <p className="mt-6 text-xs italic text-gray-400 dark:text-gray-500">
                *I do many more, but these are some of my favorite activities that keep me energized and inspired.
              </p>
            </motion.div>

            {/* Thing about me Section */}
            <motion.div {...sectionMotion} className="mb-16 w-full text-left">
              <h2 className="mb-8 text-sm font-extrabold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                Thing about me
              </h2>
              <div className="space-y-6">
                <p className="w-full text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                    Outside of coding and system design, I enjoy learning through communities and real-world experiences. My journey in Computer Science has taught me the value of collaboration, open-source development, and continuous growth.</p>

                <div className="flex justify-center">
                  <div className="relative h-[250px] w-full max-w-sm grayscale hover:grayscale-0 transition-all duration-700 sm:h-[350px]" style={{ maskImage: "radial-gradient(circle, black 40%, transparent 95%)", WebkitMaskImage: "radial-gradient(circle, black 40%, transparent 95%)" }}>
                    <Image
                      src="/casual.png"
                      alt="Casual photo"
                      fill
                      className="object-contain object-center"
                    />
                  </div>
                </div>

                <p className="w-full text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                        I am passionate about building scalable digital solutions and contributing to projects that create real impact. I believe curiosity and consistency are the foundation of meaningful innovation.                </p>
              </div>
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
          href="https://x.com/PriyanshuB74940"
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
          href="https://discord.gg/aarohi04462"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors hover:scale-110"
        >
          <DiscordIcon className="h-5 w-5" />
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

