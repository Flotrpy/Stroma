# Front-end architecture

The prototype separates presentation, domain data, state, and execution simulation so real provider integrations can replace demo behavior without rebuilding the interface.

- `components/landing`: public narrative and product explanation
- `components/studio`: operational task, provider, ledger, usage, and policy views
- `components/system`: cross-application feedback and accessibility behavior
- `components/visual`: isolated WebGL and route visualization
- `data`: clearly labeled preview fixtures
- `store`: small deterministic UI state
- `hooks`: lifecycle, keyboard, and preference behavior
- `styles`: token-led layers organized by interface responsibility

The WebGL scene is loaded independently from the primary interface bundle. Core workflows remain legible while it loads and do not depend on the canvas.
