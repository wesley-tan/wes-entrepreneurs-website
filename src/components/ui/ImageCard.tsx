import React from 'react';
import { motion } from 'framer-motion';
import { Image } from './Image';

interface ImageCardProps {
  src: string;
  alt: string;
  title: string;
  description?: string;
  className?: string;
  onClick?: () => void;
  href?: string;
  target?: string;
  imageHeight?: string;
  aspectRatio?: string;
}

export const ImageCard: React.FC<ImageCardProps> = ({
  src,
  alt,
  title,
  description,
  className = '',
  onClick,
  href,
  target,
  imageHeight = 'h-48',
  aspectRatio = '16/9'
}) => {
  const CardWrapper = href ? motion.a : motion.div;
  const cardProps = href ? { href, target } : { onClick };

  return (
    <CardWrapper
      {...cardProps}
      className={`group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer ${className}`}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      {/* Image */}
      <div className={`${imageHeight} overflow-hidden`}>
        <Image
          src={src}
          alt={alt}
          className="w-full h-full group-hover:scale-105 transition-transform duration-300"
          style={{ aspectRatio }}
        />
      </div>
      
      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-mont font-bold text-wes-royal mb-3 group-hover:text-wes-cardinal transition-colors">
          {title}
        </h3>
        {description && (
          <p className="text-wes-black font-inter leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </CardWrapper>
  );
}; 