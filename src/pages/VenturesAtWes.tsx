import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  LinkIcon,
  PhoneIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';
import fetchVentures from '../utils/venturesDbPull';

// Type definition matching your Supabase table structure
interface Venture {
  id: string; // uuid
  created_at: string; // timestamptz
  venture_name: string;
  venture_desc: string | null;
  category: string | null;
  founders: string[]; // text array
  email: string | null;
  phone: string | null;
  links: string[] | null; // text array
}


const getLinkLabel = (url: string) => {
  try {
    const domain = new URL(url).hostname.toLowerCase();
    
    if (domain.includes('instagram')) return 'Instagram';
    if (domain.includes('tiktok')) return 'TikTok';
    if (domain.includes('linkedin')) return 'LinkedIn';
    if (domain.includes('twitter') || domain.includes('x.com')) return 'Twitter/X';
    if (domain.includes('facebook')) return 'Facebook';
    if (domain.includes('youtube')) return 'YouTube';
    if (domain.includes('github')) return 'GitHub';
    
    return 'Website';
  } catch {
    return 'Website';
  }
};

export const VenturesAtWes: React.FC = () => {
  const [ventures, setVentures] = useState<Venture[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadVentures = async () => {
      try {
        setLoading(true);
        const data = await fetchVentures();
        setVentures(data || []);
      } catch (err) {
        setError('Failed to load ventures');
        console.error('Error loading ventures:', err);
      } finally {
        setLoading(false);
      }
    };

    loadVentures();
  }, []);
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-mont font-bold text-wes-royal mb-6">
              Ventures @ Wes
            </h2>
            <p className="text-lg font-inter text-wes-black max-w-3xl mx-auto">
              Discover ventures and startups founded by entrepreneurs at Wesleyan
            </p>
          </motion.div>

          {/* Loading State */}
          {loading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <div className="inline-block w-8 h-8 border-4 border-gray-200 border-t-transparent rounded-full animate-spin"></div>
            </motion.div>
          )}

          {/* Error State */}
          {error && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <div className="text-lg font-inter text-wes-cardinal">{error}</div>
            </motion.div>
          )}

          {/* Table */}
          {!loading && !error && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="overflow-x-auto">
                <table className="w-full">
                  {/* Table Header */}
                  <thead className="bg-wes-royal">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-mont font-semibold text-white uppercase tracking-wider">
                        Venture
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-mont font-semibold text-white uppercase tracking-wider">
                        Founder(s)
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-mont font-semibold text-white uppercase tracking-wider">
                        Category
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-mont font-semibold text-white uppercase tracking-wider">
                        Contact
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-mont font-semibold text-white uppercase tracking-wider">
                        Links
                      </th>
                    </tr>
                  </thead>
                
                  {/* Table Body */}
                  <tbody className="divide-y divide-gray-200">
                    {ventures.map((venture, index) => (
                      <motion.tr
                        key={venture.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="hover:bg-gray-50 transition-colors"
                      >
                        {/* Venture Name & Description */}
                        <td className="px-6 py-4">
                          <div className="flex items-start space-x-3">
                            <div>
                              <div className="text-sm font-mont font-semibold text-wes-black">
                                {venture.venture_name}
                              </div>
                              {venture.venture_desc && (
                                <div className="text-sm font-inter text-wes-dim mt-1">
                                  {venture.venture_desc}
                                </div>
                              )}
                            </div>
                          </div>
                        </td>
                        
                        {/* Founders */}
                        <td className="px-6 py-4">
                          <div className="text-sm font-inter font-medium text-wes-black">
                            {venture.founders.join(', ')}
                          </div>
                        </td>
                        
                        {/* Category */}
                        <td className="px-6 py-4">
                          {venture.category ? (
                            <span className="text-sm font-inter text-wes-black">
                              {venture.category}
                            </span>
                          ) : (
                            <span className="text-sm font-inter text-wes-dim italic">
                              No category
                            </span>
                          )}
                        </td>
                        
                        {/* Contact */}
                        <td className="px-6 py-4">
                          <div className="space-y-1">
                            {venture.email && (
                              <div className="flex items-center">
                                <EnvelopeIcon className="w-4 h-4 text-wes-dim" style={{ marginRight: '5px' }} />
                                <span className="text-sm font-inter text-wes-royal">
                                  {venture.email}
                                </span>
                              </div>
                            )}
                            {venture.phone && (
                              <div className="flex items-center">
                                <PhoneIcon className="w-4 h-4 text-wes-dim" style={{ marginRight: '5px' }} />
                                <span className="text-sm font-inter text-wes-royal">
                                  {venture.phone}
                                </span>
                              </div>
                            )}
                            {!venture.email && !venture.phone && (
                              <span className="text-sm font-inter text-wes-dim italic">
                                No contact info
                              </span>
                            )}
                          </div>
                        </td>
                        
                        {/* Links */}
                        <td className="px-6 py-4">
                          <div className="flex flex-col space-y-1">
                            {venture.links && venture.links.length > 0 ? (
                              venture.links.map((link, linkIndex) => (
                                <a
                                  key={linkIndex}
                                  href={link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center text-wes-royal hover:text-wes-robin transition-colors"
                                >
                                  <LinkIcon className="w-4 h-4 text-wes-dim" style={{ marginRight: '5px' }} />
                                  <span className="text-sm font-inter">{getLinkLabel(link)}</span>
                                </a>
                              ))
                            ) : (
                              <span className="text-sm font-inter text-wes-dim italic">
                                No links
                              </span>
                            )}
                          </div>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-12"
          >
            <p className="text-lg font-inter text-wes-black mb-6">
              Have a venture you'd like to showcase?
            </p>
            <a
              href="/contact"
              className="inline-block bg-wes-robin hover:bg-wes-robin/90 text-wes-black font-mont font-medium py-3 px-8 rounded-lg transition-colors"
            >
              Submit Your Venture
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};