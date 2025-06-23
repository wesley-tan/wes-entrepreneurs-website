import React from 'react';
import { motion } from 'framer-motion';
import { siteContent } from '../data/content';

export const Vision: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-mont font-bold text-wes-royal mb-6">
              Our Vision for Entrepreneurship
            </h2>
            <p className="text-lg font-inter text-wes-black max-w-3xl mx-auto leading-relaxed">
              Empowering Wesleyan students to innovate, collaborate, and create sustainable ventures 
              across all disciplines through comprehensive programming and community building.
            </p>
          </motion.div>

          {/* Strategic Initiatives */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {/* Collaboration Events */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-8">
                <h3 className="text-xl font-mont font-bold text-wes-royal mb-3">Collaborative Events</h3>
                <p className="font-inter text-wes-black leading-relaxed mb-6">
                  Building bridges across campus through strategic partnerships and innovative programming.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-wes-robin rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div className="font-inter text-sm">
                      <strong className="text-wes-black">International Student Collaboration:</strong>
                      <span className="text-wes-dim"> Alumni panels and networking events</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-wes-robin rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div className="font-inter text-sm">
                      <strong className="text-wes-black">Cross-Departmental Partnerships:</strong>
                      <span className="text-wes-dim"> Working with IDEAS, COE, Arts departments</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-wes-robin rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div className="font-inter text-sm">
                      <strong className="text-wes-black">Scaled ThinkTank Sessions:</strong>
                      <span className="text-wes-dim"> Collaborative problem-solving workshops</span>
                    </div>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Weekly Workshop Series */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-8">
                <h3 className="text-xl font-mont font-bold text-wes-royal mb-3">Workshop & Speaker Series</h3>
                <p className="font-inter text-wes-black leading-relaxed mb-6">
                  Comprehensive skill-building curriculum designed to develop confident, capable entrepreneurs.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-wes-cardinal rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div className="font-inter text-sm">
                      <strong className="text-wes-black">Confidence Building:</strong>
                      <span className="text-wes-dim"> Improv and debate workshops</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-wes-cardinal rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div className="font-inter text-sm">
                      <strong className="text-wes-black">Data Storytelling:</strong>
                      <span className="text-wes-dim"> Compelling narratives and data visualization</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-wes-cardinal rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div className="font-inter text-sm">
                      <strong className="text-wes-black">Member-Led Sessions:</strong>
                      <span className="text-wes-dim"> Peer-to-peer learning and knowledge sharing</span>
                    </div>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Community Building */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-8">
                <h3 className="text-xl font-mont font-bold text-wes-royal mb-3">Community & Alumni Relations</h3>
                <p className="font-inter text-wes-black leading-relaxed mb-6">
                  Creating lasting connections that support entrepreneurial growth beyond graduation.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-wes-dim rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div className="font-inter text-sm">
                      <strong className="text-wes-black">Connection Database:</strong>
                      <span className="text-wes-dim"> Alumni, staff, students, and faculty networks</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-wes-dim rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div className="font-inter text-sm">
                      <strong className="text-wes-black">Digital Presence:</strong>
                      <span className="text-wes-dim"> Amplifying student ventures and achievements</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-wes-dim rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div className="font-inter text-sm">
                      <strong className="text-wes-black">Fundraising Support:</strong>
                      <span className="text-wes-dim"> Connecting with funding and investor networks</span>
                    </div>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Programming Calendar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-mont font-bold text-wes-royal text-center mb-8">
              Programming Calendar
            </h3>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center"
              >
                <div className="text-wes-royal font-mont font-bold text-lg mb-2">Early Semester</div>
                <h4 className="text-lg font-mont font-bold text-wes-royal mb-2">Onboarding & Social Events</h4>
                <p className="font-inter text-wes-black text-sm">
                  Welcome freshmen and new members with interactive sessions to discover interests and shape our programming.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center"
              >
                <div className="text-wes-cardinal font-mont font-bold text-lg mb-2">Mid-Semester</div>
                <h4 className="text-lg font-mont font-bold text-wes-royal mb-2">Developer Connect</h4>
                <p className="font-inter text-wes-black text-sm">
                  Bridge the gap between technical and non-technical founders by connecting developers with innovative ideas.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center"
              >
                <div className="text-wes-robin font-mont font-bold text-lg mb-2">Throughout Semester</div>
                <h4 className="text-lg font-mont font-bold text-wes-royal mb-2">Industry-Specific Panels</h4>
                <p className="font-inter text-wes-black text-sm">
                  Department collaborations featuring career orientations and entrepreneurship opportunities in various fields.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center"
              >
                <div className="text-wes-royal font-mont font-bold text-lg mb-2">Fall Break</div>
                <h4 className="text-lg font-mont font-bold text-wes-royal mb-2">Field Trips & Networking</h4>
                <p className="font-inter text-wes-black text-sm">
                  Educational trips to startup ecosystems in New York and Boston, plus homecoming alumni mixer events.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center"
              >
                <div className="text-wes-cardinal font-mont font-bold text-lg mb-2">Late Semester</div>
                <h4 className="text-lg font-mont font-bold text-wes-royal mb-2">Venture Funding Panels</h4>
                <p className="font-inter text-wes-black text-sm">
                  Sessions focused on applying for NVA, Davis awards, and other funding opportunities with ThinkTank integration.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center"
              >
                <div className="text-wes-dim font-mont font-bold text-lg mb-2">Year-Round</div>
                <h4 className="text-lg font-mont font-bold text-wes-royal mb-2">Ongoing Initiatives</h4>
                <p className="font-inter text-wes-black text-sm">
                  Weekly workshops, ThinkTank sessions, and collaborative events with various campus departments.
                </p>
              </motion.div>
            </div>

            {/* Call to Action */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center"
            >
              <p className="font-inter text-wes-black mb-6 text-lg">
                Ready to be part of shaping the future of entrepreneurship at Wesleyan?
              </p>
              <a
                href={siteContent.forms.membershipForm}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-wes-royal hover:bg-wes-royal/90 text-white font-mont font-medium py-3 px-8 rounded-lg transition-colors"
              >
                Join Our Vision
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}; 