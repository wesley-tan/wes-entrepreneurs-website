import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Image } from './Image';

export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
  aspectRatio?: string;
}

interface GalleryProps {
  images: GalleryImage[];
  columns?: 2 | 3 | 4;
  gap?: number;
  className?: string;
  enableLightbox?: boolean;
}

interface LightboxProps {
  image: GalleryImage;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
  hasPrev?: boolean;
  hasNext?: boolean;
}

const Lightbox: React.FC<LightboxProps> = ({
  image,
  onClose,
  onNext,
  onPrev,
  hasPrev,
  hasNext
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="relative max-w-4xl max-h-full" onClick={(e) => e.stopPropagation()}>
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
          aria-label="Close lightbox"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Previous button */}
        {hasPrev && (
          <button
            onClick={onPrev}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
            aria-label="Previous image"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        {/* Next button */}
        {hasNext && (
          <button
            onClick={onNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
            aria-label="Next image"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}

        {/* Image */}
        <div className="flex flex-col items-center">
          <img
            src={image.src}
            alt={image.alt}
            className="max-w-full max-h-[80vh] object-contain"
          />
          {image.caption && (
            <p className="text-white text-center mt-4 px-4">
              {image.caption}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export const Gallery: React.FC<GalleryProps> = ({
  images,
  columns = 3,
  gap = 4,
  className = '',
  enableLightbox = true
}) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const columnClasses = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4'
  };

  const gapClasses = {
    2: 'gap-2',
    4: 'gap-4',
    6: 'gap-6',
    8: 'gap-8'
  }[gap] || 'gap-4';

  const handleImageClick = (index: number) => {
    if (enableLightbox) {
      setSelectedImage(index);
    }
  };

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const handlePrev = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + images.length) % images.length);
    }
  };

  return (
    <>
      <div className={`grid grid-cols-1 ${columnClasses[columns]} ${gapClasses} ${className}`}>
        {images.map((image, index) => (
          <motion.div
            key={index}
            className={`group ${enableLightbox ? 'cursor-pointer' : ''}`}
            onClick={() => handleImageClick(index)}
            whileHover={{ scale: enableLightbox ? 1.02 : 1 }}
            transition={{ duration: 0.2 }}
          >
            <div className="relative overflow-hidden rounded-lg shadow-md group-hover:shadow-lg transition-shadow">
              <Image
                src={image.src}
                alt={image.alt}
                className="w-full h-auto"
                style={{ aspectRatio: image.aspectRatio || '1' }}
              />
              {enableLightbox && (
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <svg 
                    className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              )}
            </div>
            {image.caption && (
              <p className="mt-2 text-sm text-wes-dim text-center">
                {image.caption}
              </p>
            )}
          </motion.div>
        ))}
      </div>

      {/* Lightbox modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <Lightbox
            image={images[selectedImage]}
            onClose={() => setSelectedImage(null)}
            onNext={handleNext}
            onPrev={handlePrev}
            hasNext={selectedImage < images.length - 1}
            hasPrev={selectedImage > 0}
          />
        )}
      </AnimatePresence>
    </>
  );
}; 