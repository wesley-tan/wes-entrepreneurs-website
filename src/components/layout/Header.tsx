import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import logoImage from '../../assets/WesEntrepreneurLogo_MAIN.png';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#about' },
  { name: 'Programs', href: '#programs' },
  { name: 'Events', href: '#events' },
  { name: 'Get Involved', href: '#get-involved' },
  { name: 'Contact', href: '#contact' }
];

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (href: string) => {
    console.log('Navigation clicked:', href);
    setIsOpen(false);
    
    // Simple timeout to let mobile menu close
    setTimeout(() => {
      if (href === '#home') {
        console.log('Scrolling to top');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      
      // Find the element
      const elementId = href.replace('#', '');
      const element = document.getElementById(elementId);
      
      if (element) {
        console.log('Found element, scrolling...');
        // Simple scrollIntoView with offset using CSS scroll-margin-top
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      } else {
        console.error(`Element with ID "${elementId}" not found`);
      }
    }, 50);
  };

  return (
    <header className="fixed top-0 w-full bg-wes-white/95 backdrop-blur-sm z-50 border-b border-wes-dim/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <button
              className="cursor-pointer border-none bg-transparent p-1 rounded"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                console.log('Logo clicked');
                handleNavClick('#home');
              }}
              type="button"
              aria-label="Go to home"
            >
              <img 
                src={logoImage} 
                alt="Wesleyan Entrepreneurs Logo" 
                className="h-8 w-auto"
                onError={(e) => {
                  console.error('Header logo failed to load');
                  // Fallback to public logo
                  (e.target as HTMLImageElement).src = '/logo.png';
                }}
                onLoad={() => {
                  console.log('Header logo loaded successfully');
                }}
              />
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  console.log('Desktop nav button clicked:', item.name, item.href);
                  handleNavClick(item.href);
                }}
                className="text-wes-black hover:text-wes-royal transition-colors font-mont font-medium cursor-pointer border-none bg-transparent p-2 rounded"
                type="button"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-wes-black hover:text-wes-royal"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={(e) => {
                    e.preventDefault();
                    console.log('Mobile nav clicked:', item.name, item.href);
                    handleNavClick(item.href);
                  }}
                  className="block w-full text-left px-3 py-2 text-wes-black hover:text-wes-royal font-mont font-medium"
                  type="button"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
}; 