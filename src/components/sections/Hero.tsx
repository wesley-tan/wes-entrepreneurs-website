import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { siteContent } from '../../data/content';
import logoImage from '../../assets/logo.png';

export const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-12 sm:py-20 relative overflow-hidden w-full"
      style={{
        backgroundImage: 'url(/background.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Optional overlay for better text readability */}
      <div className="absolute inset-0 bg-black/10"></div>
      
      <div className="max-w-5xl mx-auto text-center text-white relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 sm:mb-8"
        >
          <img 
            src={logoImage}
            alt="Wesleyan Entrepreneurs Logo" 
            className="h-20 sm:h-24 md:h-32 lg:h-40 mx-auto drop-shadow-lg"
            onError={(e) => {
              console.error('Logo failed to load:', e);
              // Fallback to public path
              (e.target as HTMLImageElement).src = '/logo.png';
            }}
            onLoad={() => {
              console.log('Logo loaded successfully');
            }}
          />
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl font-mont font-bold mb-6 sm:mb-8 leading-tight tracking-tight text-white drop-shadow-lg"
        >
          {siteContent.hero.title}
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl md:text-2xl font-inter font-medium mb-4 sm:mb-6 leading-relaxed text-white drop-shadow-md"
        >
          {siteContent.hero.subtitle}
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base sm:text-lg font-inter mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed text-white/95 drop-shadow-sm px-2 sm:px-0"
        >
          {siteContent.hero.description}
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Button
            variant="secondary"
            size="lg"
            href={siteContent.forms.interestForm}
            target="_blank"
            className="bg-white text-wes-royal hover:bg-wes-white/90 drop-shadow-lg"
          >
            {siteContent.hero.cta}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}; 