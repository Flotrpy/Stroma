import type { TaskContract } from '../types'

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
