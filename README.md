# Muoka Software Solutions - Portfolio Website

A modern, responsive portfolio website for Muoka Software Solutions built with Next.js 14, TypeScript, TailwindCSS, and Framer Motion.

## 🚀 About

**Tagline:** "You need a software? Worry less — leave it to us, the experts, to bring it to life."

This website showcases Muoka Software Solutions' expertise in custom software development, IT support, and digital transformation through a modern, SEO-optimized platform.

## ✨ Features

- **Modern Design**: Clean, professional UI with custom color palette and typography
- **Responsive**: Mobile-first design that works on all devices
- **Performance**: Built with Next.js 14 for optimal performance and SEO
- **Animations**: Smooth animations and transitions using Framer Motion
- **Type Safety**: Full TypeScript implementation
- **Accessibility**: WCAG 2.1 compliant design
- **SEO Optimized**: Meta tags, OpenGraph, and structured data

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: TailwindCSS + Custom Design System
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod Validation
- **Icons**: Lucide React
- **Typography**: Inter & Poppins (Google Fonts)
- **Language**: TypeScript
- **Linting**: ESLint + Next.js config

## 📋 Pages & Features

### Core Pages
- **Home** (`/`) - Hero section, services overview, tech stack showcase
- **About** (`/about`) - Company mission, values, and team information
- **Services** (`/services`) - Comprehensive service offerings with details
- **Portfolio** (`/portfolio`) - Project showcase with case studies
- **Blog** (`/blog`) - Articles and company insights
- **Careers** (`/careers`) - Job listings and company culture
- **Contact** (`/contact`) - Contact forms and company information

### Planned Features
- [ ] Individual service detail pages (`/services/[slug]`)
- [ ] Portfolio case study pages (`/portfolio/[slug]`)
- [ ] Blog post pages (`/blog/[slug]`)
- [ ] Job detail pages (`/careers/[slug]`)
- [ ] Contact form API endpoints
- [ ] Newsletter subscription
- [ ] Dark/Light mode toggle
- [ ] Multi-language support (English, Swahili, French)
- [ ] Analytics integration (Google Analytics 4)
- [ ] Search functionality
- [ ] Chat widget integration

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd muokasoftwaresolutions
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build Commands

```bash
# Development
npm run dev

# Production build
npm run build

# Start production server
npm start

# Linting
npm run lint
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js 14 App Router
│   ├── (pages)/           # Page routes
│   │   ├── about/
│   │   ├── services/
│   │   ├── portfolio/
│   │   ├── blog/
│   │   ├── careers/
│   │   └── contact/
│   ├── api/               # API routes
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── layout/           # Layout components (Header, Footer)
│   ├── sections/         # Page sections (Hero, etc.)
│   └── ui/               # UI components (Button, Card, etc.)
├── lib/                  # Utility functions
├── types/                # TypeScript type definitions
└── public/               # Static assets
```

## 🎨 Design System

### Colors
- **Primary**: #0A192F (Deep Navy Blue)
- **Accent**: #00E5FF (Electric Cyan)
- **Background**: #F9FAFB
- **Text**: #1F2937

### Typography
- **Headings**: Poppins (600-700 weight)
- **Body**: Inter (300-700 weight)

### Animation Principles
- Subtle parallax effects
- Fade-in transitions
- Hover reveals
- Smooth scrolling

## 🔧 Customization

### Adding New Pages
1. Create a new directory in `src/app/`
2. Add `page.tsx` for the main page
3. Update navigation in `src/components/layout/header.tsx`

### Modifying Design System
- Update `tailwind.config.js` for theme changes
- Modify `src/app/globals.css` for custom CSS
- Update `src/lib/utils.ts` for utility functions

### Adding Components
- Create new components in `src/components/`
- Follow the existing naming conventions
- Use TypeScript for type safety

## 📦 Dependencies

### Core
- `next` - React framework
- `react` & `react-dom` - React library
- `typescript` - Type safety

### UI & Styling
- `tailwindcss` - Utility-first CSS framework
- `framer-motion` - Animation library
- `lucide-react` - Icon library
- `clsx` & `tailwind-merge` - Class name utilities

### Forms & Validation
- `react-hook-form` - Form library
- `@hookform/resolvers` - Form validation
- `zod` - Schema validation

### Future Integrations
- `next-seo` - SEO optimization
- `@vercel/analytics` - Analytics
- `react-markdown` - Markdown rendering

## 🌐 SEO & Performance

- **Meta Tags**: Comprehensive meta tags for all pages
- **OpenGraph**: Social media sharing optimization
- **Structured Data**: Schema.org markup for better search results
- **Performance**: Optimized images, fonts, and code splitting
- **Accessibility**: WCAG 2.1 AA compliance

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy with automatic builds

### Other Platforms
- **Netlify**: Use `npm run build` and deploy `out/` directory
- **AWS/Azure**: Configure for static hosting or serverless
- **Self-hosted**: Build and serve with any Node.js server

## 📈 Analytics & Monitoring

- Google Analytics 4 (planned)
- Vercel Analytics (planned)
- Performance monitoring
- Error tracking

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is proprietary to Muoka Software Solutions.

## 📞 Support

For support and questions:
- **Email**: hello@muokasoftware.com
- **Phone**: +254 700 123 456
- **Location**: Nairobi, Kenya

---

**Muoka Software Solutions** - *"You need a software? Worry less — leave it to us, the experts, to bring it to life."*
