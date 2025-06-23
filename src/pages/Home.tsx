import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { siteContent } from '../data/content';
import logoImage from '../assets/logo.png';

export const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
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
              href={siteContent.forms.membershipForm}
              target="_blank"
              className="bg-white text-wes-royal hover:bg-wes-white/90 drop-shadow-lg"
            >
              {siteContent.hero.cta}
            </Button>
          </motion.div>
        </div>
      </section>
      
      {/* Quick Links Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-mont font-bold text-wes-royal mb-6">
              Explore Our Community
            </h2>
            <p className="text-lg font-inter text-wes-black max-w-3xl mx-auto leading-relaxed">
              Discover what makes Wesleyan Entrepreneurs the premier destination for student innovation and entrepreneurship.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-8 text-center">
                <h3 className="text-xl font-mont font-bold text-wes-royal mb-3">About Us</h3>
                <p className="font-inter text-wes-black leading-relaxed mb-6">
                  Learn about our mission, what we do, and the benefits of joining our entrepreneurial community.
                </p>
                <Link 
                  to="/about"
                  className="inline-block bg-wes-royal hover:bg-wes-royal/90 text-white font-mont font-medium py-2 px-6 rounded-lg transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-8 text-center">
                <h3 className="text-xl font-mont font-bold text-wes-royal mb-3">Programs & Events</h3>
                <p className="font-inter text-wes-black leading-relaxed mb-6">
                  Explore our workshops, speaker series, ThinkTank sessions, and networking opportunities.
                </p>
                <Link 
                  to="/programs"
                  className="inline-block bg-wes-cardinal hover:bg-wes-cardinal/90 text-white font-mont font-medium py-2 px-6 rounded-lg transition-colors"
                >
                  View Programs
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-8 text-center">
                <h3 className="text-xl font-mont font-bold text-wes-royal mb-3">Get Involved</h3>
                <p className="font-inter text-wes-black leading-relaxed mb-6">
                  Ready to join? Discover how to become part of our innovative community.
                </p>
                <a 
                  href={siteContent.forms.membershipForm}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-wes-robin hover:bg-wes-robin/90 text-wes-black font-mont font-medium py-2 px-6 rounded-lg transition-colors"
                >
                  Join Us
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}; 