import React from 'react';
import { motion } from 'framer-motion';
import { siteContent } from '../data/content';

const getEventTypeColor = (type: string) => {
  switch (type) {
    case 'mixer':
      return 'bg-wes-cardinal text-white';
    case 'speaker':
      return 'bg-wes-royal text-white';
    case 'workshop':
      return 'bg-wes-robin text-wes-black';
    case 'thinktank':
      return 'bg-wes-dim text-white';
    default:
      return 'bg-wes-dim text-white';
  }
};

export const Events: React.FC = () => {
  return (
    <div className="min-h-screen bg-wes-white">
      <section className="py-20 bg-wes-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-mont font-bold text-wes-royal mb-6">
              Events & Activities
            </h2>
            <p className="text-lg font-inter text-wes-black max-w-3xl mx-auto">
              Join our ThinkTank sessions, speaker events, workshops, and networking mixers
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteContent.recentEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white border border-wes-dim/20 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-mont font-medium text-wes-dim">
                    {event.date}
                  </span>
                  <span className={`text-xs font-mont font-medium px-3 py-1 rounded-full ${getEventTypeColor(event.type)}`}>
                    {event.type.toUpperCase()}
                  </span>
                </div>
                <h3 className="text-xl font-mont font-bold text-wes-royal mb-3">
                  {event.title}
                </h3>
                <p className="font-inter text-wes-black text-sm leading-relaxed">
                  {event.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}; 