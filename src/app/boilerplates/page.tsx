'use client';

import { motion } from 'framer-motion';
import { Navbar } from '@/components/landing/Navbar';
import { Footer } from '@/components/landing/Footer';
import { BoilerplateCard } from '@/components/boilerplates/boilerplateCard';
import { boilerplatesData } from './data';
import { CTA } from '@/components/landing/CTA';

export default function BoilerplatesPage() {
    return (
        <div className="min-h-screen font-sans text-text-main relative overflow-x-hidden flex flex-col">
            <Navbar />

            <main className="flex-grow relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    {/* Header */}
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-4xl md:text-6xl mt-30 font-display font-medium tracking-tight leading-[1.1] mb-6 text-primary"
                        >
                            Shipauth Boilerplates
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed mb-6"
                        >
                            Don't reinvent the wheel. Copy a production-ready boilerplate and start building your business logic on day one.
                        </motion.p>
                    </div>

                    {/* Boilerplates Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {boilerplatesData.map((boilerplate, index) => (
                            <BoilerplateCard
                                key={boilerplate.id}
                                boilerplate={boilerplate}
                                index={index}
                            />
                        ))}
                    </div>
                    <CTA />
                </div>
            </main>

            <Footer />
        </div>
    );
}
