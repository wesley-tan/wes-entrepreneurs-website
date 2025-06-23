import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link, useLocation } from 'react-router-dom';
import logoImage from '../../assets/WesEntrepreneurLogo_MAIN.png';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Programs', href: '/programs' },
  { name: 'Events', href: '/events' },
  { name: 'Get Involved', href: '/get-involved' },
  { name: 'Vision', href: '/vision' },
  { name: 'Contact', href: '/contact' }
];

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActiveRoute = (href: string) => {
    if (href === '/' && location.pathname === '/') return true;
    if (href !== '/' && location.pathname === href) return true;
    return false;
  };

  return (
    <header className="fixed top-0 w-full bg-wes-white/95 backdrop-blur-sm z-50 border-b border-wes-dim/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              to="/"
              className="cursor-pointer p-1 rounded"
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
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`transition-colors font-mont font-medium p-2 rounded ${
                  isActiveRoute(item.href)
                    ? 'text-wes-royal font-bold'
                    : 'text-wes-black hover:text-wes-royal'
                }`}
              >
                {item.name}
              </Link>
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
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block w-full text-left px-3 py-2 font-mont font-medium ${
                    isActiveRoute(item.href)
                      ? 'text-wes-royal font-bold'
                      : 'text-wes-black hover:text-wes-royal'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
}; 