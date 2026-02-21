---
phase: 3
plan: 2
wave: 2
---

# Plan 3.2: Advanced Scroll Triggers & Parallax

## Objective
Apply modern page traversal interactions throughout the rest of the site's layout utilizing scroll-linked animations. Refine `AnimatedItem` to have a slightly more complex and elegant transition.

## Context
- .gsd/ROADMAP.md (Phase 3)
- src/app/[locale]/sections/components/common/AnimatedItem.tsx
- src/app/[locale]/sections/projects.tsx
- src/app/[locale]/sections/components/common/repoCard.tsx

## Tasks

<task type="auto">
  <name>Refactor Global AnimatedItem Component</name>
  <files>src/app/[locale]/sections/components/common/AnimatedItem.tsx</files>
  <action>
    - Update `AnimatedItem` to use a sophisticated `filter: blur(10px)` to `blur(0px)` scale intro combined with standard `y` translation.
    - Ensure performance impact is negligible by adjusting viewport trigger margins correctly and avoiding deeply nested blurring.
  </action>
  <verify>grep -q "blur" src/app/[locale]/sections/components/common/AnimatedItem.tsx</verify>
  <done>Scroll reveals now utilize subtle un-blur entrance, adding heavy premium feel.</done>
</task>

<task type="auto">
  <name>Add Sub-animations to Cards</name>
  <files>src/app/[locale]/sections/components/common/repoCard.tsx</files>
  <action>
    - Make the repository cards interactive using `framer-motion` `whileHover` and `whileTap` properties to add subtle physics scale and elevation.
    - If `Card` element from shadcn needs motion, ensure `motion.div` wraps it elegantly or `motion.create()` is used.
  </action>
  <verify>grep -q "motion" src/app/[locale]/sections/components/common/repoCard.tsx</verify>
  <done>Cards feel slightly elastic when hovered or interacted with.</done>
</task>

## Success Criteria
- [ ] The user feels a sense of continuous motion and flow when scrolling the page.
- [ ] Component reveals are staggered correctly giving depth to the layout.
