import { beforeEach, describe, expect, it } from 'vitest'
import { useStromaStore } from './useStromaStore'

describe('Stroma store', () => {
  beforeEach(() => {
    useStromaStore.setState({ prompt: '', planner: 'codex', executor: 'groq', stage: 'idle', contract: null })
  })

  it('updates the task prompt', () => {
    useStromaStore.getState().setPrompt('Define the expected outcome')
    expect(useStromaStore.getState().prompt).toContain('outcome')
  })

  it('resets active runs without changing provider choices', () => {
    useStromaStore.setState({ planner: 'claude', stage: 'complete' })
    useStromaStore.getState().resetRun()
    expect(useStromaStore.getState()).toMatchObject({ planner: 'claude', stage: 'idle', contract: null })
  })
})
