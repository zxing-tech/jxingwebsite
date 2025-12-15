# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

JXING Tech is a React-based corporate website for a digital solutions company. It features multi-language support (English, Malay, Chinese, Hindi, Spanish, Arabic with RTL support), service pages with pricing, and a quote request system.

## Commands

```bash
# Install dependencies
npm install

# Run development server (port 3000)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Architecture

### Tech Stack
- React 19 with TypeScript
- Vite for bundling
- React Router DOM (HashRouter) for client-side routing
- i18next for internationalization
- Tailwind CSS for styling (via `dark:` classes for dark mode)
- Lucide React for icons

### Key Files and Patterns

**Entry Points:**
- `index.tsx` - React root mount
- `App.tsx` - Main app with routing, Layout component handles language detection from URL params

**Data Layer:**
- `constants.ts` - All static data (services, pricing, team, blog posts, FAQs, career openings)
- `types.ts` - TypeScript interfaces for data models
- `hooks/useTranslatedData.ts` - Hook that wraps constant data with i18next translations

**Internationalization:**
- `i18n.ts` - i18next configuration with inline translations for 6 languages
- URL structure: `/#/` (English default) or `/#/:lang/` (language-prefixed)
- Language detection order: path > localStorage > browser navigator

**Page Structure:**
- `pages/` - Top-level route components (Home, Company, Services, Pricing, etc.)
- `components/` - Reusable UI components
- `components/ui/` - Atomic UI components (Button, Badge, Breadcrumbs, etc.)

**Routing:**
- Uses HashRouter for static hosting compatibility
- Routes defined in `routeConfig` array in App.tsx
- Services have nested routes: `/services/:id` and `/services/:id/:subId`

### Data Flow for Services

Services are defined in `constants.ts` with a hierarchical structure:
```
ServiceItem
  └── subServices: SubServiceItem[]
```

The `useTranslatedData` hook provides translated versions of all data, falling back to English constants if translation keys are missing.

### Environment Variables

- `GEMINI_API_KEY` - Set in `.env.local` (exposed as `process.env.GEMINI_API_KEY`)

### Path Aliases

- `@/*` maps to project root (configured in both `tsconfig.json` and `vite.config.ts`)
