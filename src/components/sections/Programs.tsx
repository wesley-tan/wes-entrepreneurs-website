import React from 'react';
import { motion } from 'framer-motion';
import { siteContent } from '../../data/content';

export const Programs: React.FC = () => {
  return (
    <section id="programs" className="py-20 bg-gray-50 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-mont font-bold text-wes-royal mb-6">
            Our Programs
          </h2>
          <p className="text-lg font-inter text-wes-black max-w-3xl mx-auto">
            Discover our flagship programs designed to foster entrepreneurship and innovation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {siteContent.programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-8">
                <h3 className="text-2xl font-mont font-bold text-wes-royal mb-4">
                  {program.title}
                </h3>
                <p className="font-inter text-wes-black leading-relaxed">
                  {program.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Speakers - Simplified */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-3xl font-mont font-bold text-wes-royal text-center mb-12">
            Featured Speakers
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {siteContent.speakers.map((speaker, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center"
              >
                <h4 className="text-lg font-mont font-bold text-wes-royal mb-2">
                  {speaker.name}
                </h4>
                <p className="font-inter text-wes-dim text-sm mb-3">
                  {speaker.title}
                </p>
                <p className="font-inter text-wes-black text-xs">
                  {speaker.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}; 