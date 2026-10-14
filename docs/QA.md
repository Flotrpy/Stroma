# Release quality plan

## Automated

- Strict TypeScript compilation
- Component and state tests
- Production bundling
- Dependency audit
- Accessibility scan
- Responsive visual regression at 375, 768, 1024, and 1440 pixels

## Manual

- Complete every workflow with keyboard only
- Test reduced motion, increased contrast, 200% zoom, and screen-reader landmarks
- Exercise empty, loading, success, failure, timeout, rate-limit, and partial-stream states
- Verify that every cost, privacy, and access claim comes from live provider metadata
- Confirm credentials never appear in logs, DOM snapshots, analytics, or error messages
- Run a closed beta with realistic long prompts, files, slow networks, and expired connections

## Launch gate

No release is production-ready until authentication, authorization, sandbox isolation, provider failures, fallback behavior, and quota accounting are tested against real integrations.
