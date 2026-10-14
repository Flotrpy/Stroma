# Security and privacy boundary

The current build is a front-end product prototype and does not collect credentials or make provider requests.

Production implementation requirements:

1. Use only provider-supported authentication flows.
2. Keep persistent ChatGPT plan tokens local and under the user’s control.
3. Use Anthropic API keys or supported cloud providers; never collect Claude subscription cookies or impersonate Claude Code.
4. Encrypt local secrets and never render them back into the UI.
5. Require explicit consent for background processing.
6. Bind every request to the authenticated user who authorized it.
7. Add strict content-security policy, origin checks, CSRF protection, secret redaction, rate limits, and audit logging.
8. Run code in an isolated, disposable sandbox with bounded time, memory, network, and filesystem authority.
9. Treat model output and tool arguments as untrusted input.
10. Cap retries, detect fallback cycles, and use idempotency keys for mutations.
