import { describe, expect, it } from 'vitest'
import { executors, planners } from './models'

describe('model catalog', () => {
  it('offers a no-planner path that preserves quota', () => {
    expect(planners.find((planner) => planner.id === 'none')?.access).toMatch(/quota/i)
  })

  it('documents privacy and cost for every executor', () => {
    expect(executors.every((executor) => executor.cost && executor.privacy)).toBe(true)
  })

  it('keeps executor identifiers unique', () => {
    expect(new Set(executors.map((executor) => executor.id)).size).toBe(executors.length)
  })
})
