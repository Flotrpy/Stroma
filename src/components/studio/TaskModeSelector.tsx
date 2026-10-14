import type { TaskMode } from '../../types'

const modes: Array<{ id: TaskMode; label: string; note: string }> = [
  { id: 'auto', label: 'Saver', note: 'Plan only when needed' },
  { id: 'architect', label: 'Architect', note: 'Always define a contract' },
  { id: 'direct', label: 'Direct', note: 'Executor receives your prompt' },
]

export function TaskModeSelector({ value, onChange }: { value: TaskMode; onChange: (mode: TaskMode) => void }) {
  return (
    <div className="task-mode" role="radiogroup" aria-label="Task planning mode">
      {modes.map((mode) => (
        <button key={mode.id} role="radio" aria-checked={value === mode.id} className={value === mode.id ? 'is-selected' : ''} onClick={() => onChange(mode.id)}>
          <strong>{mode.label}</strong><small>{mode.note}</small>
        </button>
      ))}
    </div>
  )
}
