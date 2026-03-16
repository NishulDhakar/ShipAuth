'use client';


import { motion } from 'framer-motion';
import { Footer } from '@/components/landing/Footer';
import { Navbar } from '@/components/landing/Navbar';
import { CTA } from '@/components/landing/CTA';

// SVG Background Pattern Component
const BackgroundPattern = () => (
  <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
    {/* Grid Lines */}
    <svg className="absolute w-full h-full opacity-[0.03]" viewBox="0 0 1440 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 100H1440" stroke="black" strokeWidth="1" />
      <path d="M0 300H1440" stroke="black" strokeWidth="1" />
      <path d="M0 500H1440" stroke="black" strokeWidth="1" />
      <path d="M0 700H1440" stroke="black" strokeWidth="1" />
      <path d="M100 0V1000" stroke="black" strokeWidth="1" />
      <path d="M300 0V1000" stroke="black" strokeWidth="1" />
      <path d="M500 0V1000" stroke="black" strokeWidth="1" />
      <path d="M700 0V1000" stroke="black" strokeWidth="1" />
      <path d="M900 0V1000" stroke="black" strokeWidth="1" />
      <path d="M1100 0V1000" stroke="black" strokeWidth="1" />
      <path d="M1300 0V1000" stroke="black" strokeWidth="1" />
    </svg>

    {/* Connection Nodes */}
    <div className="absolute top-[20%] left-[15%] w-3 h-3 bg-gray-200 rounded-full"></div>
    <div className="absolute top-[25%] right-[20%] w-3 h-3 bg-gray-200 rounded-full"></div>
    <div className="absolute bottom-[40%] left-[30%] w-2 h-2 bg-gray-200 rounded-full"></div>

    {/* Connecting Lines (Simulated) */}
    <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 1440 800" fill="none">
      <path d="M200 200 C 400 200, 400 400, 600 400" stroke="#CBD5E1" strokeWidth="2" fill="none" strokeDasharray="6 6" />
      <path d="M1200 300 C 1000 300, 1000 500, 800 500" stroke="#CBD5E1" strokeWidth="2" fill="none" strokeDasharray="6 6" />
    </svg>

    {/* Gradient Blurs */}
    <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-[100px]"></div>
    <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-100/30 rounded-full blur-[120px]"></div>
  </div>
);

const IntegrationIcon = ({ src, delay, name }: { src: string, delay: number, name: string }) => (
  <div className="relative group flex flex-col items-center">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="w-12 h-12 md:w-14 md:h-14 bg-white dark:bg-zinc-900 rounded-full shadow-lg flex items-center justify-center border border-gray-100 dark:border-zinc-800 relative z-10 hover:scale-110 transition-transform cursor-pointer"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={name} className="w-6 h-6 md:w-8 md:h-8 object-contain dark:brightness-110" />
    </motion.div>

    {/* Tooltip */}
    <div className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-20">
      <div className="bg-gray-900 text-white text-xs px-3 py-1.5 rounded-md whitespace-nowrap shadow-xl">
        {name}
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
      </div>
    </div>
  </div>
);

export default function Home() {
  return (
    <div className="min-h-screen font-sans text-text-main relative overflow-x-hidden">
      <Navbar />

      <main className="relative pt-30">
        {/* <BackgroundPattern /> */}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Hero Content */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-7xl font-display font-medium tracking-tight leading-[1.1] mb-6 text-primary"
            >
              Start Shipping Faster <br />
              with Pre-built Boilerplates
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              Shipauth provides production-ready boilerplates for authentication, Role-Based Access Control, and modern web architectures so you can focus on building your product.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a href="/boilerplates" className="w-full sm:w-auto text-center bg-primary text-white dark:text-black px-8 py-3.5 rounded-xl text-base font-medium hover:bg-primary/90 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5">
                Explore Boilerplates
              </a>
              <a href="https://github.com/NishulDhakar/shipauth" target="_blank" rel="noopener noreferrer" className="w-full text-center sm:w-auto bg-white dark:bg-zinc-900 text-primary border border-gray-200 dark:border-zinc-800 px-8 py-3.5 rounded-xl text-base font-medium hover:bg-gray-50 dark:hover:bg-zinc-800 transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                Star this repo
              </a>
            </motion.div>
          </div>

          {/* Integrations Row */}
          <div className="text-center mb-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <p className="text-sm text-text-secondary font-medium">Boilerplates built with modern tools and frameworks</p>
            </motion.div>
          </div>
          <div className="flex justify-center flex-wrap gap-4 md:gap-8 mb-20 max-w-4xl mx-auto">
            <IntegrationIcon name="Next.js" delay={0.4} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" />
            <IntegrationIcon name="React" delay={0.5} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
            <IntegrationIcon name="Tailwind CSS" delay={0.55} src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" />
            <IntegrationIcon name="Laravel" delay={0.6} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" />
            <IntegrationIcon name="Node.js" delay={0.65} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
            <IntegrationIcon name="Express" delay={0.7} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
            <IntegrationIcon name="MongoDB" delay={0.75} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />
            <IntegrationIcon name="MySQL" delay={0.8} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" />
            <IntegrationIcon name="Supabase" delay={0.85} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" />
          </div>

          {/* Dashboard Preview */}
          {/* <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative mx-auto max-w-6xl"
          > */}
          {/* Glow Effect behind dashboard */}
          {/* <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-[2rem] blur opacity-20"></div> */}
          {/* <DashboardPreview /> */}
          {/* </motion.div> */}
        </div>
      </main>

      <CTA />
      <Footer />
    </div>
  );
}