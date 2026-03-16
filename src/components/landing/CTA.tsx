import React from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

export const CTA = () => {
    return (
        <section className=" relative z-10 w-full">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Bottom CTA to GitHub */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mt-24 text-center border border-gray-200 dark:border-gray-800 rounded-3xl p-8 md:p-12 relative overflow-hidden"
                    >
                        {/* Background Effects */}
                        {/* <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
                        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div> */}

                        <h2 className="text-2xl md:text-3xl font-display dark:text-white/80  mb-4 relative z-10">
                            Want to contribute a boilerplate?
                        </h2>
                        <p className="mb-8 max-w-xl mx-auto dark:text-white/80 relative z-10">
                            Shipauth is open source and community-driven. Fork the repository and open a pull request to add your own starter template.
                        </p>
                        <a
                            href="https://github.com/NishulDhakar/shipauth"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block dark:bg-primary px-8 py-3 rounded-xl font-medium hover:bg-gray-50 transition-colors shadow-lg relative z-10"
                        >
                            Contribute on GitHub
                        </a>
                    </motion.div>
            </div>
        </section>
    );
};
