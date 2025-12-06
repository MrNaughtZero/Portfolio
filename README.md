# Portfolio Website

A modern, responsive portfolio website built with React, showcasing projects, blog posts, and client testimonials. Features a clean design with dark mode support and smooth navigation.

## 🚀 Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **SCSS** - CSS preprocessor
- **Jotai** - State management
- **React Hook Form** - Form handling
- **Zod** - Schema validation

## ✨ Features

- **Project Showcase** - Detailed project pages with galleries, tech stacks, and outcomes
- **Blog** - Writing section with blog post listings and individual post pages
- **Client Testimonials** - Feedback section with expandable testimonials
- **Dark Mode** - Toggle between light and dark themes
- **Responsive Design** - Mobile-first approach with optimized layouts
- **Smooth Navigation** - Seamless routing between pages
- **Mobile Menu** - Hamburger menu for mobile navigation

## 📁 Project Structure

```
portfolio/
├── public/
│   └── images/          # Project and blog images
├── src/
│   ├── components/      # Reusable React components
│   │   ├── BlogHeader/
│   │   ├── Contact/
│   │   ├── Feedback/
│   │   ├── Header/
│   │   ├── Hero/
│   │   ├── ProjectContent/
│   │   ├── ProjectGallery/
│   │   ├── ProjectHeader/
│   │   ├── ProjectHero/
│   │   ├── ProjectNavigation/
│   │   ├── ProjectResults/
│   │   ├── TechStack/
│   │   └── Work/
│   ├── contexts/        # React contexts (Theme)
│   ├── data/           # Static data files
│   │   ├── blogPosts.js
│   │   ├── projects.js
│   │   └── testimonials.js
│   ├── pages/          # Page components
│   │   ├── Blog/
│   │   ├── BlogPost/
│   │   ├── Home/
│   │   └── Project/
│   ├── styles/         # Global styles
│   ├── App.jsx         # Main app component
│   └── main.jsx        # Entry point
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

## 🚦 Development

Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:3000`

## 📦 Build

Build for production:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## 🎨 Styling

- **Tailwind CSS** - Utility classes for rapid UI development
- **SCSS** - Custom styles and component-specific styling
- **Dark Mode** - Implemented using Tailwind's class-based dark mode
- **Custom Fonts** - Inter (sans-serif), Space Grotesk (headings), monospace

## 📄 Data Management

Project data, blog posts, and testimonials are stored in the `src/data/` directory:
- `projects.js` - Project information and metadata
- `blogPosts.js` - Blog post content
- `testimonials.js` - Client testimonials

## 🔧 Configuration

### Path Aliases

The project uses path aliases configured in `vite.config.js`:
- `@` - `./src`
- `@atoms` - `./src/atoms`
- `@components` - `./src/components`
- `@pages` - `./src/pages`
- `@styles` - `./src/styles`
- `@assets` - `./src/assets`

## 📱 Routes

- `/` - Homepage
- `/project/:slug` - Individual project pages
- `/blog` - Blog listing page
- `/blog/:slug` - Individual blog post pages

## 🌙 Theme

The portfolio includes a theme context that manages light/dark mode preferences, persisting the user's choice across sessions.

## 📄 License

Private project - All rights reserved.

