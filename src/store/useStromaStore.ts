import { create } from 'zustand'
import { demoContract } from '../data/demo'
import type { ExecutorId, PlannerId, RunStage, TaskContract } from '../types'

interface StromaState {
  activeSection: string
  planner: PlannerId
  executor: ExecutorId
  prompt: string
  stage: RunStage
  contract: TaskContract | null
  commandOpen: boolean
  connectionOpen: boolean
  setActiveSection: (section: string) => void
  setPlanner: (planner: PlannerId) => void
  setExecutor: (executor: ExecutorId) => void
  setPrompt: (prompt: string) => void
  setStage: (stage: RunStage) => void
  setContract: (contract: TaskContract | null) => void
  setCommandOpen: (open: boolean) => void
  setConnectionOpen: (open: boolean) => void
  resetRun: () => void
  runDemo: () => void
}

export const useStromaStore = create<StromaState>((set) => ({
  activeSection: 'studio',
  planner: 'codex',
  executor: 'groq',
  prompt: '',
  stage: 'idle',
  contract: null,
  commandOpen: false,
  connectionOpen: false,
  setActiveSection: (activeSection) => set({ activeSection }),
  setPlanner: (planner) => set({ planner }),
  setExecutor: (executor) => set({ executor }),
  setPrompt: (prompt) => set({ prompt }),
  setStage: (stage) => set({ stage }),
  setContract: (contract) => set({ contract }),
  setCommandOpen: (commandOpen) => set({ commandOpen }),
  setConnectionOpen: (connectionOpen) => set({ connectionOpen }),
  resetRun: () => set({ stage: 'idle', contract: null }),
  runDemo: () => set({ stage: 'defining', contract: demoContract }),
}))
