export type PlannerId = 'codex' | 'claude' | 'none'

export type ExecutorId = 'gemini' | 'groq' | 'openrouter' | 'local'

export type RunStage = 'idle' | 'defining' | 'routing' | 'executing' | 'verifying' | 'complete'

export interface Planner {
  id: PlannerId
  name: string
  model: string
  access: string
  status: 'connected' | 'available' | 'unavailable'
}

export interface Executor {
  id: ExecutorId
  name: string
  model: string
  provider: string
  strengths: string[]
  cost: string
  privacy: string
  latency: number
  status: 'ready' | 'limited' | 'offline'
}

export interface TaskContract {
  intent: string
  deliverables: string[]
  constraints: string[]
  acceptanceTests: string[]
  requiredCapabilities: string[]
  risk: 'low' | 'medium' | 'high'
}

export interface LedgerItem {
  id: string
  title: string
  kind: 'code' | 'writing' | 'math' | 'research'
  planner: string
  executor: string
  saved: string
  status: 'verified' | 'review' | 'failed'
  timestamp: string
}
