import { useCallback, useEffect, useRef } from 'react'
import { useStromaStore } from '../store/useStromaStore'
import type { RunStage } from '../types'

const route: Array<{ stage: RunStage; delay: number }> = [
  { stage: 'defining', delay: 0 },
  { stage: 'routing', delay: 850 },
  { stage: 'executing', delay: 1850 },
  { stage: 'verifying', delay: 3400 },
  { stage: 'complete', delay: 4600 },
]

export function useRunSimulation() {
  const setStage = useStromaStore((state) => state.setStage)
  const setContract = useStromaStore((state) => state.setContract)
  const timers = useRef<number[]>([])

  const clear = useCallback(() => {
    timers.current.forEach((timer) => window.clearTimeout(timer))
    timers.current = []
  }, [])

  const start = useCallback(() => {
    clear()
    const { demoContract } = import('../data/demo')
    void demoContract.then(({ demoContract: contract }) => setContract(contract))

    route.forEach(({ stage, delay }) => {
      timers.current.push(window.setTimeout(() => setStage(stage), delay))
    })
  }, [clear, setContract, setStage])

  useEffect(() => clear, [clear])

  return { start, clear }
}
