---
phase: 2
plan: 1
wave: 1
---

# Plan 2.1: Page Structure Strategy (Hero & Header)

## Objective
Replace or update the current `Hero` and `Header` components to ensure vast white/dark spaces, precise alignment, and a purely minimal Vercel-like aesthetic. Strip away borders, boxes, or saturated colors. Instead, focus on typography scale, negative space, and monochromatic UI elements.

## Context
- .gsd/SPEC.md
- src/app/[locale]/page.tsx
- src/app/[locale]/sections/hero.tsx
- src/app/[locale]/sections/header.tsx

## Tasks

<task type="auto">
  <name>Redesign Header for Minimalist Floating Navigation</name>
  <files>src/app/[locale]/sections/header.tsx</files>
  <action>
    - Refactor `Header` to be a sleek, minimalist navigation bar.
    - Remove heavy backgrounds, opting for a clean transparent or subtly frosted glass (`backdrop-blur-md bg-background/50`) effect.
    - Use strict typography (small, uppercase or tightly tracked lowercase) for navigation links.
    - Keep icons (like a sun/moon for theme or language toggler) minimal, using thin stroke weight (Lucide React's `strokeWidth={1.5}` or similar).
    - Ensure a solid `border-b` is either removed entirely, or is extremely subtle (`border-border/40`).
  </action>
  <verify>grep -q "backdrop-blur" src/app/[locale]/sections/header.tsx</verify>
  <done>Header looks transparent and lightweight with strictly monochromatic links.</done>
</task>

<task type="auto">
  <name>Redesign Hero Section with Deep Typography</name>
  <files>src/app/[locale]/sections/hero.tsx</files>
  <action>
    - Rebuild the Hero section to act as a profound introduction relying on huge typography, immense negative space, and absolute minimal clutter.
    - The layout should likely be flex column, centered or strictly left-aligned. Use `min-h-[80vh]` or `min-h-screen` for dramatic effect.
    - Title should be massive, e.g., `text-5xl md:text-8xl tracking-tight font-sans font-semibold`.
    - Content should speak to the spec: "Software Engineer & AI Enthusiast".
    - If there was a prominent photo or heavy graphic, strip it back or make it monochromatic/highly stylized.
  </action>
  <verify>grep -q "min-h-" src/app/[locale]/sections/hero.tsx</verify>
  <done>Hero features massive typography, immense whitespace, and fully reflects the ultra-premium aesthetic.</done>
</task>

## Success Criteria
- [ ] Header floats over the page gracefully.
- [ ] Hero instantly sells a high-end, minimal persona.
