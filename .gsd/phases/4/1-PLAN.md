---
phase: 4
plan: 1
wave: 1
---

# Plan 4.1: The AI Trigger Mechanism

## Objective
Implement a hidden interaction model (Easter Egg) that listens for a specific user behavior to unlock the "AI" mode of the portfolio. This satisfies the core requirement (REQ-04) for a signature AI touch.

## Context
- .gsd/ROADMAP.md (Phase 4)
- .gsd/REQUIREMENTS.md (REQ-04)
- src/app/[locale]/layout.tsx (or a new global provider)

## Tasks

<task type="auto">
  <name>Create Global Easter Egg Listener</name>
  <files>src/components/common/EasterEggProvider.tsx, src/app/[locale]/layout.tsx</files>
  <action>
    - Create a new client component `EasterEggProvider` or a hook `useEasterEgg` in `src/components/common/`.
    - Implement a sequence listener (e.g., typing "sudo" or "ai").
    - Use Zustand or React Context to hold a boolean `isAiModeEnabled` globally.
    - Wrap the main application layout (`src/app/[locale]/layout.tsx`) with this provider so the trigger works anywhere on the site.
  </action>
  <verify>grep -q "EasterEggProvider" src/app/[locale]/layout.tsx</verify>
  <done>Global listener for the secret sequence is active and injecting state into the app.</done>
</task>

## Success Criteria
- [ ] Typing the secret sequence toggles the global `isAiModeEnabled` state without disrupting normal navigation.
