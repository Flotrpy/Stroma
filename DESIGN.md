# Stroma — Product and Interface Direction

## Product premise

Stroma turns a loose request into a precise task contract with a frontier planner, then routes execution to the least expensive capable model. The interface must make that hand-off legible: users should always know what is being planned, what is being executed, why a model was selected, and what verified the result.

## Visual thesis

The product is an editorial instrument, not a generic AI dashboard. Its identity combines the sobriety of a professional control room with the physical presence of a kinetic sculpture.

- Canvas: warm black (`#0b0c0b`) and paper (`#f0f0e8`), never blue-black.
- Signal color: chartreuse (`#d7ff64`) used only for live state, focus, and primary action.
- Typography: an expressive serif for statements; a disciplined grotesk for controls; tabular numerals for telemetry.
- Geometry: hairline rules, square fields, clipped corners, and one continuous orbital motif. Avoid floating glass cards and default rounded rectangles.
- Motion: mechanical and purposeful. Motion explains routing, state change, and hierarchy. It never decorates idle space.
- Imagery: a procedural 3D relay core visualizes work moving from planner to executor. No stock AI brains, sparkles, robots, or gradient blobs.

## Anti-patterns

- No purple or blue gradient hero.
- No centered headline/subhead/two-button SaaS hero.
- No three equal feature cards.
- No Inter, emoji icons, fake testimonials, or invented customer logos.
- No excessive pills, glassmorphism, soft drop shadows, or arbitrary 24px radii.
- No claim without a visible product mechanism or clearly illustrative label.
- No animation that survives `prefers-reduced-motion` without serving comprehension.

## Type system

- Display: Instrument Serif, 400.
- Interface: Manrope, 400–700.
- Telemetry: IBM Plex Mono, 400–500.
- Display tracking: `-0.045em`; interface tracking remains optical; utility labels use `0.12em` uppercase.
- Maximum body measure: 64 characters.

## Spatial system

- Base unit: 4px.
- Primary intervals: 8, 12, 16, 24, 32, 48, 72, 96, 144.
- Desktop shell gutter: 32–48px.
- Mobile shell gutter: 18px.
- Hairlines separate regions; surfaces are not boxed unless they are interactive.

## Product architecture

1. Landing / product thesis
2. Interactive task studio
3. Route explanation and task contract
4. Model connections
5. Usage and verification ledger
6. Settings, privacy, and local execution controls

## Interaction principles

1. Preview before spend: planner, executor, privacy policy, and expected quota are visible before a run.
2. Progressive authority: task definition, execution, verification, then optional escalation.
3. State is physical: route lines, status lamps, and the relay core change together.
4. Keyboard first: the composer, model switcher, command palette, and navigation are operable without a pointer.
5. Honest demos: simulated values are labeled as preview data.

## Content voice

Short, exact, calm. Avoid “revolutionize,” “supercharge,” “unlock,” and vague claims. Prefer operational language: define, route, run, verify, escalate.
