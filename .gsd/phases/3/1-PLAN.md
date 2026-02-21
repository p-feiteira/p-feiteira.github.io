---
phase: 3
plan: 1
wave: 1
---

# Plan 3.1: Complex Hero Initial Interactions

## Objective
Elevate the initial load sequence for the website. Ditch the basic interval-based "typewriter effect" in the `Hero` section and replace it with a fluid, performant Framer Motion text-reveal and initial parallax entrance.

## Context
- .gsd/ROADMAP.md (Phase 3)
- .gsd/REQUIREMENTS.md (REQ-03)
- src/app/[locale]/sections/hero.tsx

## Tasks

<task type="auto">
  <name>Refactor Hero String Revealer to Framer Motion</name>
  <files>src/app/[locale]/sections/hero.tsx</files>
  <action>
    - Remove the existing `useEffect` manual timeout typing effect in `HeroName`.
    - Implement a Framer Motion approach for text reveal: stagger children (words or characters) bursting or sliding up from `.translate-y-full` masked by an overflow-hidden wrapper, or a smooth `filter: blur()` reveal.
    - Animate the Avatar Image fade-in and subtle scale-down.
    - Ensure performance is high (use `will-change: transform`).
  </action>
  <verify>grep -q "\<motion" src/app/[locale]/sections/hero.tsx</verify>
  <done>Text now reveals using a sleek spring-based Framer Motion orchestration instead of blocky javascript intervals.</done>
</task>

## Success Criteria
- [ ] Initial impression loading the page is butter-smooth (REQ-06).
- [ ] Typography animation looks premium, not like a retro terminal (unless specified otherwise).
