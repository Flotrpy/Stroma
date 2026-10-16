import { describe, expect, it } from 'vitest'
import { demoContract, demoExecution } from '../data/demo'
import { runRoute } from '../hooks/useRunSimulation'
import { reviewExecution } from './review'

const allPassing = { ...demoExecution, checks: demoExecution.checks.map((check) => ({ ...check, passed: true })) }

describe('reviewExecution', () => {
  it('turns failed executor checks into planner fixes', () => {
    const report = reviewExecution(demoContract, demoExecution, 'codex', () => 'Added the dedupe lookup.')
    expect(report.outcome).toBe('repaired')
    expect(report.reviewer).toBe('Codex')
    expect(report.findings).toEqual([expect.objectContaining({ check: 'Duplicate events are idempotent', fix: 'Added the dedupe lookup.', resolved: true })])
    expect(report.checksPassed).toBe(report.checksTotal)
    expect(report.plannerCalls).toBe(3)
  })

  it('accepts clean executor output without a repair call', () => {
    const report = reviewExecution(demoContract, allPassing, 'claude')
    expect(report).toMatchObject({ outcome: 'verified', findings: [], plannerCalls: 2, checksPassed: 3 })
  })

  it('leaves failures open for a person when no planner is connected', () => {
    const report = reviewExecution(demoContract, demoExecution, 'none')
    expect(report).toMatchObject({ outcome: 'unreviewed', plannerCalls: 0, checksPassed: 2 })
    expect(report.findings[0]?.resolved).toBe(false)
  })
})

describe('runRoute', () => {
  it('adds review and repair stages only when the planner does that work', () => {
    expect(runRoute(reviewExecution(demoContract, demoExecution, 'codex'))).toContain('repairing')
    expect(runRoute(reviewExecution(demoContract, allPassing, 'codex'))).toEqual(['defining', 'routing', 'executing', 'verifying', 'reviewing', 'complete'])
    expect(runRoute(reviewExecution(demoContract, demoExecution, 'none'))).not.toContain('reviewing')
  })
})
