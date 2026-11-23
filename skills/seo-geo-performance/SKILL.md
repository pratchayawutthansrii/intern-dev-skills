---
name: seo-geo-performance
description: Optimize React, Vite, and web applications for Google Page 1 SEO, AI Search/GEO discoverability (llms.txt, Schema.org Entity Graph), and Lighthouse 100/100/100/100 scores. Use when improving Core Web Vitals (LCP, TBT, CLS), SSR prerendering, structured data, keyword interlinking, or AI crawler readiness.
version: "1.0.0"
license: MIT
metadata:
  author: pratchayawutthansrii
  category: seo-performance
---

# SEO, GEO (AI Search) & Lighthouse 100 Playbook

Optimize every public-facing page for **three audiences simultaneously**: human users (instant LCP, smooth UX), Google Search (SSR HTML, Topic Clusters, Entity Schema), and AI Agents / LLMs (`llms.txt`, `llms-full.txt`, structured JSON, clean `robots.txt`).

## 1. Core Web Vitals & Lighthouse 100 Engineering

- **LCP (Largest Contentful Paint <= 1.2s desktop / <= 2.5s mobile)**:
  - Pre-render above-the-fold hero HTML statically (SSR hydration via `renderToString` + `hydrateRoot`) so the browser paints hero text and hero image before JS finishes executing.
  - Serve responsive `.webp` / `.avif` hero images (`640w`, `768w`, `960w`, `1280w`, `1920w`) with `fetchpriority="high"`, explicit `width`/`height`, and declarative `<link rel="preload" as="image" imagesrcset="...">`.
  - Never hide the hero behind a dark loading spinner or `opacity: 0` animation on initial paint.
- **TBT (Total Blocking Time <= 50ms)**:
  - Code-split below-the-fold sections with `React.lazy` and mount heavy below-the-fold bundles cleanly without blocking initial hydration.
  - Defer third-party analytics/tags (`gtag`, heatmaps) until first user interaction or idle callback (never run external analytics on `localhost`).
  - Keep Vite's `<link rel="modulepreload">` hints intact—stripping them degrades mobile TBT.
  - Do not duplicate large inline critical CSS alongside the full Tailwind stylesheet (causes heavy style recalculation).
- **CLS (Cumulative Layout Shift <= 0.01)**:
  - Always reserve fixed height/aspect ratio for images, banners, and dynamic embeds.
  - Load Google Fonts non-blockingly (`display=swap`) and trim font weights strictly to what is actually used.

## 2. Google Page 1 On-Page SEO & Topic Cluster Architecture

- **Route-Specific Static Metadata**: Ensure raw pre-rendered HTML (before JS runs) contains accurate `<title>`, `<meta name="description">`, `<meta name="keywords">`, `<link rel="canonical">`, and `og:*` tags matching the route—never leave homepage fallback meta tags on landing pages.
- **Featured-Snippet Structure**: Place an immediate, clear definition right under the hero (`<h2>[Primary Question Keyword]?</h2>` + concise 1–2 sentence answer + scannable key points) inside SSR HTML so Googlebot indexes it without scrolling.
- **Bidirectional Topic Cluster & Internal Linking**:
  - Link from the pillar page to related services and deep-dive articles using descriptive Thai/English anchor text (never generic `"คลิกที่นี่"`).
  - Link **back** to the pillar page from site-wide navigation/footer and related service grids with exact-match anchor text.
  - Every `<a>` tag must have a real `href` (use `<article>` or `<button>` if non-navigable—never `<a href="#">` or href-less `<a>`).
- **Connected Schema.org JSON-LD (`@graph`)**:
  - Connect entities via `@id`: `#organization` ← `#website` ← `#webpage` → `#defined-term` + `#service` (with `Offer` price/currency and `hasOfferCatalog`) + `#breadcrumb` + `#faq`.
  - Keep `FAQPage` JSON-LD 100% consistent with visible on-page FAQ content.

## 3. GEO / AEO — AI Agent & LLM Discoverability

Make the site readable to ChatGPT (`GPTBot`, `OAI-SearchBot`, `ChatGPT-User`), Claude (`ClaudeBot`, `anthropic-ai`), Gemini (`Google-Extended`), and Perplexity (`PerplexityBot`) in a single non-JS fetch:
1. **`/llms.txt`**: Concise Markdown index following `llmstxt.org` (brand overview, verified contacts, core services, starting prices, canonical links, and compliance/citation rules).
2. **`/llms-full.txt`**: Complete single-file Markdown knowledge dump containing full definitions, packages, pricing, FAQs, and official disclaimers.
3. **`/ai-knowledge.json`**: Valid UTF-8 JSON entity & service catalog for programmatic AI agents and RAG pipelines.
4. **`/robots.txt`**: Explicitly `Allow: /` for major search and AI crawlers, disallow form/internal routes, and link `Sitemap:` + `llms.txt` discovery URLs.
5. **HTML `<link rel="alternate">` & UTF-8 Headers**: Add `<link rel="alternate" type="text/plain" href="/llms.txt" />` in `<head>` and configure `Content-Type: text/plain; charset=utf-8` + `Access-Control-Allow-Origin: *` in hosting `_headers` so Thai text never renders as mojibake.

## 4. Verification Before Finishing

1. Strictly validate every JSON and `<script type="application/ld+json">` block with `JSON.parse`.
2. Build production (`npm run build`) and inspect the generated static `dist/` HTML to verify canonical URL, schema, and key headings exist pre-JS.
3. Audit production preview (`vite preview`)—never measure Lighthouse against `vite dev`—checking Performance, Accessibility, Best Practices, SEO, and `0` console/hydration errors.
