"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface StartupAnimationProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

export function StartupAnimation({ title, subtitle, children }: StartupAnimationProps) {
  const [titleText, setTitleText] = useState("");
  const [subtitleText, setSubtitleText] = useState("");
  const [typingPhase, setTypingPhase] = useState<"title" | "subtitle" | "complete">("title");

  // Typewriter effect speed (ms per character)
  const typingSpeed = 50;

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (typingPhase === "title") {
      if (titleText.length < title.length) {
        timeout = setTimeout(() => {
          setTitleText(title.slice(0, titleText.length + 1));
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => setTypingPhase("subtitle"), 400); // Pause before subtitle
      }
    } else if (typingPhase === "subtitle") {
      if (subtitleText.length < subtitle.length) {
        timeout = setTimeout(() => {
          setSubtitleText(subtitle.slice(0, subtitleText.length + 1));
        }, typingSpeed / 1.5); // Slightly faster for paragraph
      } else {
        timeout = setTimeout(() => setTypingPhase("complete"), 500); // Pause before revealing children
      }
    }

    return () => clearTimeout(timeout);
  }, [titleText, subtitleText, typingPhase, title, subtitle]);

  return (
    <div className="flex flex-col items-center justify-center w-full">
      {/* Title */}
      <motion.h1 
        className="mb-4 text-5xl font-extrabold tracking-tight sm:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-fuchsia-500 dark:from-rose-400 dark:to-fuchsia-500 min-h-[1.2em] flex items-center"
      >
        {titleText}
        {typingPhase === "title" && (
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
            className="ml-1 inline-block w-[3px] h-[0.9em] bg-blue-500 dark:bg-blue-400"
          />
        )}
      </motion.h1>

      {/* Subtitle */}
      <motion.p 
        className="mb-8 max-w-xl text-lg text-gray-700 dark:text-gray-300 sm:text-xl min-h-[3em]"
      >
        {subtitleText}
        {typingPhase === "subtitle" && (
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
            className="ml-1 inline-block w-[2px] h-[0.9em] bg-blue-500 dark:bg-blue-400 align-middle"
          />
        )}
        {typingPhase === "complete" && (
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
            className="ml-1 inline-block w-[2px] h-[0.9em] bg-blue-500 dark:bg-blue-400 align-middle opacity-50"
          />
        )}
      </motion.p>

      {/* Children Elements (Buttons, etc.) */}
      <AnimatePresence>
        {typingPhase === "complete" && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              ease: "easeOut",
              staggerChildren: 0.2
            }}
            className="flex flex-col items-center w-full"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
