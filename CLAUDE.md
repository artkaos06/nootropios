# CLAUDE.md — Nootropios pSEO Project

## Project Overview
- **Site**: nootropios.com — Nootropiques & Boosters de Testostérone
- **Stack**: Next.js 15 (App Router), TypeScript, Tailwind CSS
- **Output**: Static export (`output: 'export'`) deployed on Vercel
- **Language**: fr-FR
- **Architecture**: Hub-and-spoke pSEO with semantic entity graph

## Quick Commands
```bash
npm run dev          # Local development
npm run build        # Build static export (verify 0 errors)
npm run lint         # TypeScript + ESLint checks
```

## Key Principles
1. **Data-first**: Always create/update entity + intent data BEFORE writing pages
2. **Hub balance**: Keep all hubs at roughly equal spoke count
3. **Entity coverage**: Every entity should eventually have a page or be covered in multiple pages
4. **No thin content**: Minimum 1,500 words per content page
5. **Schema everywhere**: Every page gets JSON-LD structured data
6. **Static only**: No client-side data fetching, no API routes, pure static export
7. **French SEO**: All content in proper French, no anglicisms unless industry standard

## Korey Turkberg Rules
- Answer Capsule: 150-170 words, 7+ bold entities, 3 paragraphs
- Entity density: 5-7 per 200 words, all in `<strong>`
- Internal links: 3/page, max 1 per 150 words, descriptive anchors
- FAQ: 4-5 questions, 80-150 words/answer, FAQPage schema
- Content pages: 1500+ words | Hub pages: 500+ words
