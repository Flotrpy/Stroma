import type { Executor, Planner } from '../types'

export const planners: Planner[] = [
  {
    id: 'codex',
    name: 'Codex',
    model: 'GPT frontier',
    access: 'ChatGPT plan',
    status: 'connected',
  },
  {
    id: 'claude',
    name: 'Claude',
    model: 'Claude Sonnet',
    access: 'API key',
    status: 'available',
  },
  {
    id: 'none',
    name: 'Direct',
    model: 'No planner',
    access: 'Preserves quota',
    status: 'available',
  },
]

export const executors: Executor[] = [
  {
    id: 'gemini',
    name: 'Gemini Flash',
    model: 'Flash',
    provider: 'Google AI Studio',
    strengths: ['writing', 'vision', 'long context'],
    cost: 'Free tier',
    privacy: 'Provider training may apply',
    latency: 1.2,
    status: 'ready',
  },
  {
    id: 'groq',
    name: 'GPT-OSS 120B',
    model: 'GPT-OSS 120B',
    provider: 'Groq',
    strengths: ['code', 'reasoning', 'structured output'],
    cost: 'Free tier',
    privacy: 'Cloud processing',
    latency: 0.6,
    status: 'ready',
  },
  {
    id: 'openrouter',
    name: 'Free Router',
    model: 'Capability matched',
    provider: 'OpenRouter',
    strengths: ['fallback', 'tool use', 'broad catalog'],
    cost: '$0',
    privacy: 'Varies by route',
    latency: 1.8,
    status: 'limited',
  },
  {
    id: 'local',
    name: 'Local Runtime',
    model: 'Auto detect',
    provider: 'This device',
    strengths: ['privacy', 'offline', 'unlimited'],
    cost: '$0',
    privacy: 'Never leaves device',
    latency: 2.4,
    status: 'ready',
  },
]
