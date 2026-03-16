'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Copy, ExternalLink, Github } from 'lucide-react';

export interface Boilerplate {
    id: string;
    title: string;
    description: string;
    command: string;
    tags: string[];
    githubUrl?: string;
    demoUrl?: string;
}

interface BoilerplateCardProps {
    boilerplate: Boilerplate;
    index: number;
}

export const BoilerplateCard: React.FC<BoilerplateCardProps> = ({ boilerplate, index }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(boilerplate.command);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-zinc-900/50 rounded-2xl p-6 border border-gray-100 dark:border-zinc-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative group flex flex-col h-full pt-10"
        >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-bl-full rounded-tr-2xl -z-10 opacity-50 group-hover:opacity-100 transition-opacity"></div>

            <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-display font-semibold text-primary">{boilerplate.title}</h3>
                <div className="flex gap-2">
                    {boilerplate.githubUrl && (
                        <a href={boilerplate.githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
                            <Github size={20} />
                        </a>
                    )}
                    {boilerplate.demoUrl && (
                        <a href={boilerplate.demoUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
                            <ExternalLink size={20} />
                        </a>
                    )}
                </div>
            </div>

            <p className="text-text-secondary text-sm mb-6 flex-grow">
                {boilerplate.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
                {boilerplate.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-gray-50 dark:bg-zinc-800/50 text-gray-600 dark:text-gray-300 text-xs font-medium rounded-full border border-gray-100 dark:border-zinc-700/50">
                        {tag}
                    </span>
                ))}
            </div>

            <div className="relative mt-auto">
                <div className="bg-gray-50 dark:bg-zinc-950 rounded-xl p-4 pr-12 font-mono text-xs sm:text-sm text-gray-800 dark:text-gray-300 break-all border border-gray-200 dark:border-zinc-800">
                    <span className="text-blue-600 dark:text-blue-400 select-none mr-2">$</span>
                    {boilerplate.command}
                </div>
                <button
                    onClick={handleCopy}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-white dark:bg-zinc-800 rounded-lg border border-gray-200 dark:border-zinc-700 text-gray-500 hover:text-primary dark:hover:text-white hover:border-gray-300 dark:hover:border-gray-500 transition-colors shadow-sm"
                    title="Copy command"
                >
                    {copied ? <Check size={16} className="text-green-500 dark:text-green-400" /> : <Copy size={16} />}
                </button>
            </div>
        </motion.div>
    );
};
