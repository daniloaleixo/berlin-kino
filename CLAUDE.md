# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Kino-Berlin is a Next.js cinema guide web application for discovering movie schedules across German cities (Berlin, Frankfurt, Munich). It features multi-language support (English/German), real-time cinema data from an AWS API, and comprehensive Google Analytics/GTM tracking.

## Commands

```bash
npm run dev          # Start development server (localhost:3000)
npm run build        # Build for production (outputs to /out)
npm run deploy       # Build and deploy to S3 (requires AWS credentials)
npm run generate:docs # Regenerate API types from OpenAPI schema
```

## Architecture

### Routing
- **Next.js Pages Router** in `/pages` directory
- City pages: `/pages/berlin/`, `/pages/frankfurt/`, `/pages/munich/`
- Static export configured for S3 deployment (`output: 'export'` in next.config.js)

### Key Source Directories
- `src/components/` - React UI components (MovieCard, DatePicker, Navigation, etc.)
- `src/hooks/useMovies.ts` - Main data fetching hook with filtering logic
- `src/services/api.ts` - Axios-based API client for cinema backend
- `src/utils/cityConfig.ts` - City-specific configuration (neighborhoods, SEO, translations)
- `src/utils/analytics.ts` - GA4/GTM event tracking functions
- `src/types/` - TypeScript types; `.generated/` contains auto-generated API types
- `src/locales/` - i18next translation files (en/de)

### Data Flow
1. City pages use `useMovies` hook with city-specific config
2. Hook calls `fetchMovies()` from `src/services/api.ts`
3. API endpoint: `https://b0a92049qi.execute-api.us-east-1.amazonaws.com/dev/cinemas/search`
4. Query params: `language`, `date`, `query`, `city`, `neighborhood[]`

### Adding a New City
1. Add config to `src/utils/cityConfig.ts` (name, neighborhoods, SEO data)
2. Create new page directory in `/pages/{cityname}/index.tsx`
3. Add translations to `src/locales/{lang}/common.json`

## Tech Stack
- Next.js 15 with React 19, TypeScript
- Tailwind CSS v4 for styling
- i18next for internationalization
- Axios for HTTP requests
- Google Tag Manager (GTM-MXWFDWHX) / GA4 (G-J2H4ZR7QVV)
