import React from 'react';
import { motion } from 'framer-motion';
import { EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { siteContent } from '../../data/content';



export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-mont font-bold text-wes-royal mb-6">
            Connect With Us
          </h2>
          <p className="text-lg font-inter text-wes-black max-w-3xl mx-auto">
            Get in touch and join our entrepreneurial community at Wesleyan University
          </p>
        </motion.div>

        {/* Contact Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* Email Card */}
          <motion.a
            href={`mailto:${siteContent.contact.email}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow p-8 flex items-center gap-6 group"
            aria-label="Email Wesleyan Entrepreneurs"
          >
            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <EnvelopeIcon className="w-6 h-6 text-white" />
            </div>
            <div className="min-w-0 flex-1">
                             <h3 className="text-lg font-mont font-bold text-wes-royal mb-2">Email</h3>
              <p className="font-inter text-blue-600 group-hover:text-blue-700 transition-colors break-words">
                {siteContent.contact.email}
              </p>
            </div>
          </motion.a>

          {/* Instagram Card */}
          <motion.a
            href="https://www.instagram.com/wesentrepreneurs/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow p-8 flex items-center gap-6 group"
            aria-label="Follow Wesleyan Entrepreneurs on Instagram"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-400 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </div>
            <div className="min-w-0 flex-1">
                             <h3 className="text-lg font-mont font-bold text-wes-royal mb-2">Instagram</h3>
              <p className="font-inter text-[#E1306C] group-hover:text-pink-600 transition-colors break-words">
                @wesentrepreneurs
              </p>
            </div>
          </motion.a>

          {/* LinkedIn Card */}
          <motion.a
            href="https://linkedin.com/company/wesentrepreneurs"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow p-8 flex items-center gap-6 group"
            aria-label="Connect with Wesleyan Entrepreneurs on LinkedIn"
          >
            <div className="w-12 h-12 bg-[#0A66C2] rounded-xl flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </div>
            <div className="min-w-0 flex-1">
                             <h3 className="text-lg font-mont font-bold text-wes-royal mb-2">LinkedIn</h3>
              <p className="font-inter text-[#0A66C2] group-hover:text-blue-700 transition-colors break-words">
                Wesleyan Entrepreneurs
              </p>
            </div>
          </motion.a>

          {/* Location Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow p-8 flex items-center gap-6"
          >
            <div className="w-12 h-12 bg-gray-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <MapPinIcon className="w-6 h-6 text-white" />
            </div>
            <div className="min-w-0 flex-1">
                             <h3 className="text-lg font-mont font-bold text-wes-royal mb-2">Location</h3>
              <p className="font-inter text-wes-black break-words">
                Wesleyan University, Middletown, CT
              </p>
            </div>
          </motion.div>
        </div>

        {/* CTA Panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-wes-royal rounded-xl shadow-xl p-12 text-center max-w-4xl mx-auto"
        >
                     <h3 className="text-2xl md:text-3xl font-mont font-bold text-white mb-6">
             Join Our Community
           </h3>
           <p className="text-lg font-inter text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
            Fill out our interest form to get involved with Wesleyan Entrepreneurs and start your entrepreneurial journey with us.
          </p>
          <motion.a
            href={siteContent.forms.interestForm}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-wes-robin hover:bg-white text-wes-black font-mont font-bold px-8 py-4 rounded-xl transition-all duration-300 text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Fill out interest form to join Wesleyan Entrepreneurs"
          >
            <span>Interest Form</span>
            <svg 
              className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

 