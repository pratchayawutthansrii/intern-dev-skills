---
name: clean-editorial-ui
description: Build clean, cohesive, non-AI-looking React, Vite, and Tailwind CSS interfaces that strictly match an existing website's design system. Use when designing or refactoring landing pages, cards, pricing sections, callouts, forms, or dashboards and avoiding generic AI-generated aesthetics.
version: "1.0.0"
license: MIT
metadata:
  author: pratchayawutthansrii
  category: frontend-design
---

# Clean Editorial UI (No AI-Slop Design Standard)

Approach every frontend change as a senior product designer maintaining an established brand's design system—never as a template generator slapping decorative effects onto a blank screen.

## 1. Read the Existing Design System First

Before writing any JSX or CSS, inspect the surrounding components on the same page and shared token files (e.g., `tokens.ts`, `index.css`, `tailwind.config.*`, neighboring sections):
- Reuse the **exact** border colors, corner radii, shadow levels, surface backgrounds, button variants, and typography scale already in use.
- Match the page's visual rhythm (alternating paper/white sections, consistent max-width container, consistent vertical spacing).
- Never introduce a brand-new dark card, glassmorphism panel, or neon highlight into a calm light-mode editorial page unless the existing brand already uses that pattern on the same page.

## 2. Reject Generic "AI-Slop" Visual Clichés

Explicitly avoid these overused AI-generated patterns unless the user explicitly asks for them:
- Random dark obsidian/slate cards with glowing radial blurs (`blur-2xl`), metallic top hairlines, or pulsing status dots on a clean white/cream page.
- Excessive rounded pill badges stacked on top of every card (`RECOMMENDED`, `POPULAR`, `1-on-1`, `NEW`) competing with the actual heading.
- Heavy multi-stop gradients on buttons, borders, or pricing numbers when the rest of the site uses flat solid buttons (`bg-neutral-900` + hover accent).
- Giant decorative quotation watermarks, double-wrapped icon circles on every bullet point, or thick `border-2` glowing rings around featured cards.
- Long wall-of-text paragraphs (5+ lines of 14px text) where a crisp 1-sentence lead + 3 scannable bullets would communicate twice as clearly.

## 3. Typography & Visual Hierarchy Rules

- **Eyebrow / Section Kicker**: Keep sizing consistent across every section on the page (never mix `12px` in one section and `18px` in another).
- **Heading Scale**: Ensure clear visual separation between eyebrow → `h2` (`24px–34px`) → `h3` (`18px–22px`) → body (`14px–16px`).
- **Thai + English Readability**:
  - Give Thai body copy generous `leading-relaxed` (`1.6–1.75`) so tone marks and vowels never collide.
  - Pair English labels with clean `tracking-[0.12em–0.14em]` and a deliberate secondary font only when the site already configures one.
- **Scannability**: Break dense explanatory blocks into:
  1. Strong lead definition sentence (`text-lg` or `text-xl`, medium/semibold)
  2. Short scannable checklist (3–4 concrete benefits with clean icons)
  3. Subtle separated footer line for contextual links

## 4. Accessibility & Contrast (Mandatory)

- Maintain at least **WCAG AA** contrast (`>= 4.5:1` for normal text, `>= 3:1` for large text and UI controls).
- Never put light gold/amber text (`#D4AF37`, `#EAB308`) on white or cream backgrounds—use a deep bronze/ochre (`#82570a` / `#78570b`) for text and reserve bright gold for decorative borders or dark-ink button fills.
- Every interactive control must have an accessible name (`aria-label` for icon-only buttons), visible `:focus-visible` outline, and minimum `44px` touch target on mobile.
- Mark purely decorative icons with `aria-hidden="true"`.

## 5. Verification Before Finishing

1. Check mobile (`375px`), tablet (`768px`), and desktop (`1280px+`) layout wrapping—zero horizontal overflow.
2. Verify `npm run build` succeeds with zero TypeScript or CSS errors.
3. Confirm no unused image assets, unused imports, or dead Tailwind classes were left behind.
