import React from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { ThemeToggleButton } from '@/components/common/ThemeSwitch';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full  backdrop-blur mt-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-primary rounded-md flex items-center justify-center">
              <div className="w-3 h-3 border-2 border-white rounded-full border-t-transparent transform -rotate-45"></div>
            </div>
            <span className="font-display font-medium text-xl text-primary">Shipauth</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {['Home', 'Boilerplates'].map((item) => {
              const href = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
              const isExternal = item === 'Documentation' || item === 'Github';
              if (isExternal) {
                return (
                  <a
                    key={item}
                    href={href}
                    className="text-sm font-medium text-text-secondary hover:text-primary dark:text-gray-400 dark:hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                );
              }
              return (
                <Link
                  key={item}
                  href={href}
                  className="text-sm font-medium text-text-secondary hover:text-primary dark:text-gray-400 dark:hover:text-white transition-colors"
                >
                  {item}
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggleButton className="bg-primary text-white hover:bg-primary/95 hover:text-white dark:bg-primary/80 dark:text-black dark:hover:bg-primary/95 transition-colors" />
            <Link href="/boilerplates" className="bg-primary dark:bg-primary/80 dark:text-black text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
              Explore Boilerplates
            </Link>


          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggleButton className="bg-transparent text-foreground hover:bg-accent dark:text-white dark:bg-white/20 dark:hover:bg-white/30" />
            <button onClick={() => setIsOpen(!isOpen)} className="text-primary dark:text-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-zinc-900 border-b border-gray-100 dark:border-zinc-800 absolute w-full">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {['Home', 'Boilerplates', 'Documentation', 'Github'].map((item) => {
              const href = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
              const isExternal = item === 'Documentation' || item === 'Github';
              if (isExternal) {
                return (
                  <a
                    key={item}
                    href={href}
                    className="block px-3 py-2 rounded-md text-base font-medium text-text-secondary hover:text-primary hover:bg-gray-50 dark:text-gray-400 dark:hover:text-white dark:hover:bg-zinc-800"
                  >
                    {item}
                  </a>
                );
              }
              return (
                <Link
                  key={item}
                  href={href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-text-secondary hover:text-primary hover:bg-gray-50 dark:text-gray-400 dark:hover:text-white dark:hover:bg-zinc-800"
                >
                  {item}
                </Link>
              );
            })}
            <div className="pt-4">
              <Link href="/boilerplates" className="block w-full text-center bg-primary text-white px-5 py-3 rounded-lg text-base font-medium">
                Explore Boilerplates
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};