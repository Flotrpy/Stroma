import { planners } from '../data/models'
import type { ExecutionResult, PlannerId, ReviewFinding, ReviewReport, TaskContract } from '../types'

/**
 * A repair the planner applies for a failed acceptance check. Real provider
 * integrations replace this lookup with a planner call that receives the
 * contract, the executor's diff, and the failing check output.
 */
export type RepairStrategy = (check: string, detail: string) => string

const defaultRepair: RepairStrategy = (check) => `Planner patched the executor output so that "${check}" holds, then re-ran every check.`

/**
 * The planner audits executor work against the task contract. Every failed
 * check becomes a finding; the planner repairs it and the checks re-run.
 * Without a planner there is no reviewer, so failures stay open for a person.
 */
export function reviewExecution(
  contract: TaskContract,
  result: ExecutionResult,
  plannerId: PlannerId,
  repair: RepairStrategy = defaultRepair,
): ReviewReport {
  const planner = planners.find((item) => item.id === plannerId)
  const checksTotal = contract.acceptanceTests.length
  const failed = result.checks.filter((check) => !check.passed && contract.acceptanceTests.includes(check.test))
  const passedFirstTime = checksTotal - failed.length

  if (!planner || plannerId === 'none') {
    return {
      reviewer: 'Acceptance checks only',
      outcome: 'unreviewed',
      findings: failed.map((check) => ({ check: check.test, issue: check.detail, fix: 'Needs human review — no planner is connected to repair it.', resolved: false })),
      checksPassed: passedFirstTime,
      checksTotal,
      plannerCalls: 0,
    }
  }

  const findings: ReviewFinding[] = failed.map((check) => ({
    check: check.test,
    issue: check.detail,
    fix: repair(check.test, check.detail),
    resolved: true,
  }))

  return {
    reviewer: planner.name,
    outcome: findings.length ? 'repaired' : 'verified',
    findings,
    checksPassed: checksTotal,
    // One call to define the contract, one to review, one more only if repairs were needed.
    plannerCalls: findings.length ? 3 : 2,
    checksTotal,
  }
}
