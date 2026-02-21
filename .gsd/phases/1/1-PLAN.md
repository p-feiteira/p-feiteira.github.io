---
phase: 1
plan: 1
wave: 1
---

# Plan 1.1: Foundation Setup & Theming

## Objective
Establish a Vercel-like monochromatic base theme and typography configuration. Ensure `globals.css` leverages stark minimalist contrast, removing loud colors and standardizing the font logic across the root components. The fonts (Geist and Geist-Mono) are already in place, so the main focus is replacing the current color palette to a highly polished black/white/gray contrast with minimal accents.

## Context
- .gsd/SPEC.md
- .gsd/ARCHITECTURE.md
- src/app/globals.css
- src/app/[locale]/layout.tsx

## Tasks

<task type="auto">
  <name>Refine Global CSS for Vercel Aesthetic</name>
  <files>src/app/globals.css</files>
  <action>
    - Refactor the color palette to match a strictly monochromatic, high-contrast, Vercel-like theme. 
    - Replace overly saturated variables (like chart colors, primary/secondary colors) with a palette mostly revolving around whites, grays (e.g. #FAFafa, #EAEAEA, #888, #444, #111) for light mode and true blacks/deep grays for dark mode.
    - Standardize the `radius` to look modern (a bit crisper than 0.625rem, perhaps slightly softer or harder depending on standard Vercel styles, usually ~6px or 8px).
    - Maintain existing structural utilities for compatibility with Radix components (like `--sidebar-*`).
    - Keep CSS variable format `oklch` or switch to standard `hsl` if preferred by the current setup, but stick to the sleek minimal palette.
  </action>
  <verify>grep -q "var(--background)" src/app/globals.css</verify>
  <done>Color palette variables strictly produce stark dark/light minimalist vibes. No overly saturated colors used outside of warnings/accents.</done>
</task>

<task type="auto">
  <name>Audit Typography and Provider Layout</name>
  <files>src/app/[locale]/layout.tsx, src/app/globals.css</files>
  <action>
    - Ensure `<body className="...">` continues to use `geistSans.variable` and `geistMono.variable` for typography.
    - Check the `<ThemeProvider>` properties to ensure the site defaults or handles transitions between dark/light mode elegantly (currently `disableTransitionOnChange` is on, which is good for avoiding flashes of unstyled content, but check if we want smooth fades or not).
    - Optional: Refactor the generic text and background colors in `globals.css` to take full advantage of the Geist font features.
  </action>
  <verify>grep -q "NextIntlClientProvider" src/app/[locale]/layout.tsx</verify>
  <done>Typography is strictly sans/mono relying on Geist. The layout components effectively integrate the base theme.</done>
</task>

## Success Criteria
- [ ] Next.js app applies the new Vercel-like color palette for both light and dark mode.
- [ ] Geist fonts display correctly with proper typographic defaults.
- [ ] Dark mode toggle (or system preference) seamlessly transitions using stark, modern contrasts.
