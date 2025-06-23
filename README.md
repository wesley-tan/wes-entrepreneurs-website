# Wesleyan Entrepreneurs Website

A modern, responsive website for Wesleyan University's premier entrepreneurship organization, built with React, TypeScript, and Tailwind CSS.

## 🌟 Live Site

Visit the website at: [Wesleyan Entrepreneurs](https://wes-entrepreneurs-website.vercel.app)

## 📖 About

The Wesleyan Entrepreneurs website showcases our organization's mission to foster innovation and entrepreneurship on campus. We connect students with mentors, provide resources for startup development, and create a supportive community for aspiring entrepreneurs.

## 🚀 Features

- **Modern Design**: Clean, professional interface with Wesleyan brand colors
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Interactive Elements**: Smooth animations powered by Framer Motion
- **Real Content**: Authentic events, programs, and member information
- **Contact Integration**: Direct links to email, Instagram, and LinkedIn
- **Accessibility**: WCAG 2.1 AA compliant design
- **Performance Optimized**: Fast loading with optimized images and code splitting

## 🛠️ Tech Stack

- **Frontend**: React 19 with TypeScript
- **Build Tool**: Vite 6.3.5
- **Styling**: Tailwind CSS 4.1.10 with custom brand colors
- **Animations**: Framer Motion 12.18.1
- **Icons**: Heroicons React 2.2.0
- **Deployment**: Vercel
- **Code Quality**: ESLint + TypeScript strict mode

## 🎨 Brand Colors

```css
--wes-royal: #0A2463;    /* Primary brand color */
--wes-robin: #12D7D7;    /* Accent color */
--wes-cardinal: #D72121;  /* Highlight color */
--wes-dim: #686B6B;      /* Secondary text */
--wes-black: #1D1D1F;    /* Primary text */
--wes-white: #F5F5F7;    /* Background */
```

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/          # Header, Footer components
│   ├── sections/        # Main page sections (Hero, About, etc.)
│   └── ui/             # Reusable UI components (Button, Image, etc.)
├── data/
│   └── content.ts      # Centralized content management
├── pages/
│   └── Home.tsx        # Main page component
├── utils/
│   └── imageUtils.ts   # Image optimization utilities
└── assets/             # Static assets (logos, images)
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/wesley-tan/wes-entrepreneurs-website.git
   cd wes-entrepreneurs-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production 
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality checks

## 🏗️ Building for Production

```bash
# Build the project
npm run build

# Preview the build
npm run preview
```

The built files will be in the `dist/` directory, ready for deployment.

## 🚀 Deployment

This project is deployed on Vercel with automatic deployments from the main branch.

### Deploy to Vercel

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

### Deploy to Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder** to Netlify

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px  
- **Desktop**: > 1024px

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Color contrast compliance (WCAG 2.1 AA)
- Screen reader compatibility

## 🎯 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: All metrics in "Good" range
- **Image Optimization**: Lazy loading and responsive images
- **Code Splitting**: Optimized bundle sizes

## 📊 Content Management

Content is centralized in `src/data/content.ts` for easy updates:

```typescript
export const siteContent = {
  hero: {
    title: "Wesleyan Entrepreneurs",
    subtitle: "Where Innovation Meets Opportunity",
    // ...
  },
  programs: [...],
  recentEvents: [...],
  // ...
};
```

## 🔧 Customization

### Adding New Sections

1. Create component in `src/components/sections/`
2. Add content to `src/data/content.ts`
3. Import and use in `src/pages/Home.tsx`

### Styling Guidelines

- Use Tailwind CSS classes
- Follow the established spacing scale (4px, 8px, 16px, 24px, etc.)
- Maintain brand color consistency
- Use the font system: Montserrat for headings, Inter for body text

### Image Optimization

The project includes a comprehensive image component system:

```typescript
import { Image, ImageCard, Gallery } from '../components/ui';

// Basic optimized image
<Image src="/photo.jpg" alt="Description" />

// Image card for content
<ImageCard 
  src="/event.jpg" 
  title="Event Title"
  description="Event description"
/>

// Interactive gallery
<Gallery images={imageArray} />
```

## 🐛 Troubleshooting

### Common Issues

**Development server won't start**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Build fails**
```bash
# Check TypeScript errors
npm run lint
```

**Images not loading**
- Ensure images are in the `public/` directory
- Check file paths and extensions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style

- Use TypeScript for all components
- Follow React functional component patterns
- Use Tailwind CSS for styling
- Maintain consistent naming conventions
- Add TypeScript interfaces for props

## 📧 Contact

**Wesleyan Entrepreneurs**
- Email: wesentrepreneurs@wesleyan.edu
- Instagram: [@wesentrepreneurs](https://instagram.com/wesentrepreneurs)
- LinkedIn: [Wesleyan Entrepreneurs](https://linkedin.com/company/wesentrepreneurs)

## 📄 License

This project is private and proprietary to Wesleyan Entrepreneurs.

