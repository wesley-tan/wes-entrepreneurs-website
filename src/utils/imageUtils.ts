export interface ImageSource {
  src: string;
  width: number;
  density?: number;
}

/**
 * Generate image sources for responsive images
 * @param baseSrc - Base image URL
 * @param sizes - Array of widths to generate
 * @returns Array of ImageSource objects
 */
export const generateImageSizes = (baseSrc: string, sizes: number[]): ImageSource[] => {
  return sizes.map(size => ({
    src: baseSrc.replace(/\.([^.]+)$/, `_${size}w.$1`),
    width: size
  }));
};

/**
 * Get optimal image size based on container width
 * @param containerWidth - Width of the container
 * @returns Optimal image width
 */
export const getOptimalImageSize = (containerWidth: number): number => {
  const sizes = [320, 640, 768, 1024, 1280, 1536, 1920];
  return sizes.find(size => size >= containerWidth * 1.5) || sizes[sizes.length - 1];
};

/**
 * Preload an image
 * @param src - Image source URL
 * @returns Promise that resolves when image is loaded
 */
export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new window.Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

/**
 * Generate srcSet string from image sources
 * @param sources - Array of image sources
 * @returns srcSet string
 */
export const generateSrcSet = (sources: ImageSource[]): string => {
  return sources
    .map(source => `${source.src} ${source.width}w`)
    .join(', ');
};

/**
 * Generate sizes attribute for responsive images
 * @param breakpoints - Object with breakpoint sizes
 * @returns sizes string
 */
export const generateSizes = (breakpoints: Record<string, string>): string => {
  const entries = Object.entries(breakpoints);
  return entries
    .map(([breakpoint, size], index) => {
      if (index === entries.length - 1) return size;
      return `(max-width: ${breakpoint}) ${size}`;
    })
    .join(', ');
};

/**
 * Get placeholder image URL with specified dimensions and color
 * @param width - Image width
 * @param height - Image height
 * @param bgColor - Background color (hex without #)
 * @param textColor - Text color (hex without #)
 * @param text - Text to display
 * @returns Placeholder image URL
 */
export const getPlaceholderImage = (
  width: number, 
  height: number, 
  bgColor: string = 'f3f4f6', 
  textColor: string = '9ca3af',
  text?: string
): string => {
  const displayText = text || `${width}×${height}`;
  return `https://via.placeholder.com/${width}x${height}/${bgColor}/${textColor}?text=${encodeURIComponent(displayText)}`;
};

/**
 * Convert image file to base64 data URL
 * @param file - Image file
 * @returns Promise that resolves to base64 data URL
 */
export const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

/**
 * Get image dimensions from URL
 * @param src - Image source URL
 * @returns Promise that resolves to image dimensions
 */
export const getImageDimensions = (src: string): Promise<{ width: number; height: number }> => {
  return new Promise((resolve, reject) => {
    const img = new window.Image();
    img.onload = () => resolve({ width: img.width, height: img.height });
    img.onerror = reject;
    img.src = src;
  });
};

/**
 * Common responsive image breakpoints for Wesleyan Entrepreneurs website
 */
export const commonBreakpoints = {
  mobile: '(max-width: 640px) 100vw',
  tablet: '(max-width: 1024px) 50vw', 
  desktop: '33vw'
};

/**
 * Common image sizes for different use cases
 */
export const imageSizes = {
  thumbnail: [150, 300],
  card: [300, 600, 900],
  hero: [640, 1024, 1280, 1536, 1920],
  avatar: [64, 128, 256],
  gallery: [400, 800, 1200]
}; 