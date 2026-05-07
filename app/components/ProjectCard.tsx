"use client";

import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
}

export const ProjectCard = ({
  title,
  description,
  techStack,
  liveUrl,
  githubUrl,
}: ProjectCardProps) => {
  return (
    <motion.div 
      whileHover={{ y: -5, scale: 1.01 }}
      transition={{ duration: 0.2 }}
      className="group relative overflow-hidden rounded-xl border border-gray-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 p-6 backdrop-blur-sm transition-all hover:border-indigo-500/60 hover:shadow-[0_0_45px_-10px_rgba(99,102,241,0.55)]"
    >
      <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-indigo-500/25 via-purple-500/20 to-pink-500/25 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative space-y-4">
        {/* Project Title */}
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 group-hover:from-indigo-500 group-hover:to-purple-500 transition-all duration-300">
            {title}
          </h3>
          <div className="flex gap-2">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
                aria-label="View on GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-gray-400 hover:text-pink-500 dark:hover:text-pink-400 transition-colors"
                aria-label="View live project"
              >
                <ExternalLink className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 pt-2">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-gray-200 dark:border-zinc-700/50 bg-gray-50 dark:bg-zinc-800/50 px-3 py-1 text-xs font-semibold text-gray-700 dark:text-gray-300 shadow-sm transition-all group-hover:border-indigo-500/30 group-hover:bg-indigo-500/10 group-hover:text-indigo-700 dark:group-hover:text-indigo-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
