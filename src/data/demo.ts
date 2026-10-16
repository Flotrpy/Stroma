import type { ExecutionResult, TaskContract } from '../types'

export const examplePrompts = [
  'Refactor the billing webhook and cover every failure path without adding dependencies.',
  'Turn these interview notes into a concise research brief with traceable claims.',
  'Solve this recurrence relation and verify the result symbolically.',
]

export const demoContract: TaskContract = {
  intent: 'Refactor the billing webhook into a reliable, test-covered flow.',
  deliverables: [
    'A focused implementation diff',
    'Coverage for retry and signature failures',
    'A concise verification report',
  ],
  constraints: ['No new dependencies', 'Preserve the public handler contract'],
  acceptanceTests: [
    'Existing tests remain green',
    'Duplicate events are idempotent',
    'Invalid signatures fail closed',
  ],
  requiredCapabilities: ['code editing', 'tool calling', 'structured output'],
  risk: 'medium',
}

/** Preview output from the free executor: one acceptance check fails on the first pass. */
export const demoExecution: ExecutionResult = {
  executor: 'groq',
  summary: 'Split the webhook into verify, dedupe, and apply steps with retry coverage.',
  checks: [
    { test: 'Existing tests remain green', passed: true, detail: '42 of 42 tests passed.' },
    {
      test: 'Duplicate events are idempotent',
      passed: false,
      detail: 'A redelivered event writes the ledger entry twice because the retry path skips the dedupe lookup.',
    },
    { test: 'Invalid signatures fail closed', passed: true, detail: 'Tampered payloads return 401 before parsing.' },
  ],
}

/** Preview repairs the planner applies to findings in the demo execution. */
export const demoRepairs: Record<string, string> = {
  'Duplicate events are idempotent':
    'Moved the idempotency-key lookup ahead of the retry branch and added a regression test for redelivered events.',
}
