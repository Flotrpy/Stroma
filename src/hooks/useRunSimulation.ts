import { useCallback, useEffect, useRef } from 'react'
import { demoContract, demoExecution, demoRepairs } from '../data/demo'
import { reviewExecution } from '../lib/review'
import { useStromaStore } from '../store/useStromaStore'
import type { ReviewReport, RunStage } from '../types'

const STEP = 950

/** Stages a run passes through. Review and repair only happen when a planner can do them. */
export function runRoute(review: ReviewReport): RunStage[] {
  const stages: RunStage[] = ['defining', 'routing', 'executing', 'verifying']
  if (review.outcome !== 'unreviewed') stages.push('reviewing')
  if (review.outcome === 'repaired') stages.push('repairing')
  return [...stages, 'complete']
}

export function useRunSimulation() {
  const setStage = useStromaStore((state) => state.setStage)
  const setContract = useStromaStore((state) => state.setContract)
  const setReview = useStromaStore((state) => state.setReview)
  const timers = useRef<number[]>([])

  const clear = useCallback(() => {
    timers.current.forEach((timer) => window.clearTimeout(timer))
    timers.current = []
  }, [])

  const start = useCallback(() => {
    clear()
    const planner = useStromaStore.getState().planner
    const executor = useStromaStore.getState().executor
    const review = reviewExecution(demoContract, { ...demoExecution, executor }, planner, (check) => demoRepairs[check] ?? `Planner repaired "${check}".`)
    setContract(demoContract)
    setReview(null)

    const stages = runRoute(review)
    stages.forEach((stage, index) => {
      timers.current.push(window.setTimeout(() => {
        setStage(stage)
        // Findings surface once the planner starts reviewing (or at the end, without a planner).
        if (stage === 'reviewing' || stage === 'complete') setReview(review)
      }, index * STEP))
    })
  }, [clear, setContract, setReview, setStage])

  useEffect(() => clear, [clear])

  return { start, clear }
}
