---
phase: 2
plan: 2
wave: 2
---

# Plan 2.2: Page Structure Strategy (Content Sections)

## Objective
Carry the massive whitespace, monochromatic look, and strict alignment into the remaining content components: `About`, `Skills`, `Projects`, `Contact`, and `Footer`. Remove boxy cards with heavy borders; instead rely on typographic hierarchy, subtle rules (1px borders), and layout spacing (`space-y-32`, etc.).

## Context
- .gsd/SPEC.md
- src/app/[locale]/sections/about.tsx
- src/app/[locale]/sections/skills.tsx
- src/app/[locale]/sections/projects.tsx
- src/app/[locale]/sections/contact.tsx
- src/app/[locale]/sections/footer.tsx
- src/app/[locale]/page.tsx

## Tasks

<task type="auto">
  <name>Refactor Content Sections for Extreme Minimalism</name>
  <files>
    src/app/[locale]/sections/about.tsx,
    src/app/[locale]/sections/skills.tsx,
    src/app/[locale]/sections/contact.tsx,
    src/app/[locale]/sections/projects.tsx
  </files>
  <action>
    - Overhaul these sections to match the Hero's aesthetic.
    - **Projects:** Remove heavy "Card" UI. Make them text-driven with subtle hover states, or huge clean images if applicable, separated by `border-t border-border/50`. Ensure it follows REQ-05 (real case studies format, minimalistic).
    - **Skills:** Instead of grids of saturated icons, use clean lists, monochromatic tech badges, or simple typography.
    - **About / Contact:** Give them breathing room. A single column or a classic asymmetric two-column structure (sidebar for section title, main col for content).
  </action>
  <verify>ls src/app/[locale]/sections/projects.tsx</verify>
  <done>All internal sections use minimal UI, discarding default heavy "cards" for layout, grids, and typography.</done>
</task>

<task type="auto">
  <name>Refactor Footer and Page Spacing</name>
  <files>src/app/[locale]/page.tsx, src/app/[locale]/sections/footer.tsx</files>
  <action>
    - **Page:** Increase the gap between sections significantly. Swap `<div className="space-y-10">` for `<div className="space-y-32 md:space-y-48 pb-24">`.
    - **Footer:** Ensure the footer is extremely utilitarian. Minimal links, tiny text (`text-xs text-muted-foreground`), and highly structured flex rows.
  </action>
  <verify>grep -q "space-y-" src/app/[locale]/page.tsx</verify>
  <done>Vertical rhythm feels incredibly open; the footer closes the experience professionally.</done>
</task>

## Success Criteria
- [ ] Users scrolling down feel a consistent, airy, and hyper-structured UI.
- [ ] Cards have been replaced or severely minimalized to strip back visual noise.
