---
phase: 4
plan: 2
wave: 2
---

# Plan 4.2: The AI Visual Experience

## Objective
When the Easter egg is triggered (`isAiModeEnabled == true`), radically alter the visual appearance of the site or inject an interactive "AI terminal" overlay to show off technical and creative depth.

## Context
- .gsd/ROADMAP.md (Phase 4)
- src/components/common/AiOverlay.tsx (to be created)
- src/app/[locale]/layout.tsx

## Tasks

<task type="auto">
  <name>Build AI Overlay Component</name>
  <files>src/components/common/AiOverlay.tsx, src/app/[locale]/layout.tsx</files>
  <action>
    - Create `AiOverlay.tsx`, a fixed, full-screen overlay (`z-50`, `pointer-events-none` for background effects, or an interactive modal).
    - Inside, implement a "terminal" boot sequence using Framer Motion (typing out systemic boot logs, e.g., "INITIALIZING A.I. PROTOCOLS...").
    - Add a distinct visual change—such as highly saturated accent glows (`box-shadow`), a custom cursor, or shifting the background to a matrix/grid style.
    - Inject this component into `layout.tsx` so it renders when the Easter egg state is active.
    - Include a way to close or deactivate the mode (e.g., an 'X' button or re-typing the sequence).
  </action>
  <verify>grep -q "AiOverlay" src/app/[locale]/layout.tsx</verify>
  <done>The site transitions into a high-tech/AI aesthetic when the trigger is pulled.</done>
</task>

## Success Criteria
- [ ] Triggering the Easter Egg provides a noticeable, high-quality visual change (REQ-04).
- [ ] Users can easily exit the state and return to the minimalist portfolio.
