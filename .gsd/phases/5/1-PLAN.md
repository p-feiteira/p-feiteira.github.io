---
phase: 5
plan: 1
wave: 1
---

# Plan 5.1: Performance Audit and Polish

## Objective
Final review of the site (REQ-06) to ensure cross-device consistency, clean code (0 build warnings, 0 type issues), and high-framerate framer-motion animations.

## Context
- .gsd/ROADMAP.md (Phase 5)
- .gsd/REQUIREMENTS.md (REQ-06)
- Entire `src/` directory

## Tasks

<task type="manual">
  <name>Visual Safari/Mobile Verification</name>
  <files>None</files>
  <action>
    - Ensure `.min-h-[85vh]` isn't suffering from mobile browser UI crop issues (100dvh check if needed).
    - Check the scaling of the `<HeroName>` string break-words functionality.
    - Check the `<AiOverlay>` behavior on smaller screens (the text overflows).
  </action>
  <verify>npx tsc --noEmit && npm run build</verify>
  <done>Mobile visual inspection checks out.</done>
</task>

<task type="auto">
  <name>Fix Strict Type Errors and Dependency Lintings</name>
  <files>src/components/common/EasterEggProvider.tsx, src/app/[locale]/sections/hero.tsx</files>
  <action>
    - Run `tsc --noEmit` and ensure no unhandled `any` types or unknown references exist.
    - Validate Next.js build compilation (`npm run build`).
  </action>
  <verify>npx tsc --noEmit && npm run build</verify>
  <done>Build passes completely without warnings.</done>
</task>

## Success Criteria
- [ ] No visual breaks on extremely small screens (320px width).
- [ ] Next.js production `build` succeeds perfectly without TS errors.
- [ ] The `EasterEggProvider` does not throw hydration mismatch errors from registering key events.
