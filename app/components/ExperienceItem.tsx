"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion } from "framer-motion";

interface ExperienceItemProps {
    title: string;
    role: string;
    children: React.ReactNode;
    collapsible?: boolean;
    link?: string;
    collapsedHeight?: string;
}

export function ExperienceItem({ title, role, children, collapsible = false, link, collapsedHeight = "max-h-20" }: ExperienceItemProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative pl-4 sm:pl-6 border-l-2 border-gray-200 dark:border-zinc-800 hover:border-indigo-500 dark:hover:border-purple-500 transition-colors duration-300"
        >
            {/* Timeline Dot */}
            <div className="absolute -left-[5px] top-2 h-2 w-2 rounded-full bg-gray-300 dark:bg-zinc-700 group-hover:bg-indigo-500 dark:group-hover:bg-purple-500 group-hover:scale-150 transition-all duration-300" />
            
            <div className="mb-3 flex flex-col justify-between sm:flex-row sm:items-baseline">
                <div className="flex items-center gap-3">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 group-hover:text-indigo-600 dark:group-hover:text-purple-400 transition-colors">
                        {title}
                    </h3>
                </div>
                <span className="text-sm font-semibold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-400 dark:from-gray-400 dark:to-gray-500 group-hover:from-indigo-500 group-hover:to-pink-500 transition-all">
                    {role}
                </span>
            </div>

            <div className={`relative max-w-2xl text-sm leading-relax text-gray-600 dark:text-gray-400 transition-all duration-500 ease-in-out ${!isExpanded && collapsible ? `${collapsedHeight} overflow-hidden` : ""}`}>
                <div className="space-y-2 group-hover:text-gray-800 dark:group-hover:text-gray-300 transition-colors">
                    {children}
                </div>
                {collapsible && !isExpanded && (
                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white dark:from-black to-transparent pointer-events-none" />
                )}
            </div>

            {collapsible && (
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="mt-4 flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-gray-300 hover:bg-indigo-500 hover:text-white dark:hover:bg-indigo-500 dark:hover:text-white transition-all shadow-sm"
                >
                    {isExpanded ? (
                        <>
                            Show Less <ChevronUp className="h-3.5 w-3.5" />
                        </>
                    ) : (
                        <>
                            Read More <ChevronDown className="h-3.5 w-3.5" />
                        </>
                    )}
                </button>
            )}
        </motion.div>
    );
}
