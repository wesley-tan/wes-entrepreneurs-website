# Image Components Usage Guide

## Overview

I've created a comprehensive image management system for the Wesleyan Entrepreneurs website. Here's how to use each component to easily add images and pictures.

## Available Components

### 1. **Base Image Component** 🖼️
The foundation component with smart loading, error handling, and optimization.

```tsx
import { Image } from '../components/ui';

// Basic usage
<Image 
  src="/path/to/image.jpg" 
  alt="Description of image" 
/>

// Advanced usage with responsive images
<Image 
  src="/hero-image.jpg"
  alt="Event photo"
  width={800}
  height={600}
  loading="eager"
  className="rounded-lg shadow-md"
  srcSet="/hero-image-600.jpg 600w, /hero-image-1200.jpg 1200w"
  sizes="(max-width: 768px) 100vw, 50vw"
/>
```

### 2. **Avatar Component** 👤
Perfect for team member photos with automatic fallback initials.

```tsx
import { Avatar } from '../components/ui';

// With image
<Avatar 
  src="/team/john-doe.jpg"
  alt="John Doe"
  size="lg"
/>

// Without image (shows initials)
<Avatar 
  alt="Jane Smith"
  size="md"
  fallback="JS"
/>

// Custom styling
<Avatar 
  src="/speakers/min-santandrea.jpg"
  alt="Min Santandrea"
  size="xl"
  className="border-4 border-wes-robin"
/>
```

### 3. **Gallery Component** 🖼️✨
Interactive photo gallery with lightbox functionality.

```tsx
import { Gallery, type GalleryImage } from '../components/ui';

const eventPhotos: GalleryImage[] = [
  {
    src: "/events/mixer-2024-1.jpg",
    alt: "Fall Business Mixer 2024",
    caption: "Students networking at our fall mixer"
  },
  {
    src: "/events/speaker-event.jpg", 
    alt: "Jason Freinberg Speaking",
    caption: "Jason Freinberg '99 sharing insights on corporate innovation"
  },
  {
    src: "/events/workshop.jpg",
    alt: "Pitch Workshop",
    caption: "Students practicing their pitches"
  }
];

// 3-column gallery with lightbox
<Gallery 
  images={eventPhotos}
  columns={3}
  gap={6}
  className="my-8"
/>

// 2-column gallery without lightbox
<Gallery 
  images={eventPhotos}
  columns={2}
  enableLightbox={false}
/>
```

### 4. **HeroImage Component** 🌟
Full-screen background images with overlay and content.

```tsx
import { HeroImage } from '../components/ui';

// Replace current hero background
<HeroImage 
  src="/background.png"
  alt="Wesleyan campus"
  overlay={true}
  overlayOpacity={0.2}
  height="screen"
>
  <div className="text-center text-white">
    <img src="/logo.png" alt="Wesleyan Entrepreneurs" className="h-32 mx-auto mb-6" />
    <h1 className="text-6xl font-bold mb-4">Wesleyan Entrepreneurs</h1>
    <p className="text-xl">Where Innovation Meets Opportunity</p>
  </div>
</HeroImage>

// Half-height hero for other pages
<HeroImage 
  src="/events/event-hero.jpg"
  alt="Event space"
  height="half"
  overlayColor="wes-royal"
  overlayOpacity={0.4}
>
  <h1 className="text-4xl text-white font-bold">Our Events</h1>
</HeroImage>
```

### 5. **ImageCard Component** 🃏
Content cards with images, perfect for programs/events/team members.

```tsx
import { ImageCard } from '../components/ui';

// Program cards
<ImageCard 
  src="/programs/wescollab.jpg"
  alt="WesCollab program"
  title="WesCollab"
  description="Our flagship collaborative program connecting student entrepreneurs with mentors and resources."
  href="/programs/wescollab"
/>

// Event cards
<ImageCard 
  src="/events/business-mixer.jpg"
  alt="Business Mixer"
  title="Fall Business Mixer"
  description="Networking event connecting student entrepreneurs with local business leaders."
  onClick={() => handleEventClick()}
  imageHeight="h-64"
/>

// Team member cards
<ImageCard 
  src="/team/president.jpg"
  alt="Club President"
  title="Sarah Johnson '25"
  description="President & Founder of EcoTech Solutions"
  className="max-w-sm"
/>
```

## Practical Implementation Examples

### Adding Images to Existing Sections

#### 1. **Update Programs Section with Images**
```tsx
// src/components/sections/Programs.tsx
import { ImageCard } from '../ui';

export const Programs: React.FC = () => {
  return (
    <section id="programs" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16">Our Programs</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <ImageCard 
            src="/programs/wescollab.jpg"
            alt="WesCollab Program"
            title="WesCollab"
            description="Connecting student entrepreneurs with mentors and resources"
          />
          <ImageCard 
            src="/programs/speaker-series.jpg"
            alt="Speaker Series"
            title="Speaker Series"
            description="Industry leaders sharing insights on entrepreneurship"
          />
          <ImageCard 
            src="/programs/shark-tank.jpg"
            alt="Shark Tank Event"
            title="Shark Tank"
            description="Campus-focused solutions and implementation"
          />
        </div>
      </div>
    </section>
  );
};
```

#### 2. **Add Team Member Section with Avatars**
```tsx
// src/components/sections/Team.tsx
import { Avatar } from '../ui';

const teamMembers = [
  {
    name: "Sarah Johnson '25",
    role: "President",
    image: "/team/sarah-johnson.jpg",
    bio: "Computer Science major, founder of EcoTech Solutions"
  },
  {
    name: "Michael Chen '26", 
    role: "Vice President",
    image: "/team/michael-chen.jpg",
    bio: "Economics major, passionate about fintech innovation"
  }
];

export const Team: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Our Team</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <Avatar 
                src={member.image}
                alt={member.name}
                size="2xl"
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-wes-royal">{member.name}</h3>
              <p className="text-wes-cardinal font-medium">{member.role}</p>
              <p className="text-gray-600 mt-2">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
```

#### 3. **Add Event Photo Gallery**
```tsx
// src/components/sections/EventGallery.tsx
import { Gallery, type GalleryImage } from '../ui';

const eventPhotos: GalleryImage[] = [
  {
    src: "/events/fall-mixer-2024.jpg",
    alt: "Fall Business Mixer 2024",
    caption: "25+ students networking with alumni entrepreneurs"
  },
  {
    src: "/events/jason-freinberg-talk.jpg",
    alt: "Jason Freinberg Speaker Event", 
    caption: "Jason Freinberg '99 discussing corporate innovation"
  },
  {
    src: "/events/pitch-workshop.jpg",
    alt: "Startup Pitch Workshop",
    caption: "Students practicing their elevator pitches"
  },
  {
    src: "/events/thinktank-ai.jpg",
    alt: "ThinkTank AI Discussion",
    caption: "Deep dive into AI applications in business"
  },
  {
    src: "/events/steve-mccarthy-vc.jpg",
    alt: "Steve McCarthy VC Talk",
    caption: "Learning about venture capital and fundraising"
  },
  {
    src: "/events/min-santandrea-leadership.jpg",
    alt: "Min Santandrea Leadership Talk",
    caption: "Leadership strategies from a successful entrepreneur"
  }
];

export const EventGallery: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Event Highlights</h2>
        <p className="text-lg text-center text-gray-600 mb-12">
          Take a look at our recent events and activities
        </p>
        
        <Gallery 
          images={eventPhotos}
          columns={3}
          gap={6}
          className="mb-8"
        />
      </div>
    </section>
  );
};
```

## Image Organization Best Practices

### Recommended Folder Structure
```
public/
├── background.png (existing)
├── logo.png (existing)
├── events/
│   ├── fall-mixer-2024.jpg
│   ├── speaker-events/
│   │   ├── jason-freinberg-talk.jpg
│   │   ├── steve-mccarthy-vc.jpg
│   │   └── min-santandrea-leadership.jpg
│   └── workshops/
│       ├── pitch-workshop.jpg
│       └── thinktank-ai.jpg
├── programs/
│   ├── wescollab.jpg
│   ├── speaker-series.jpg
│   └── shark-tank.jpg
├── team/
│   ├── leadership/
│   │   ├── president.jpg
│   │   ├── vp.jpg
│   │   └── treasurer.jpg
│   └── members/
└── speakers/
    ├── min-santandrea.jpg
    ├── steve-mccarthy.jpg
    └── jason-freinberg.jpg
```

### Image Optimization Tips

1. **Use appropriate formats:**
   - `.jpg` for photos with many colors
   - `.png` for logos and graphics with transparency
   - `.webp` for modern browsers (smaller file sizes)

2. **Optimize file sizes:**
   - Hero images: 1920x1080 max, ~200-500KB
   - Card images: 600x400 max, ~100-200KB  
   - Avatars: 256x256 max, ~50-100KB
   - Thumbnails: 300x300 max, ~30-50KB

3. **Use descriptive alt text:**
   ```tsx
   // Good
   <Image alt="Students networking at Fall 2024 Business Mixer" />
   
   // Bad  
   <Image alt="Event photo" />
   ```

## Quick Start Examples

### Add a Simple Event Photo
```tsx
<Image 
  src="/events/latest-event.jpg"
  alt="Students at our latest networking event"
  className="w-full h-64 object-cover rounded-lg shadow-md"
/>
```

### Add Speaker Headshots
```tsx
<div className="flex space-x-4">
  <Avatar src="/speakers/speaker1.jpg" alt="Min Santandrea" size="lg" />
  <Avatar src="/speakers/speaker2.jpg" alt="Steve McCarthy" size="lg" />
  <Avatar src="/speakers/speaker3.jpg" alt="Jason Freinberg" size="lg" />
</div>
```

### Create an Image-Rich About Section
```tsx
<HeroImage 
  src="/about/campus-innovation-hub.jpg"
  alt="Wesleyan Innovation Hub"
  height="half"
>
  <h1 className="text-5xl text-white font-bold">About Us</h1>
</HeroImage>
```

## Performance Features ⚡

- **Lazy Loading**: Images load only when needed
- **Error Handling**: Graceful fallbacks when images fail
- **Loading States**: Smooth loading animations
- **Responsive**: Automatic sizing for different screen sizes
- **Optimized**: Built-in performance best practices

## Accessibility Features ♿

- **Alt Text**: Required for all images
- **Keyboard Navigation**: Full keyboard support for galleries
- **Screen Reader**: Proper ARIA labels and descriptions
- **Focus Management**: Clear focus indicators
- **Color Contrast**: Error states with sufficient contrast

Start adding images to your website immediately with these components! They're designed to be drop-in replaceable and follow all best practices for performance and accessibility. 