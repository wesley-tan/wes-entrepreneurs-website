import React from 'react';
import { motion } from 'framer-motion';
import { siteContent } from '../data/content';
import { Image } from '../components/ui';

export const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-wes-white">
      <section className="py-32 bg-wes-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-mont font-bold text-wes-royal mb-6">
              {siteContent.about.title}
            </h2>
            <p className="text-lg font-inter text-wes-black max-w-3xl mx-auto leading-relaxed">
              {siteContent.about.mission}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16">
            {/* What We Do */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-12 rounded-2xl shadow-xl border border-wes-dim/10 hover:shadow-2xl transition-shadow"
            >
              {/* Image for What We Do */}
              <div className="mb-8 -mt-6 -mx-6">
                <Image
                  src="/about/what-we-do.jpg"
                  alt="Students presenting business ideas"
                  className="w-full h-48 rounded-t-2xl"
                  objectFit="cover"
                />
              </div>
              
              <h3 className="text-2xl font-mont font-bold text-wes-royal mb-4">
                What We Do
              </h3>
              <p className="font-inter text-wes-black leading-relaxed">
                {siteContent.about.whatWeDo}
              </p>
            </motion.div>

            {/* Member Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-12 rounded-2xl shadow-xl border border-wes-dim/10 hover:shadow-2xl transition-shadow"
            >
              {/* Image for Member Benefits */}
              <div className="mb-8 -mt-6 -mx-6">
                <Image
                  src="/about/member-benefits.jpg"
                  alt="Students networking and learning together"
                  className="w-full h-48 rounded-t-2xl"
                  objectFit="cover"
                />
              </div>
              
              <h3 className="text-2xl font-mont font-bold text-wes-royal mb-4">
                Member Benefits
              </h3>
              <p className="font-inter text-wes-black leading-relaxed">
                {siteContent.about.memberBenefits}
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}; 