import React from 'react';
import { motion } from 'framer-motion';
import { 
  AcademicCapIcon,
  LightBulbIcon,
  UsersIcon,
  TrophyIcon,
  MegaphoneIcon,
  StarIcon
} from '@heroicons/react/24/outline';
import { siteContent } from '../data/content';

const getProgramIcon = (title: string) => {
  const titleLower = title.toLowerCase();
  if (titleLower.includes('thinktank') || titleLower.includes('think tank')) return LightBulbIcon;
  if (titleLower.includes('workshop') || titleLower.includes('training')) return AcademicCapIcon;
  if (titleLower.includes('networking') || titleLower.includes('mixer')) return UsersIcon;
  if (titleLower.includes('pitch') || titleLower.includes('competition')) return TrophyIcon;
  if (titleLower.includes('speaker') || titleLower.includes('talk')) return MegaphoneIcon;
  return StarIcon; // default icon
};

export const Programs: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-20 bg-gray-50">
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
            {siteContent.programs.map((program, index) => {
              const IconComponent = getProgramIcon(program.title);
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-wes-royal rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-mont font-bold text-wes-royal">
                        {program.title}
                      </h3>
                    </div>
                    <p className="font-inter text-wes-black leading-relaxed">
                      {program.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Featured Speakers - Simplified */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-mont font-bold text-wes-royal text-center mb-8">
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
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-wes-cardinal rounded-full flex items-center justify-center">
                      <MegaphoneIcon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h4 className="text-lg font-mont font-bold text-wes-royal mb-2">
                    {speaker.name}
                  </h4>
                  <p className="font-inter text-wes-dim text-sm mb-3">
                    {speaker.title}
                  </p>
                  <p className="font-inter text-wes-black text-sm">
                    {speaker.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}; 