# 🕵️ Fake Review Detector

A modern, Netflix-inspired web application that uses AI-powered analysis to detect fake reviews instantly. Built with React, TypeScript, Tailwind CSS v4.0, and Motion (Framer Motion).

![Fake Review Detector](https://img.shields.io/badge/React-18+-blue) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4.0-06B6D4) ![TypeScript](https://img.shields.io/badge/TypeScript-5+-3178C6)

## ✨ Features

- 🎯 **AI-Powered Analysis** - Instant fake review detection with confidence scoring
- 🎨 **Netflix-Inspired Design** - Clean, modern UI with glassmorphism effects
- 📝 **Sample Reviews** - Pre-loaded examples to try instantly
- 📊 **Analysis History** - Track your last 10 analyzed reviews
- 🖼️ **Demo Section** - Visual showcase with curated images
- 📱 **Fully Responsive** - Works seamlessly on all devices
- ⚡ **Smooth Animations** - Motion-powered transitions and effects
- 🎭 **Glassmorphism UI** - Modern glass effects on all interactive elements

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed on your system:
- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**

### Installation

1. **Clone or download this repository**
   ```bash
   # If using git
   git clone <your-repo-url>
   cd fake-review-detector
   ```

2. **Initialize a new React + Vite project** (if starting fresh)
   ```bash
   npm create vite@latest . -- --template react-ts
   ```

3. **Install core dependencies**
   ```bash
   npm install
   ```

4. **Install Tailwind CSS v4.0**
   ```bash
   npm install tailwindcss@next @tailwindcss/vite@next
   ```

5. **Install UI and animation libraries**
   ```bash
   npm install motion lucide-react
   ```

6. **Install Radix UI components** (for ShadCN)
   ```bash
   npm install @radix-ui/react-progress@1.1.2
   npm install @radix-ui/react-slot
   npm install @radix-ui/react-label
   npm install @radix-ui/react-separator
   ```

7. **Install utility libraries**
   ```bash
   npm install class-variance-authority clsx tailwind-merge
   ```

### Configuration

#### 1. Create/Update `vite.config.ts`

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```

#### 2. Update `tsconfig.json`

Add path aliases for cleaner imports:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

#### 3. Create `tsconfig.node.json`

```json
{
  "compilerOptions": {
    "composite": true,
    "skipLibCheck": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true,
    "strict": true
  },
  "include": ["vite.config.ts"]
}
```

#### 4. Update your entry point (`src/main.tsx`)

```typescript
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/globals.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

#### 5. Update `index.html`

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Fake Review Detector - AI-Powered Review Analysis</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

### Project Structure

Organize your files as follows:

```
fake-review-detector/
├── src/
│   ├── App.tsx                          # Main application component
│   ├── main.tsx                         # Entry point
│   ├── components/
│   │   ├── AnalysisHistory.tsx         # Review history tracker
│   │   ├── DemoSection.tsx             # Demo images section
│   │   ├── Footer.tsx                  # Footer with credits
│   │   ├── Navbar.tsx                  # Navigation bar
│   │   ├── ResultCard.tsx              # Analysis result display
│   │   ├── SampleReviews.tsx           # Sample review cards
│   │   ├── figma/
│   │   │   └── ImageWithFallback.tsx   # Image component
│   │   └── ui/                         # ShadCN components
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── progress.tsx
│   │       ├── textarea.tsx
│   │       ├── utils.ts
│   │       └── ... (other UI components)
│   └── styles/
│       └── globals.css                 # Tailwind config & global styles
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── README.md
```

### Running the Application

1. **Start the development server**
   ```bash
   npm run dev
   ```

2. **Open your browser**
   ```
   http://localhost:5173
   ```

3. **Build for production**
   ```bash
   npm run build
   ```

4. **Preview production build**
   ```bash
   npm run preview
   ```

## 🎨 UI Features Explained

### Glassmorphism Effects
All buttons and cards use glassmorphism with:
- `backdrop-blur-xl` - Creates the blur effect
- `bg-white/5` - Semi-transparent backgrounds
- `border border-white/10` - Subtle borders
- Gradient overlays on hover

### Gradients
The app uses multiple gradient techniques:
- Background: `bg-gradient-to-br from-black via-neutral-900 to-black`
- Text gradients: `bg-gradient-to-r from-white via-white to-neutral-400 bg-clip-text`
- Decorative blurred orbs for ambient lighting

### Animations
Powered by Motion (Framer Motion):
- Fade-in animations on page load
- Staggered animations for lists
- Smooth transitions on hover
- Scale animations on button clicks

## 📦 Dependencies

### Core
- `react` - UI library
- `react-dom` - React DOM rendering
- `typescript` - Type safety
- `vite` - Build tool

### Styling
- `tailwindcss@next` - Tailwind CSS v4.0
- `@tailwindcss/vite` - Vite plugin for Tailwind

### UI Components
- `motion` - Animation library (formerly Framer Motion)
- `lucide-react` - Icon library
- `@radix-ui/react-*` - Headless UI primitives

### Utilities
- `class-variance-authority` - CVA for component variants
- `clsx` - Conditional classNames
- `tailwind-merge` - Merge Tailwind classes

## 🛠️ Troubleshooting

### Issue: Tailwind styles not working
**Solution:** Make sure `globals.css` is imported in `main.tsx` and the Tailwind plugin is added to `vite.config.ts`

### Issue: Module not found errors
**Solution:** Install missing dependencies:
```bash
npm install <missing-package>
```

### Issue: TypeScript errors with path aliases
**Solution:** Check that `tsconfig.json` has the correct `baseUrl` and `paths` configuration

### Issue: Images not loading
**Solution:** The app uses Unsplash CDN URLs which require internet connection. Check your network connection.

### Issue: Motion animations not working
**Solution:** Make sure you've installed the correct package:
```bash
npm install motion
```
Not `framer-motion` - the package has been renamed to `motion`

## 🔧 Customization

### Change the color scheme
Edit the color variables in `src/styles/globals.css`:
```css
:root {
  --destructive: #E50914; /* Netflix red - change this */
  /* ... other variables */
}
```

### Modify the AI analysis algorithm
Edit the `analyzeReview` function in `src/App.tsx`:
```typescript
const analyzeReview = () => {
  // Add your custom logic here
}
```

### Add more sample reviews
Edit the `sampleReviews` array in `src/components/SampleReviews.tsx`

## 📝 Notes

- This is a **frontend-only demo application**
- The AI analysis is **simulated** using pattern matching
- Review history is stored in **component state** (resets on refresh)
- To persist history, integrate `localStorage` or a backend database
- All images are loaded from **Unsplash CDN** (requires internet)

## 🚀 Deployment

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm run build
# Then drag and drop the 'dist' folder to Netlify
```

### Deploy to GitHub Pages
Add to `vite.config.ts`:
```typescript
export default defineConfig({
  base: '/your-repo-name/',
  // ... rest of config
})
```

Then:
```bash
npm run build
# Deploy the 'dist' folder
```

## 👨‍💻 Credits

**Built with ❤️ by Mohammed Nihal**

## 📄 License

This project is open source and available for personal and educational use.

---

## 🆘 Need Help?

If you encounter any issues:
1. Check that all dependencies are installed: `npm install`
2. Clear node_modules and reinstall: `rm -rf node_modules package-lock.json && npm install`
3. Make sure you're using Node.js v18+: `node --version`
4. Check that the file structure matches the one above
5. Ensure `globals.css` is properly imported

**Still stuck?** The most common issue is missing Tailwind CSS configuration. Double-check that:
- `@tailwindcss/vite` plugin is in `vite.config.ts`
- `globals.css` contains all the Tailwind directives
- The file is imported in `main.tsx`

Happy coding! 🎉
