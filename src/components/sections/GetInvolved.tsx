import React from 'react';
import { motion } from 'framer-motion';
import { siteContent } from '../../data/content';

export const GetInvolved: React.FC = () => {
  return (
    <section id="get-involved" className="py-20 bg-gray-50 scroll-mt-16">
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
          {siteContent.teams.map((team, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-mont font-bold text-wes-royal mb-3">
                {team.name}
              </h3>
              <p className="font-inter text-wes-black text-sm leading-relaxed">
                {team.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Simple Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <p className="font-inter text-wes-black mb-8 text-lg">
            Ready to join our community? Fill out our interest form to get started.
          </p>
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
  );
}; 