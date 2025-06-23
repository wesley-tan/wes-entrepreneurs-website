import React from 'react';
import { Image } from './Image';

interface HeroImageProps {
  src: string;
  alt: string;
  overlay?: boolean;
  overlayColor?: string;
  overlayOpacity?: number;
  children?: React.ReactNode;
  className?: string;
  height?: 'screen' | 'half' | 'auto';
  objectPosition?: string;
}

export const HeroImage: React.FC<HeroImageProps> = ({
  src,
  alt,
  overlay = true,
  overlayColor = 'black',
  overlayOpacity = 0.3,
  children,
  className = '',
  height = 'screen',
  objectPosition = 'center'
}) => {
  const heightClasses = {
    screen: 'min-h-screen',
    half: 'h-[50vh]',
    auto: 'h-auto'
  };

  return (
    <div className={`relative overflow-hidden ${heightClasses[height]} ${className}`}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={src}
          alt={alt}
          loading="eager"
          className="w-full h-full"
          objectFit="cover"
          style={{ objectPosition }}
        />
      </div>
      
      {/* Overlay */}
      {overlay && (
        <div 
          className="absolute inset-0"
          style={{
            backgroundColor: overlayColor,
            opacity: overlayOpacity
          }}
        />
      )}
      
      {/* Content */}
      {children && (
        <div className="relative z-10 h-full flex items-center justify-center p-4">
          {children}
        </div>
      )}
    </div>
  );
}; 