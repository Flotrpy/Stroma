# Accessibility contract

- Keyboard access is supported for navigation, planner choice, task mode, budget, composer submission, settings, and the command palette.
- A skip link reaches the primary content landmark.
- Status and route stages expose textual labels instead of depending on color.
- `prefers-reduced-motion` disables the pointer follower, shortens the intro, and removes continuous animation.
- Touch targets remain usable at narrow viewports and the application reflows without requiring horizontal page scrolling.
- Focus states use the product signal color with sufficient offset.
- Decorative WebGL and kinetic elements are hidden from assistive technology.
- Illustrative metrics and simulated connection states are explicitly labeled.

Before production launch, run automated axe checks plus manual keyboard, screen-reader, 200% zoom, forced-colors, and reduced-motion passes.
