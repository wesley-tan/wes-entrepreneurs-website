# Implementation Plan: Wesleyan Entrepreneurs Website

**Project Timeline:** 6 weeks  
**Tech Stack:** React 18 + TypeScript, Tailwind CSS, Vite, Netlify  
**Reference:** PRD in `docs/PLAN.md`

---

## Phase 1: Project Foundation (Week 1)

### Step 1.1: Project Setup & Environment
```bash
# Initialize project
npm create vite@latest wes-entrepreneurs-website -- --template react-ts
cd wes-entrepreneurs-website
npm install

# Install dependencies
npm install @types/react @types/react-dom
npm install -D tailwindcss postcss autoprefixer
npm install framer-motion
npm install react-router-dom
npm install @heroicons/react
npm install react-hook-form
npm install @headlessui/react

# Initialize Tailwind
npx tailwindcss init -p
```

### Step 1.2: Brand Implementation - Tailwind Configuration
**File:** `tailwind.config.js`
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors (from brand guidelines)
        'wes-royal': '#0A2463',
        'wes-robin': '#12D7D7', 
        'wes-cardinal': '#D72121',
        'wes-dim': '#686B6B',
        
        // Secondary Colors
        'wes-black': '#1D1D1F',
        'wes-white': '#F5F5F7',
      },
      fontFamily: {
        'mont': ['Montserrat', 'sans-serif'],
        'georgia': ['Georgia', 'serif'],
      },
      backgroundImage: {
        'wes-gradient': 'linear-gradient(135deg, #0A2463 0%, #12D7D7 25%, #686B6B 75%, #F5F5F7 100%)',
      }
    },
  },
  plugins: [],
}
```

### Step 1.3: Typography Setup
**File:** `src/index.css`
```css
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    font-family: Georgia, serif;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
  }
}

@layer components {
  .btn-primary {
    @apply bg-wes-gradient text-white font-mont font-medium px-6 py-3 rounded-lg hover:opacity-90 transition-opacity;
  }
  
  .btn-secondary {
    @apply border-2 border-wes-royal text-wes-royal font-mont font-medium px-6 py-3 rounded-lg hover:bg-wes-royal hover:text-white transition-colors;
  }
}
```

### Step 1.4: Project Structure Setup
```
src/
├── components/
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── Input.tsx
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Layout.tsx
│   └── sections/
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Programs.tsx
│       ├── Events.tsx
│       ├── GetInvolved.tsx
│       └── Contact.tsx
├── pages/
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Events.tsx
│   ├── Programs.tsx
│   ├── GetInvolved.tsx
│   └── Contact.tsx
├── assets/
│   ├── images/
│   └── logos/
├── data/
│   ├── events.ts
│   ├── programs.ts
│   └── team.ts
└── utils/
    └── constants.ts
```

---

## Phase 2: Core Components (Week 2)

### Step 2.1: UI Components Library
**File:** `src/components/ui/Button.tsx`
```typescript
import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  className = ''
}) => {
  const baseClasses = 'font-mont font-medium rounded-lg transition-all duration-200';
  const variants = {
    primary: 'bg-wes-gradient text-white hover:opacity-90',
    secondary: 'border-2 border-wes-royal text-wes-royal hover:bg-wes-royal hover:text-white'
  };
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};
```

### Step 2.2: Layout Components
**File:** `src/components/layout/Header.tsx`
```typescript
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Events', href: '/events' },
  { name: 'Programs', href: '/programs' },
  { name: 'Get Involved', href: '/get-involved' },
  { name: 'Contact', href: '/contact' }
];

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-wes-white/95 backdrop-blur-sm z-50 border-b border-wes-dim/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-xl font-mont font-bold text-wes-royal"
            >
              WESLEYAN ENTREPRENEURS
            </motion.div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-wes-black hover:text-wes-royal transition-colors font-mont font-medium"
                whileHover={{ y: -2 }}
              >
                {item.name}
              </motion.a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-wes-black hover:text-wes-royal"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-wes-black hover:text-wes-royal font-mont font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};
```

### Step 2.3: Data Structure Setup
**File:** `src/data/content.ts`
```typescript
export const siteContent = {
  hero: {
    title: "Wesleyan Entrepreneurs",
    subtitle: "Wesleyan's premier entrepreneurship club",
    description: "We aim to be Wesleyan's premier entrepreneurship club where anyone can start projects, support ongoing ventures, hone entrepreneurial skills, and connect to the larger startup community.",
    cta: "Get Involved"
  },
  
  about: {
    title: "Who are we?",
    mission: "We aim to be Wesleyan's premier entrepreneurship club.",
    values: [
      "Start projects",
      "Support ongoing ventures", 
      "Hone entrepreneurial skills",
      "Connect to the larger startup community"
    ],
    memberBenefits: [
      "Build their network",
      "Build a viable and valuable skill-set", 
      "Start cool things",
      "Have fun!"
    ]
  },

  programs: [
    {
      title: "WesCollab",
      description: "WesCollab pairs students interested in entrepreneurship and social impact with Wesleyan start-ups for hands-on projects. Participants will learn the ins and outs of managing a start-up, hone their skills, and diversify their conceptions of how to make an impact.",
      image: "/images/wescollab.jpg"
    },
    {
      title: "Concussion Box", 
      description: "Dedicated to fighting the isolation of concussion.",
      image: "/images/concussion-box.jpg"
    },
    {
      title: "OurCampus",
      description: "Wesleyan's one and only social media app made for and by students.",
      image: "/images/ourcampus.jpg"
    }
  ],

  teams: [
    {
      name: "Outreach",
      description: "Establish partnerships. Alumni engagement."
    },
    {
      name: "Events & Engagement", 
      description: "Organize events. Engage speakers. Ensure member engagement."
    },
    {
      name: "WesCollab",
      description: "Work with Wesleyan startups. Manage projects."
    },
    {
      name: "Marketing",
      description: "Increase engagement and awareness. Graphic design. Copywriting."
    },
    {
      name: "Special Projects",
      description: "Partnerships. Workshop and curriculum development."
    }
  ],

  speakers: [
    {
      name: "Min Santandrea '97",
      title: "Fashion designer & founder of SantM shoes",
      year: "1997"
    },
    {
      name: "Steve McCarthy '75", 
      title: "Entrepreneur & Business Leader",
      year: "1975"
    },
    {
      name: "Jason Freinberg '99",
      title: "Creative Brand Founder",
      year: "1999"
    }
  ],

  contact: {
    email: "admin@wesentrepreneurs.com",
    instagram: "@wesentrepreneurs", 
    linkedin: "Wesleyan Entrepreneurs"
  }
};
```

---

## Phase 3: Page Development (Week 3)

### Step 3.1: Hero Section Component
**File:** `src/components/sections/Hero.tsx`
```typescript
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { siteContent } from '../../data/content';

export const Hero: React.FC = () => {
  return (
    <section className="min-h-screen bg-wes-gradient flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-mont font-bold mb-6"
        >
          {siteContent.hero.title}
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl font-georgia mb-4"
        >
          {siteContent.hero.subtitle}
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg font-georgia mb-8 max-w-2xl mx-auto"
        >
          {siteContent.hero.description}
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button
            variant="secondary"
            size="lg"
            className="bg-white text-wes-royal hover:bg-wes-white/90"
          >
            {siteContent.hero.cta}
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
```

### Step 3.2: About Section Component
**File:** `src/components/sections/About.tsx`
```typescript
import React from 'react';
import { motion } from 'framer-motion';
import { siteContent } from '../../data/content';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-wes-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-mont font-bold text-wes-royal mb-6">
            {siteContent.about.title}
          </h2>
          <p className="text-lg font-georgia text-wes-black max-w-3xl mx-auto">
            {siteContent.about.mission}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* What We Do */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <h3 className="text-2xl font-mont font-bold text-wes-royal mb-6">
              We hope to act as a space where anyone can...
            </h3>
            <ul className="space-y-4">
              {siteContent.about.values.map((value, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-wes-robin rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="font-georgia text-wes-black">{value}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Member Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <h3 className="text-2xl font-mont font-bold text-wes-royal mb-6">
              We enable members to...
            </h3>
            <ul className="space-y-4">
              {siteContent.about.memberBenefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-wes-cardinal rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="font-georgia text-wes-black">{benefit}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
```

### Step 3.3: Programs Section Component
**File:** `src/components/sections/Programs.tsx`
```typescript
import React from 'react';
import { motion } from 'framer-motion';
import { siteContent } from '../../data/content';

export const Programs: React.FC = () => {
  return (
    <section id="programs" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-mont font-bold text-wes-royal mb-6">
            Our Programs
          </h2>
          <p className="text-lg font-georgia text-wes-black max-w-3xl mx-auto">
            Discover our flagship programs designed to foster entrepreneurship and innovation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {siteContent.programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-8">
                <h3 className="text-2xl font-mont font-bold text-wes-royal mb-4">
                  {program.title}
                </h3>
                <p className="font-georgia text-wes-black leading-relaxed">
                  {program.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
```

---

## Phase 4: Advanced Features (Week 4)

### Step 4.1: Events Section with Recent Activity
**File:** `src/components/sections/Events.tsx`
```typescript
import React from 'react';
import { motion } from 'framer-motion';

const recentEvents = [
  {
    title: "Business & Social Innovation Mixer",
    date: "April 3, 2025",
    description: "40+ students networking, elevator pitches, and connecting with Wesleyan student founders",
    attendees: "40+"
  },
  {
    title: "Jason Freinberg '99 Guest Speaker",
    date: "February 21, 2025", 
    description: "Interactive Q&A on pathway from Wesleyan to launching a successful creative brand",
    attendees: "20"
  },
  {
    title: "AI for Business Workshop",
    date: "February 13, 2025",
    description: "Hands-on workshop with lecture and interactive exercises",
    attendees: "7"
  }
];

export const Events: React.FC = () => {
  return (
    <section id="events" className="py-20 bg-wes-white">
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
          <p className="text-lg font-georgia text-wes-black max-w-3xl mx-auto">
            Join our ThinkTank sessions, speaker events, and workshops
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white border border-wes-dim/20 rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-mont font-medium text-wes-robin">
                  {event.date}
                </span>
                <span className="text-sm font-mont font-medium text-wes-cardinal">
                  {event.attendees} attendees
                </span>
              </div>
              <h3 className="text-xl font-mont font-bold text-wes-royal mb-3">
                {event.title}
              </h3>
              <p className="font-georgia text-wes-black text-sm leading-relaxed">
                {event.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
```

### Step 4.2: Get Involved Section with Team Roles
**File:** `src/components/sections/GetInvolved.tsx`
```typescript
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { siteContent } from '../../data/content';

export const GetInvolved: React.FC = () => {
  return (
    <section id="get-involved" className="py-20 bg-gray-50">
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
          <p className="text-lg font-georgia text-wes-black max-w-3xl mx-auto">
            Join one of our teams and help shape the future of entrepreneurship at Wesleyan
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
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
              <p className="font-georgia text-wes-black text-sm leading-relaxed">
                {team.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <Button size="lg" className="mr-4">
            Apply Now
          </Button>
          <Button variant="secondary" size="lg">
            Learn More
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
```

### Step 4.3: Contact Section
**File:** `src/components/sections/Contact.tsx`
```typescript
import React from 'react';
import { motion } from 'framer-motion';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import { siteContent } from '../../data/content';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-wes-royal">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-mont font-bold text-white mb-6">
            Connect With Us
          </h2>
          <p className="text-lg font-georgia text-white/90 max-w-3xl mx-auto">
            Ready to join Wesleyan's entrepreneurship community? Get in touch!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-8"
          >
            <EnvelopeIcon className="h-12 w-12 text-wes-robin mx-auto mb-4" />
            <h3 className="text-xl font-mont font-bold text-white mb-2">Email</h3>
            <p className="font-georgia text-white/90">{siteContent.contact.email}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-8"
          >
            <div className="h-12 w-12 bg-wes-robin rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold">IG</span>
            </div>
            <h3 className="text-xl font-mont font-bold text-white mb-2">Instagram</h3>
            <p className="font-georgia text-white/90">{siteContent.contact.instagram}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-8"
          >
            <div className="h-12 w-12 bg-wes-robin rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold">in</span>
            </div>
            <h3 className="text-xl font-mont font-bold text-white mb-2">LinkedIn</h3>
            <p className="font-georgia text-white/90">{siteContent.contact.linkedin}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
```

---

## Phase 5: Integration & Routing (Week 5)

### Step 5.1: Main App Component
**File:** `src/App.tsx`
```typescript
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Events } from './pages/Events';
import { Programs } from './pages/Programs';
import { GetInvolved } from './pages/GetInvolved';
import { Contact } from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-wes-white">
        <Header />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/events" element={<Events />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/get-involved" element={<GetInvolved />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
```

### Step 5.2: Home Page Assembly
**File:** `src/pages/Home.tsx`
```typescript
import React from 'react';
import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { Programs } from '../components/sections/Programs';
import { Events } from '../components/sections/Events';
import { GetInvolved } from '../components/sections/GetInvolved';
import { Contact } from '../components/sections/Contact';

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Programs />
      <Events />
      <GetInvolved />
      <Contact />
    </>
  );
};
```

### Step 5.3: Footer Component
**File:** `src/components/layout/Footer.tsx`
```typescript
import React from 'react';
import { motion } from 'framer-motion';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-wes-black text-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="font-georgia text-sm"
          >
            © 2024 Wesleyan Entrepreneurs
          </motion.p>
        </div>
      </div>
    </footer>
  );
};
```

---

## Phase 6: Testing & Optimization (Week 6)

### Step 6.1: Performance Optimization
```bash
# Install performance monitoring
npm install web-vitals

# Add to main.tsx
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

getCLS(console.log);
getFID(console.log);
getFCP(console.log);
getLCP(console.log);
getTTFB(console.log);
```

### Step 6.2: SEO Setup
**File:** `index.html`
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Wesleyan Entrepreneurs - Premier Entrepreneurship Club</title>
    <meta name="description" content="Join Wesleyan's premier entrepreneurship club. Start projects, support ventures, hone skills, and connect to the startup community." />
    <meta name="keywords" content="Wesleyan, entrepreneurship, startups, innovation, students, WesCollab" />
    <meta property="og:title" content="Wesleyan Entrepreneurs" />
    <meta property="og:description" content="Wesleyan's premier entrepreneurship club" />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

### Step 6.3: Build & Deployment Setup
**File:** `netlify.toml`
```toml
[build]
  publish = "dist"
  command = "npm run build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[build.environment]
  NODE_VERSION = "18"
```

### Step 6.4: Final Build Commands
```bash
# Build for production
npm run build

# Preview production build
npm run preview

# Deploy to Netlify
npx netlify deploy --prod --dir=dist
```

---

## Deployment Checklist

### Pre-Launch Checklist
- [ ] All components render correctly
- [ ] Mobile responsiveness tested
- [ ] Brand guidelines fully implemented
- [ ] Performance: Lighthouse score 90+
- [ ] Accessibility: WCAG 2.1 AA compliance
- [ ] SEO: Meta tags, sitemap, robots.txt
- [ ] Forms: Contact form functionality
- [ ] Analytics: Google Analytics setup
- [ ] Social media links working
- [ ] Content review completed

### Launch Day Tasks
- [ ] Domain configured
- [ ] SSL certificate active
- [ ] Analytics tracking verified
- [ ] Social media announcement ready
- [ ] Monitor error logs
- [ ] Performance monitoring active

### Post-Launch (Week 7+)
- [ ] Content updates process established
- [ ] Regular performance monitoring
- [ ] User feedback collection
- [ ] SEO monitoring and optimization
- [ ] Social media integration active
- [ ] Alumni/speaker outreach initiated

---

## Success Metrics Dashboard

### Technical Metrics
- **Load Time**: <3 seconds
- **Lighthouse Score**: 95+
- **Uptime**: 99.9%
- **Mobile Score**: 90+

### Business Metrics
- **Monthly Visitors**: 500+
- **Member Applications**: 50+ per semester
- **Event RSVPs**: 40% via website
- **Bounce Rate**: <50%
- **Session Duration**: 2+ minutes

### Brand Metrics
- **Brand Compliance**: 100%
- **Color Contrast**: WCAG AA
- **Typography**: Correct font usage
- **Logo Usage**: Proper implementation

---

## Maintenance Plan

### Weekly Tasks
- [ ] Content updates (events, news)
- [ ] Performance monitoring
- [ ] Error log review
- [ ] Analytics review

### Monthly Tasks
- [ ] SEO performance review
- [ ] User feedback analysis
- [ ] Content audit
- [ ] Security updates

### Quarterly Tasks
- [ ] Full accessibility audit
- [ ] Performance optimization
- [ ] Content strategy review
- [ ] Feature enhancement planning

This implementation plan provides a comprehensive roadmap for building the Wesleyan Entrepreneurs website with proper brand integration, modern development practices, and measurable success criteria. 