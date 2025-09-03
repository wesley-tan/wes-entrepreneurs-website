import React from 'react';
import { motion } from 'framer-motion';
import { 
  UsersIcon,
  CameraIcon,
  PencilIcon,
  MegaphoneIcon,
  ComputerDesktopIcon,
  BriefcaseIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';
import { siteContent } from '../data/content';

const getTeamIcon = (teamName: string) => {
  const nameLower = teamName.toLowerCase();
  if (nameLower.includes('marketing') || nameLower.includes('social')) return MegaphoneIcon;
  if (nameLower.includes('tech') || nameLower.includes('development')) return ComputerDesktopIcon;
  if (nameLower.includes('content') || nameLower.includes('writing')) return PencilIcon;
  if (nameLower.includes('photo') || nameLower.includes('media')) return CameraIcon;
  if (nameLower.includes('operations') || nameLower.includes('logistics')) return BriefcaseIcon;
  if (nameLower.includes('data') || nameLower.includes('analytics')) return ChartBarIcon;
  return UsersIcon; // default icon
};

export const GetInvolved: React.FC = () => {
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
              Get Involved
            </h2>
            <p className="text-lg font-inter text-wes-black max-w-3xl mx-auto">
              Join one of our teams and help shape the future of entrepreneurship at Wesleyan
            </p>
          </motion.div>

          {/* Team Roles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {siteContent.teams.map((team, index) => {
              const IconComponent = getTeamIcon(team.name);
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-wes-robin rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-wes-black" />
                    </div>
                    <h3 className="text-xl font-mont font-bold text-wes-royal">
                      {team.name}
                    </h3>
                  </div>
                  <p className="font-inter text-wes-black text-sm leading-relaxed">
                    {team.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Simple Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center"
          >
            <p className="font-inter text-wes-black mb-8 text-lg">
              Ready to join our community? Fill out our membership form to get started.
            </p>
            <a
              href={siteContent.forms.membershipForm}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-wes-robin hover:bg-wes-robin/90 text-wes-black font-mont font-medium py-3 px-8 rounded-lg transition-colors"
            >
              Join as Member
            </a>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 text-center"
          >
            <p className="font-inter text-wes-dim mb-2">
              Questions? Reach out to us at
            </p>
            <a
              href={`mailto:${siteContent.contact.email}`}
              className="font-mont font-medium text-wes-royal hover:text-wes-cardinal transition-colors"
            >
              {siteContent.contact.email}
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}; 